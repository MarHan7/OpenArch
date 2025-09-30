import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import GLBViewer from "../../components/GLBViewer/GLBViewer";
import GLBViewerControls from "../../components/GLBViewer/GLBViewerControls";
import GLBViewerFooter from "../../components/GLBViewer/GLBViewerFooter";
import CollectionSelector from "../../components/ProjectList/CollectionSelector";
import CollectionBook from "../../components/CollectionBook/CollectionBook";import style from "./Atlas.module.css";
import ProjectList from '../../components/ProjectList/ProjectList';
import projectData from "../../data/projectData";

function FullViewer({ view='viewer', rightSection=false, rightSectionRef }) {

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
  const [isMobile, setIsMobile] = useState(false);
  const sectionCoreRef = useRef(null);
  const contentRef = useRef(null);
  const projectTitleContainerRef = useRef(null);
  const projectTitleRef = useRef(null);
  const [shouldPaginate, setShouldPaginate] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTitleOverflowing, setIsTitleOverflowing] = useState(false);
  const [titleScrollDistance, setTitleScrollDistance] = useState(0);
  const [titleAnimationDuration, setTitleAnimationDuration] = useState(12);

  // Filter projects based on selected collection
  const filteredProjects = selectedCollection
    ? allProjects.filter(project => project.collection === selectedCollection)
    : allProjects;

  const handleBackToProjects = () => {
    setCurrentView('projectList');
    setCurrentPage(0);
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
    setCurrentPage(0);
  };

  const handleBackToViewer = () => {
    setCurrentView('viewer');
    setCurrentPage(0);
  };

  const viewerTitleParts = [
    selectedProject?.name,
    selectedProject?.constructor,
    selectedProject?.year
  ].filter(Boolean);

  const titleText = currentView === 'viewer'
    ? (viewerTitleParts.length > 0 ? viewerTitleParts.join(' - ') : '')
    : 'ATLAS';

  const checkTitleOverflow = useCallback((mobileOverride) => {
    const measure = () => {
      const containerEl = projectTitleContainerRef.current;
      const textEl = projectTitleRef.current;

      if (!containerEl || !textEl) {
        setIsTitleOverflowing(false);
        setTitleScrollDistance(0);
        return;
      }

      const isMobileViewport = mobileOverride ?? (typeof window !== 'undefined'
        ? window.innerWidth <= 992
        : isMobile);

      if (!isMobileViewport) {
        setIsTitleOverflowing(false);
        setTitleScrollDistance(0);
        return;
      }

      const containerWidth = containerEl.clientWidth;
      const textWidth = textEl.scrollWidth;

      if (textWidth > containerWidth + 1) {
        const distance = textWidth - containerWidth;
        const marqueeGap = 24;
        const travelDistance = distance + marqueeGap;

        setIsTitleOverflowing(true);
        setTitleScrollDistance(travelDistance);

        const baseSpeed = 40;
        const totalTravel = textWidth + marqueeGap;
        const duration = Math.max(totalTravel / baseSpeed, 8);
        setTitleAnimationDuration(duration);
      } else {
        setIsTitleOverflowing(false);
        setTitleScrollDistance(0);
      }
    };

    if (typeof window !== 'undefined' && window.requestAnimationFrame) {
      window.requestAnimationFrame(measure);
    } else {
      measure();
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 992;
      setIsMobile(isNowMobile);
      checkTitleOverflow(isNowMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [checkTitleOverflow]);

  useLayoutEffect(() => {
    checkTitleOverflow();
  }, [checkTitleOverflow, titleText, currentView, isMobile]);

  useEffect(() => {
    const ref = rightSectionRef?.current;
    return () => {
      if (ref) {
        ref.style.overflowY = '';
      }
    };
  }, [rightSectionRef]);

  const updatePagination = useCallback(() => {
    if (!rightSection) {
      return;
    }

    if (!isMobile || currentView !== 'projectList') {
      setShouldPaginate(false);
      setCurrentPage(0);
      setTotalPages(1);
      if (rightSectionRef?.current) {
        rightSectionRef.current.style.overflowY = isMobile ? 'auto' : '';
      }
      return;
    }

    const coreEl = sectionCoreRef.current;
    const contentEl = contentRef.current;

    if (!coreEl || !contentEl) {
      return;
    }

    const visibleHeight = coreEl.clientHeight;
    const totalHeight = contentEl.scrollHeight;

    if (totalHeight > visibleHeight + 1) {
      const pages = Math.ceil(totalHeight / visibleHeight);
      setShouldPaginate(true);
      setPageHeight(visibleHeight);
      setTotalPages(pages);
      setCurrentPage(prev => Math.min(prev, pages - 1));
      if (rightSectionRef?.current) {
        rightSectionRef.current.style.overflowY = 'hidden';
      }
    } else {
      setShouldPaginate(false);
      setCurrentPage(0);
      setTotalPages(1);
      if (rightSectionRef?.current) {
        rightSectionRef.current.style.overflowY = 'auto';
      }
    }
  }, [currentView, isMobile, rightSection, rightSectionRef]);

  useLayoutEffect(() => {
    updatePagination();
  }, [updatePagination, filteredProjects.length, currentView]);

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
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
          <h2
            className={style.projectTitle}
            ref={projectTitleContainerRef}
          >
            <span
              key={titleText}
              ref={projectTitleRef}
              className={`${style.projectTitleText} ${isMobile && isTitleOverflowing ? style.projectTitleMarquee : ''}`}
              style={isMobile && isTitleOverflowing ? {
                '--marquee-distance': `${Math.max(titleScrollDistance, 0)}px`,
                '--marquee-duration': `${titleAnimationDuration}s`
              } : undefined}
            >
              {titleText}
            </span>
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
      <div
        ref={sectionCoreRef}
        className={`${style.sectionCore} ${(currentView === 'projectList' && !shouldPaginate) ? style.listModeCore : ''} ${shouldPaginate ? style.paginatedCore : ''}`}
      >
        <div
          ref={contentRef}
          className={`${style.coreContent} ${shouldPaginate ? style.paginatedContent : ''}`}
          style={shouldPaginate ? { transform: `translateY(-${currentPage * pageHeight}px)` } : undefined}
        >
        {currentView === 'projectList' ? (
          <>
            {selectedCollection && (
              <CollectionBook collectionName={selectedCollection} />
            )}
            <ProjectList 
              projects={filteredProjects}
              onProjectSelect={handleSelectProject}
              selectedProject={selectedProject}
            />
          </>

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
      </div>
      {shouldPaginate && currentView === 'projectList' && (
        <div className={style.paginationControls}>
          <button
            className={style.paginationButton}
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            ←
          </button>
          <div className={style.paginationIndicator}>
            {currentPage + 1} / {totalPages}
          </div>
          <button
            className={style.paginationButton}
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
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
