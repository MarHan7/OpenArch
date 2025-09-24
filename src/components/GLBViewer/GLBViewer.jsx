import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import colorMaterialsData from '../../data/colorData';
import {
  Scene,
  Color,
  OrthographicCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  Vector3,
  Box3,
  Plane,
  FrontSide,
  MeshBasicMaterial,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  PCFShadowMap
} from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './GLBViewer.module.css';

const GLBViewer = forwardRef(({ 
  models = [],
  modelPath = null,
  zoomValue = 20,
  height = 600,
  chromeZoomMultiplier = 1.3,
  withEdgesLines = false,
  onColorDataChange = () => {},
  onModelLoad = () => {},
  onLoadingChange = () => {}
}, ref) => {
  const mountRef = useRef(null);
  const viewerRef = useRef(null);
  const animationIdRef = useRef(null);
  const [currentModelPath, setCurrentModelPath] = useState(modelPath);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useImperativeHandle(ref, () => ({
    setColorVisibility: (colorLabel, visible) => {
      if (viewerRef.current) {
        viewerRef.current.setColorVisibility(colorLabel, visible);
      }
    },
    setClipping: (axis, enabled, position) => {
      if (viewerRef.current) {
        viewerRef.current.setClipping(axis, enabled, position);
      }
    },
    getColorData: () => {
      return viewerRef.current ? viewerRef.current.getColorData() : {};
    },
    resetCamera: () => {
      if (viewerRef.current) {
        viewerRef.current.resetCamera();
      }
    }
  }));

  // Effect to handle model loading when modelPath changes
  useEffect(() => {
    let targetModelPath = null;
    
    if (modelPath) {
      targetModelPath = modelPath;
    } else if (models && models.length > 0) {
      targetModelPath = Array.isArray(models) ? models[0] : models;
    }

    if (targetModelPath && targetModelPath !== currentModelPath) {
      setCurrentModelPath(targetModelPath);
      
      if (viewerRef.current && viewerRef.current.loadModel) {
        viewerRef.current.loadModel(targetModelPath);
      }
    }
  }, [modelPath, models, currentModelPath]);

  // Calculate responsive zoom value based on screen width
  const calculateResponsiveZoom = (baseZoom, screenWidth) => {
    const breakpoints = {
      mobile: 868,
      tablet: 1024,
      desktop: 1440
    };

    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const effectiveBaseZoom = isChrome ? baseZoom * chromeZoomMultiplier : baseZoom;

    let multiplier = 1;
    
    if (screenWidth <= breakpoints.mobile) {
      multiplier = 1.5;
    } else if (screenWidth <= breakpoints.tablet) {
      multiplier = 1.2;
    } else if (screenWidth >= breakpoints.desktop) {
      multiplier = 0.8;
    }

    return effectiveBaseZoom * multiplier;
  };

  useEffect(() => {
    if (viewerRef.current) return;

    const initViewer = () => {
      if (!mountRef.current) return;

      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new Scene();
      scene.background = new Color('white');

      // Apply responsive zoom
      const responsiveZoom = calculateResponsiveZoom(zoomValue, width);
      const aspect = width / height;

      const camera = new OrthographicCamera(
        -responsiveZoom * aspect / 2,
        responsiveZoom * aspect / 2,
        responsiveZoom / 2,
        -responsiveZoom / 2,
        0.1,
        500
      );

      camera.position.set(15, 12, 15);
      camera.lookAt(0, 0, 0);
      
      const renderer = new WebGLRenderer({ 
        antialias: true,
        powerPreference: "high-performance",
        logarithmicDepthBuffer: false,
        stencil: false,
      });
      
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = false;
      renderer.localClippingEnabled = true;
      renderer.toneMappingExposure = 2.5;
      
      container.appendChild(renderer.domElement);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = false;
      controls.screenSpacePanning = false;
      controls.enableZoom = false;
      controls.enablePan = false;

      const isometricPolarAngle = Math.acos(1/Math.sqrt(3));
      controls.minPolarAngle = isometricPolarAngle;
      controls.maxPolarAngle = isometricPolarAngle;

      // Lighting setup
      const sunLight = new DirectionalLight(0xffffff, 6.0); 
      sunLight.position.set(10, 15, 5);
      scene.add(sunLight);
        
      const sunLight2 = new DirectionalLight(0xffffff, 4.0);
      sunLight2.position.set(-10, 12, -3);
      scene.add(sunLight2);

      const sunLight3 = new DirectionalLight(0xffffff, 3.5);
      sunLight3.position.set(5, 18, -10);
      scene.add(sunLight3);

      const ambientLight = new AmbientLight(0xffffff, 2.5);
      scene.add(ambientLight);

      const topLight = new DirectionalLight(0xffffff, 4.0);
      topLight.position.set(0, 25, 0);
      scene.add(topLight);

      // Model data storage
      let model = null;
      let clippingPlanes = [];
      let colorFilterData = {};
      let boundingBox = new Box3();

      // Create DRACO loader once and reuse it
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      dracoLoader.setDecoderConfig({ type: 'wasm' }); // Use WASM for better performance
      dracoLoader.preload(); // Preload the decoder

      // Create GLTF loader once and reuse it
      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);

      const COLOR_NAME_MAP = {
        "#00bda6": "Biosourced",
        "#b4b4b4": "Mineral",
        "#f35172": "Metal",
        "#00bda6": "Biobased",
        "#d3bda5": "Geobased",
        "#00cae3": "Glass",
        "#f7b3d5": "Plastic",
      };

      const clippingState = {
        x: { enabled: false, position: 0 },
        y: { enabled: false, position: 0 },
        z: { enabled: false, position: 0 },
        activeAxis: null
      };

      // Render system
      let needsRender = true;
      let isRendering = false;

      controls.addEventListener('change', () => {
        needsRender = true;
      });

      const render = () => {
        if (!needsRender || isRendering) return;
        
        isRendering = true;
        renderer.render(scene, camera);
        needsRender = false;
        isRendering = false;
      };

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        render();
      };

      const triggerRender = () => {
        needsRender = true;
      };

      const initClippingPlanes = () => {
        clippingPlanes = [
          new Plane(new Vector3(-1, 0, 0), 0),
          new Plane(new Vector3(0, -1, 0), 0),
          new Plane(new Vector3(0, 0, -1), 0)
        ];
      };

      const updateClipping = () => {
        if (clippingPlanes.length === 0) return;
        
        clippingPlanes[0].constant = clippingState.x.position;
        clippingPlanes[1].constant = clippingState.y.position;
        clippingPlanes[2].constant = clippingState.z.position;
        
        const enabledPlanes = [];
        const activeAxis = clippingState.activeAxis;
        
        if (activeAxis === 'x' && clippingState.x.enabled) {
          enabledPlanes.push(clippingPlanes[0]);
        } else if (activeAxis === 'y' && clippingState.y.enabled) {
          enabledPlanes.push(clippingPlanes[1]);
        } else if (activeAxis === 'z' && clippingState.z.enabled) {
          enabledPlanes.push(clippingPlanes[2]);
        }
        
        renderer.localClippingEnabled = enabledPlanes.length > 0;
        
        if (model) {
          model.traverse(child => {
            if (child.isMesh && child.material) {
              const materials = Array.isArray(child.material) ? child.material : [child.material];
              materials.forEach(material => {
                material.clippingPlanes = enabledPlanes;
                material.clipShadows = renderer.shadowMap.enabled;
                material.needsUpdate = true;
              });
              
              if (child.userData.edgeLine && child.userData.edgeLine.material) {
                child.userData.edgeLine.material.clippingPlanes = enabledPlanes;
                child.userData.edgeLine.material.needsUpdate = true;
              }
            }
          });
        }
        
        triggerRender();
      };

      const collectColorData = () => {
        const newColorFilterData = {};
        if (!model) return;

        model.traverse(child => {
          if (child.isMesh && child.material && child.material.color) {
            const hex = "#" + child.material.color.getHexString();
            const label = COLOR_NAME_MAP[hex.toLowerCase()] || hex;
            
            if (!newColorFilterData[label]) {
              newColorFilterData[label] = { 
                enabled: true, 
                meshes: [],
                hex: hex,
                count: 0,
                volume: 0
              };
            }
            
            newColorFilterData[label].meshes.push(child);
            newColorFilterData[label].count++;
            
            if (child.geometry && child.geometry.boundingBox) {
              const box = child.geometry.boundingBox;
              const size = new Vector3().subVectors(box.max, box.min);
              newColorFilterData[label].volume += size.x * size.y * size.z;
            }
          }
        });

        colorFilterData = newColorFilterData;
        onColorDataChange(colorFilterData);
      };

      const resetCamera = () => {
        if (model) {
          boundingBox.setFromObject(model);
          const center = boundingBox.getCenter(new Vector3());
          const size = boundingBox.getSize(new Vector3());
          
          const maxDim = Math.max(size.x, size.y, size.z);
          const fixedCameraDistance = maxDim * 2;
          
          const horizontalAngle = Math.PI / 4;
          const verticalOffset = fixedCameraDistance * 0.7;
          
          camera.position.set(
            center.x + fixedCameraDistance * Math.cos(horizontalAngle),
            center.y + verticalOffset,
            center.z + fixedCameraDistance * Math.sin(horizontalAngle)
          );
          
          camera.lookAt(center);
          controls.target.copy(center);
        }
        triggerRender();
      };

      const addEdgeLines = (model) => {
        const edgeLines = [];
        
        model.traverse(child => {
          if (child.isMesh && child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            
            materials.forEach((material) => {
              let baseColor = new Color(0x808080);
              
              if (material.color) {
                baseColor = material.color.clone();
              } else if (material.map && material.map.image) {
                baseColor = new Color(0x404040);
              }
              
              const edgeColor = baseColor.clone();
              edgeColor.offsetHSL(0, 0, -0.1);
              
              const edges = new EdgesGeometry(child.geometry);
              const edgeMaterial = new LineBasicMaterial({ 
                color: edgeColor,
                linewidth: 1,
                transparent: true,
                opacity: 0.8
              });
              
              const edgeLine = new LineSegments(edges, edgeMaterial);
              
              edgeLine.position.copy(child.position);
              edgeLine.rotation.copy(child.rotation);
              edgeLine.scale.copy(child.scale);
              
              child.parent.add(edgeLine);
              edgeLines.push(edgeLine);
            });
          }
        });
        
        return edgeLines;
      };

      const getMaterialTypeFromColor = (color) => {
        const hexColor = `#${color.getHexString()}`;
        const materialName = COLOR_NAME_MAP[hexColor];
        return materialName ? materialName.toLowerCase() : null;
      };

      const modelCache = new Map();
      const loadModel = (modelPath) => {
        if (modelCache.has(modelPath)) {
          const cachedModel = modelCache.get(modelPath).clone();
          // ... use cached model
          return;
        }
        setIsLoading(true);
        setLoadingProgress(0);
        onLoadingChange(true);

        const startTime = performance.now();
        let downloadSize = 0;

        // Cleanup existing model
        if (model) {
          scene.remove(model);
          model.traverse(child => {
            if (child.isMesh) {
              if (child.geometry) child.geometry.dispose();
              if (child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach(mat => mat.dispose());
              }
            }
          });
          model = null;
        }

        gltfLoader.load(
          modelPath,
          (gltf) => {
            const loadTime = performance.now() - startTime;
            
            // Better Draco detection method
            let dracoUsed = false;
            let totalVertices = 0;
            let dracoBuffers = 0;
            
            // Check if the GLB file contains Draco extension
            if (gltf.parser && gltf.parser.json) {
              const json = gltf.parser.json;
              if (json.extensionsUsed && json.extensionsUsed.includes('KHR_draco_mesh_compression')) {
                dracoUsed = true;
              }
            }
            
            // Alternative detection: check geometries for Draco attributes
            gltf.scene.traverse(child => {
              if (child.isMesh && child.geometry) {
                totalVertices += child.geometry.attributes.position ? child.geometry.attributes.position.count : 0;
                
                // Check for Draco-specific properties
                if (child.geometry.userData && child.geometry.userData.draco) {
                  dracoUsed = true;
                  dracoBuffers++;
                }
                
                // Check for compressed attributes (another indication)
                if (child.geometry.attributes.position && child.geometry.attributes.position.isCompressed) {
                  dracoUsed = true;
                }
              }
            });
                     
            // Process materials (rest of your existing code...)
            gltf.scene.traverse(child => {
              if (child.isMesh) {
                const originalColor = child.material.color;
                const materialType = getMaterialTypeFromColor(originalColor);
                
                if (materialType && colorMaterialsData[materialType]) {
                  child.material = new MeshBasicMaterial({ 
                    color: colorMaterialsData[materialType].face,
                    transparent: false,
                    opacity: 1.0,
                    alphaTest: 0,
                    depthTest: true,
                    depthWrite: true,
                    side: FrontSide,
                  });
                  child.userData.materialType = materialType;
                } else {
                  child.material = new MeshBasicMaterial({ 
                    color: originalColor,
                    transparent: false,
                    opacity: 1.0,
                    alphaTest: 0,
                    depthTest: true,
                    depthWrite: true,
                    side: FrontSide,
                  });
                }
              }
            });

            const addColoredEdges = (model) => {
              model.traverse(child => {
                if (child.isMesh && child.userData.materialType) {
                  const materialType = child.userData.materialType;
                  const colorConfig = colorMaterialsData[materialType];
                  
                  if (colorConfig) {
                    const edges = new EdgesGeometry(child.geometry);
                    const edgeMaterial = new LineBasicMaterial({ 
                      color: colorConfig.edge,
                      linewidth: 1
                    });
                    
                    const edgeLine = new LineSegments(edges, edgeMaterial);
                    edgeLine.position.copy(child.position);
                    edgeLine.rotation.copy(child.rotation);
                    edgeLine.scale.copy(child.scale);
                    
                    child.userData.edgeLine = edgeLine;
                    edgeLine.userData.parentMesh = child;
                    edgeLine.userData.materialType = materialType;
                    
                    child.parent.add(edgeLine);
                  }
                }
              });  
            };
              
            model = gltf.scene;
            scene.add(model);
            
            if (withEdgesLines) {
              addEdgeLines(model);
            }
            
            initClippingPlanes();
            
            boundingBox.setFromObject(model);
            const center = boundingBox.getCenter(new Vector3());
            clippingState.x.position = center.x;
            clippingState.y.position = center.y;
            clippingState.z.position = center.z;
            
            addColoredEdges(gltf.scene);
            collectColorData();
            resetCamera();
            
            setIsLoading(false);
            onLoadingChange(false);
            onModelLoad({
              boundingBox: boundingBox,
              center: center,
              colorData: colorFilterData,
              loadTime: loadTime,
              dracoUsed: dracoUsed,
              downloadSize: downloadSize,
              vertices: totalVertices
            });
            
            triggerRender();
          },
          (progress) => {
            // Capture download size
            if (progress.total > 0) {
              downloadSize = progress.total;
            }
            
            const percentage = progress.total > 0 ? (progress.loaded / progress.total) * 100 : 0;
            setLoadingProgress(percentage);

          },
          (error) => {
            console.error('❌ Error loading model:', error);
            setIsLoading(false);
            onLoadingChange(false);
          }
        );
      };

      const handleResize = () => {
        if (!mountRef.current) return;
        
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        const newAspect = newWidth / newHeight;
        
        const responsiveZoom = calculateResponsiveZoom(zoomValue, newWidth);
        
        camera.left = -responsiveZoom * newAspect / 2;
        camera.right = responsiveZoom * newAspect / 2;
        camera.top = responsiveZoom / 2;
        camera.bottom = -responsiveZoom / 2;
        camera.updateProjectionMatrix();
        
        renderer.setSize(newWidth, newHeight);
        triggerRender();
      };

      window.addEventListener('resize', handleResize);

      viewerRef.current = {
        camera: camera,
        setColorVisibility: (colorLabel, visible) => {
          if (colorFilterData[colorLabel]) {
            colorFilterData[colorLabel].enabled = visible;
            
            colorFilterData[colorLabel].meshes.forEach(mesh => {
              mesh.visible = visible;
              
              if (mesh.userData.edgeLine) {
                mesh.userData.edgeLine.visible = visible;
              }
            }); 
            
            triggerRender();
            onColorDataChange(colorFilterData);
          }
        },
        
        setClipping: (axis, enabled, position) => {
          if (clippingState[axis]) {
            if (enabled) {
              Object.keys(clippingState).forEach(key => {
                if (key !== axis && key !== 'activeAxis') {
                  clippingState[key].enabled = false;
                }
              });
              
              clippingState[axis].enabled = true;
              clippingState.activeAxis = axis;
              
              if (position !== undefined) {
                clippingState[axis].position = position;
              }
            } else {
              clippingState[axis].enabled = false;
              if (clippingState.activeAxis === axis) {
                clippingState.activeAxis = null;
              }
            }
            
            updateClipping();
          }
        },
        
        getColorData: () => colorFilterData,
        resetCamera: resetCamera,
        loadModel: loadModel,
        
        cleanup: () => {
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
          
          window.removeEventListener('resize', handleResize);
          controls.dispose();
          dracoLoader.dispose();
          
          scene.traverse(child => {
            if (child.isMesh) {
              if (child.geometry) child.geometry.dispose();
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => mat.dispose());
                } else {
                  child.material.dispose();
                }
              }
            }
          });
          
          renderer.dispose();
          if (container && renderer.domElement && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };

      animate();

      if (currentModelPath) {
        loadModel(currentModelPath);
      }
    };

    initViewer();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.cleanup();
        viewerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (viewerRef.current && viewerRef.current.camera) {
      const camera = viewerRef.current.camera;
      const container = mountRef.current;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / height;
      
      const responsiveZoom = calculateResponsiveZoom(zoomValue, width);
      
      camera.left = -responsiveZoom * aspect / 2;
      camera.right = responsiveZoom * aspect / 2;
      camera.top = responsiveZoom / 2;
      camera.bottom = -responsiveZoom / 2;
      camera.updateProjectionMatrix();
    }
  }, [zoomValue]);

  return (
    <div className={styles.container} style={{ height, position: 'relative' }}>
      <div ref={mountRef} className={styles.canvasContainer} />
      
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading 3D Model...</p>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
});

GLBViewer.displayName = 'GLBViewer';

export default GLBViewer;
