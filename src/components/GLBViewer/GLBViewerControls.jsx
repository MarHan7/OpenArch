import React, { useState, useEffect } from 'react';
import styles from './GLBViewerControls.module.css';
import * as THREE from 'three';
import staticColorData from '../../data/colorData';

const GLBViewerControls = ({ 
  viewerRef, 
  isRightSection,
  colorData = {},
  boundingBox = null,
  selectedProject = null, 
  selectedModel = null, 
  onModelChange = () => {}
}) => {
  const [selectedAxis, setSelectedAxis] = useState(null);
  const [clipping, setClipping] = useState({
    x: { min: -10, max: 10, position: 0 },
    y: { min: -10, max: 10, position: 0 },
    z: { min: -10, max: 10, position: 0 }
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Update clipping bounds when model loads
  useEffect(() => {
    if (boundingBox) {
      const center = boundingBox.getCenter(new THREE.Vector3());
      const size = boundingBox.getSize(new THREE.Vector3());
      
      setClipping(prev => ({
        x: {
          position: center.x,
          min: boundingBox.min.x - size.x * 0.1,
          max: boundingBox.max.x + size.x * 0.1
        },
        y: {
          position: center.y,
          min: boundingBox.min.y - size.y * 0.1,
          max: boundingBox.max.y + size.y * 0.1
        },
        z: {
          position: center.z,
          min: boundingBox.min.z - size.z * 0.1,
          max: boundingBox.max.z + size.z * 0.1
        }
      }));
    }
  }, [boundingBox]);

  // Apply clipping when axis or position changes
  useEffect(() => {
    if (viewerRef?.current) {
      if (selectedAxis) {
        viewerRef.current.setClipping(
          selectedAxis, 
          true, 
          clipping[selectedAxis].position
        );
      }
    }
  }, [selectedAxis, clipping, viewerRef]);

  const handleColorToggle = (hexColor, enabled) => {
    if (hexColor && colorData[hexColor] && viewerRef.current) {
      viewerRef.current.setColorVisibility(hexColor, enabled);
    }
  };

  const handleAxisSelect = (axis) => {
    if (selectedAxis === axis) {
      setSelectedAxis(null);
    } else {
      setSelectedAxis(axis);
    }
  };

  const handleSliderChange = (value) => {
    if (!selectedAxis) return;
    
    const newPosition = parseFloat(value);
    setClipping(prev => ({
      ...prev,
      [selectedAxis]: { ...prev[selectedAxis], position: newPosition }
    }));
  };

  const currentSlider = selectedAxis ? clipping[selectedAxis] : null;

const handleModelSelect = (model) => {
    onModelChange(model);
    setDropdownOpen(false);
  };

  const handleResetClipping = () => {
    ['x', 'y', 'z'].forEach(axis => {
      viewerRef.current?.setClipping(axis, false);
    });
    setSelectedAxis(null);
  }

  const isMaterialInModel = (materialConfig) => {
    // Check if any hex color in colorData matches this material's face color
    return Object.keys(colorData).some(hexColor => 
      hexColor.toLowerCase() === materialConfig.face.toLowerCase()
    );
  };

  // Get the hex color for a material (to access colorData)
  const getHexForMaterial = (materialConfig) => {
    return Object.keys(colorData).find(hexColor => 
      hexColor.toLowerCase() === materialConfig.face.toLowerCase()
    );
  };

  return (
    <div className={`${styles.controlsWrapper} ${isRightSection ? styles.rightSectionControls : ''}`}>
      {/* Model Selector - Positioned absolutely */}
      {selectedProject && (
        <div className={styles.modelSelectorContainer}>
          <div className={styles.modelDropdownContainer}>
            <button 
              className={styles.modelTrigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={`${styles.dropdownArrow} ${dropdownOpen ? styles.open : ''}`}>
                ▼
              </span>
              <span className={styles.modelLabel}>
                {selectedModel?.name || 'Select Model'}
              </span>
            </button>
            
            {dropdownOpen && (
              <div className={styles.modelDropdownList}>
                {selectedProject.models.map(model => (
                  <button
                    key={model.id}
                    className={`${styles.modelOption} ${
                      selectedModel?.id === model.id ? styles.selected : ''
                    }`}
                    onClick={() => handleModelSelect(model)}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Original Controls */}
      <div className={styles.controls}>
        {/* Color Controls */}
        <div className={`${styles.section} ${styles.colorSection}`}>
          <div className={styles.colorGrid}>
            {/* 🆕 Map over staticColorData instead of dynamic colorData */}
            {Object.entries(staticColorData).map(([materialKey, materialConfig]) => {
              const isInModel = isMaterialInModel(materialConfig);
              const hexColor = getHexForMaterial(materialConfig);
              const isEnabled = isInModel ? (colorData[hexColor]?.enabled || false) : false;

              return (
                <div key={materialKey} className={styles.colorControl}>
                  <label className={styles.colorLabel}>
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={(e) => handleColorToggle(hexColor, e.target.checked)}
                      style={{ '--checkbox-color': materialConfig.face }}
                      className={`${styles.colorCheckbox} ${!isInModel ? styles.disabled : ''}`}
                      disabled={!isInModel}
                    />
                    <span className={`${styles.colorName} ${styles.colorText} ${!isInModel ? styles.disabled : ''}`}>
                      {materialConfig.name}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clipping Controls */}
        <div className={`${styles.section} ${styles.clippingSection}`}>
          <div className={styles.clippingControls}>
            <div className={styles.clippingRow}>
              {selectedAxis && currentSlider && (
                <div className={styles.sliderContainer}>
                  <input
                    type="range"
                    min={currentSlider.min}
                    max={currentSlider.max}
                    step={0.01}
                    value={currentSlider.position}
                    onChange={(e) => handleSliderChange(e.target.value)}
                    className={styles.slider}
                  />
                </div>
              )}
              <div className={styles.axisButtons}>
                <button
                  onClick={handleResetClipping}
                  className={styles.resetButton}
                  title="Reset all clipping"
                >
                  {/* Rotating Arrow Icon */}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                  </svg>
                </button>
                {['x', 'y', 'z'].map(axis => (
                  <label key={axis} className={styles.axisLabel}>
                    <input
                      type="radio"
                      name="clippingAxis"
                      value={axis}
                      checked={selectedAxis === axis}
                      onChange={() => handleAxisSelect(axis)}
                      className={styles.axisRadio}
                    />
                    <span className={styles.axisText}>{axis.toUpperCase()}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GLBViewerControls;