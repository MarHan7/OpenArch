import React, { useRef, useState } from 'react';
import GLBViewer from "../../components/GLBViewer/GLBViewer";
import GLBViewerControls from "../../components/GLBViewer/GLBViewerControls";
import GLBViewerFooter from "../../components/GLBViewer/GLBViewerFooter";
import CollectionSelector from "../../components/ProjectList/CollectionSelector";
import style from "./Atlas.module.css";
import ProjectList from '../../components/ProjectList/ProjectList';
import projectData from "../../data/projectData";

function FullViewer({ view='viewer', rightSection=false }) {

  const allProjects = projectData.projectsData || projectData;
  const viewer1Ref = useRef();

  const [currentView, setCurrentView] = useState(view);
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);
  const [selectedModel, setSelectedModel] = useState(allProjects[0].models[0]);
  const [selectedCollection, setSelectedCollection] = useState(null); // null means "All Collections"
  const [viewer1Data, setViewer1Data] = useState({
    colorData: {},
    boundingBox: null
  });

  // Filter projects based on selected collection
  const filteredProjects = selectedCollection 
    ? allProjects.filter(project => project.collection === selectedCollection)
    : allProjects;

  const handleBackToProjects = () => {
    setCurrentView('projectList');
  };

  const handleSelectProject = (project) => {
    console.log('Selected project:', project);
    console.log('Current view before:', currentView);

    setSelectedProject(project);
    setSelectedModel(project.models[0]);
    setCurrentView('viewer');

    console.log('Current view after (will show old value):', currentView);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setViewer1Data({
      colorData: {},
      boundingBox: null
    });
  };

  const handleCollectionChange = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackToViewer = () => {
    setCurrentView('viewer');
  };

  return (
    <div className={style.container}>
      <div className={style.sectionHeader}>
        <div className={style.navigationBar}>
          <button 
            className={`${style.backButton} ${rightSection ? style.rightSectionBackButton : ''}`}
            onClick={handleBackToProjects}
          >
            <>
              <svg width="16" height="17" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="1.6" fill="black"/>
                <rect x="2" y="6" width="12" height="1.6" fill="black"/>
                <rect x="2" y="9" width="12" height="1.6" fill="black"/>
                <rect x="2" y="12" width="12" height="1.6" fill="black"/>
              </svg>
            </>
          </button>
          <button 
            className={`${style.backButton} ${style.viewerButton} ${rightSection ? style.rightSectionBackButton : ''}`}
            onClick={handleBackToViewer}
          >
            <div style={{
                  width: '9px',
                  height: '9px',
                  border: '2px solid black',
                  display: 'inline-block'
                }} />
          </button>
          <h2 className={style.projectTitle}>
            {currentView === 'viewer' ? (
              <>
                {selectedProject?.name || ''}
                {selectedProject?.constructor && ` - ${selectedProject.constructor}`}
                {selectedProject?.year && ` - ${selectedProject.year}`}
              </>
            ) : (
              'ATLAS'
            )}
          </h2>
        </div>
        <div>
          {currentView === 'viewer' && selectedProject ? (
            <GLBViewerControls
              viewerRef={viewer1Ref}
              colorData={viewer1Data.colorData}
              boundingBox={viewer1Data.boundingBox}
              onDataChange={setViewer1Data}
              selectedProject={selectedProject} 
              selectedModel={selectedModel}
              onModelChange={handleModelChange}
              isRightSection={rightSection}
            />
          ) : currentView === 'projectList' ? (
            <CollectionSelector
              projects={allProjects}
              selectedCollection={selectedCollection}
              onCollectionChange={handleCollectionChange}
              isRightSection={rightSection}
            />
          ) : null}
        </div>
      </div>
      <div className={style.sectionCore}>
        {currentView === 'projectList' ? (
          <ProjectList
            projects={filteredProjects}
            onProjectSelect={handleSelectProject}
            selectedProject={selectedProject}
            autoPaginateOnOverflow={rightSection}
          />
        ) : (
          <GLBViewer 
            ref={viewer1Ref}
            modelPath={selectedModel?.path}
            zoomValue = {selectedModel.zoomValue}
            onColorDataChange={(colorData) => 
              setViewer1Data(prev => ({ ...prev, colorData }))
            }
            onModelLoad={(data) => 
              setViewer1Data(prev => ({ 
                ...prev, 
                boundingBox: data.boundingBox,
                colorData: data.colorData 
              }))
            }
          />
        )}
      </div>
      {currentView === 'viewer' && (
        <div className={style.sectionFooter}>
          <GLBViewerFooter 
            materialsData={selectedProject?.materialsData} 
            footPrintData={selectedProject?.footPrintData} 
          />
        </div>
      )}
    </div>
  );
}

export default FullViewer;
