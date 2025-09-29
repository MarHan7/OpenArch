import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect
} from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import styles from './ProjectList.module.css';

const MOBILE_VIEWPORT_QUERY = '(max-width: 992px)';

function ProjectList({
  projects,
  onProjectSelect,
  selectedProject,
  autoPaginateOnOverflow = false
}) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const firstItemRef = useRef(null);
  const separatorRef = useRef(null);
  const paginationRef = useRef(null);

  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }
    return window.matchMedia(MOBILE_VIEWPORT_QUERY).matches;
  });

  const [pagination, setPagination] = useState({
    active: false,
    itemsPerPage: projects.length,
    availableHeight: null
  });
  const [currentPage, setCurrentPage] = useState(0);

  const shouldAutoPaginate = autoPaginateOnOverflow && isMobileViewport;

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(0);
  };

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      let aValue = '';
      let bValue = '';

      switch (sortField) {
        case 'name':
          aValue = a.name?.toLowerCase() || '';
          bValue = b.name?.toLowerCase() || '';
          break;
        case 'constructor':
          aValue = a.constructor?.toLowerCase() || '';
          bValue = b.constructor?.toLowerCase() || '';
          break;
        case 'location':
          aValue = a.location?.toLowerCase() || '';
          bValue = b.location?.toLowerCase() || '';
          break;
        case 'year':
          aValue = a.year || 0;
          bValue = b.year || 0;
          break;
        case 'category':
          aValue = a.category?.toLowerCase() || '';
          bValue = b.category?.toLowerCase() || '';
          break;
        case 'm2':
          aValue = a.footPrintMeaseure?.m2 || 0;
          bValue = b.footPrintMeaseure?.m2 || 0;
          break;
        case 'kgPerM2':
          aValue = a.footPrintMeaseure?.kgPerM2 || 0;
          bValue = b.footPrintMeaseure?.kgPerM2 || 0;
          break;
        case 'kgCO2PerM2':
          aValue = a.footPrintMeaseure?.kgCO2PerM2 || 0;
          bValue = b.footPrintMeaseure?.kgCO2PerM2 || 0;
          break;
        default:
          return 0;
      }

      if (['year', 'm2', 'kgPerM2', 'kgCO2PerM2'].includes(sortField)) {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      }
    });
  }, [projects, sortField, sortDirection]);

  const hasModels = (project) => project.models && project.models.length > 0;

  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '▲' : '▼';
  };

  const updatePagination = useCallback(() => {
    if (!containerRef.current || !listRef.current) {
      return;
    }

    if (!shouldAutoPaginate) {
      setPagination((prev) => {
        if (
          !prev.active &&
          prev.itemsPerPage === sortedProjects.length &&
          prev.availableHeight === null
        ) {
          return prev;
        }
        return {
          active: false,
          itemsPerPage: sortedProjects.length,
          availableHeight: null
        };
      });
      return;
    }

    const containerHeight = containerRef.current.clientHeight;
    if (containerHeight <= 0) {
      return;
    }

    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const paginationHeight = paginationRef.current ? paginationRef.current.offsetHeight : 0;
    const availableHeight = Math.max(containerHeight - headerHeight - paginationHeight, 0);

    if (availableHeight <= 0) {
      return;
    }

    const sampleItem = firstItemRef.current || listRef.current.querySelector('[data-project-list-item]');
    if (!sampleItem) {
      return;
    }

    const itemStyles = window.getComputedStyle(sampleItem);
    const marginTop = parseFloat(itemStyles.marginTop || '0');
    const marginBottom = parseFloat(itemStyles.marginBottom || '0');
    const itemHeight = sampleItem.offsetHeight + marginTop + marginBottom;

    const sampleSeparator = separatorRef.current || listRef.current.querySelector('[data-project-list-separator]');
    const separatorHeight = sampleSeparator ? sampleSeparator.offsetHeight : 0;
    const rowHeight = itemHeight + separatorHeight;

    if (rowHeight <= 0) {
      return;
    }

    const maxItemsPerPage = Math.max(1, Math.floor(availableHeight / rowHeight));
    const shouldActivate = sortedProjects.length > maxItemsPerPage;

    const nextState = shouldActivate
      ? {
          active: true,
          itemsPerPage: maxItemsPerPage,
          availableHeight
        }
      : {
          active: false,
          itemsPerPage: sortedProjects.length,
          availableHeight: null
        };

    setPagination((prev) => {
      if (
        prev.active === nextState.active &&
        prev.itemsPerPage === nextState.itemsPerPage &&
        prev.availableHeight === nextState.availableHeight
      ) {
        return prev;
      }
      return nextState;
    });
  }, [shouldAutoPaginate, sortedProjects]);

  useEffect(() => {
    if (!autoPaginateOnOverflow) {
      setIsMobileViewport(false);
      return;
    }

    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setIsMobileViewport(false);
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_VIEWPORT_QUERY);
    const handleMediaChange = (event) => {
      setIsMobileViewport(event.matches);
    };

    setIsMobileViewport(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [autoPaginateOnOverflow]);

  useLayoutEffect(() => {
    updatePagination();
  }, [updatePagination]);

  useEffect(() => {
    if (!shouldAutoPaginate) {
      return;
    }

    const handleResize = () => updatePagination();
    window.addEventListener('resize', handleResize);

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(updatePagination);
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      if (listRef.current) {
        resizeObserver.observe(listRef.current);
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [shouldAutoPaginate, updatePagination]);

  useEffect(() => {
    if (!shouldAutoPaginate || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const node = paginationRef.current;
    if (!node) {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updatePagination);
    });
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [shouldAutoPaginate, updatePagination, pagination.active]);

  useEffect(() => {
    if (shouldAutoPaginate) {
      requestAnimationFrame(updatePagination);
    }
  }, [shouldAutoPaginate, pagination.active, updatePagination]);

  useEffect(() => {
    if (!pagination.active) {
      setCurrentPage(0);
      return;
    }

    const itemsPerPage = Math.max(pagination.itemsPerPage, 1);
    const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
    setCurrentPage((prev) => Math.min(prev, Math.max(totalPages - 1, 0)));
  }, [pagination.active, pagination.itemsPerPage, sortedProjects.length]);

  useEffect(() => {
    if (!pagination.active || !selectedProject) {
      return;
    }

    const itemsPerPage = Math.max(pagination.itemsPerPage, 1);
    const selectedIndex = sortedProjects.findIndex((project) => project.id === selectedProject.id);
    if (selectedIndex === -1) {
      return;
    }

    const targetPage = Math.floor(selectedIndex / itemsPerPage);
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage);
    }
  }, [selectedProject, pagination.active, pagination.itemsPerPage, sortedProjects, currentPage]);

  const handleSetFirstItemRef = useCallback(
    (node) => {
      if (node) {
        firstItemRef.current = node;
        if (shouldAutoPaginate) {
          requestAnimationFrame(updatePagination);
        }
      }
    },
    [shouldAutoPaginate, updatePagination]
  );

  const handleSetSeparatorRef = useCallback(
    (node) => {
      if (node) {
        separatorRef.current = node;
        if (shouldAutoPaginate) {
          requestAnimationFrame(updatePagination);
        }
      }
    },
    [shouldAutoPaginate, updatePagination]
  );

  const effectiveItemsPerPage = Math.max(pagination.itemsPerPage, 1);
  const pageCount = pagination.active ? Math.ceil(sortedProjects.length / effectiveItemsPerPage) : 1;
  const showPagination = pagination.active && pageCount > 1;

  if (projects.length === 0) {
    return (
      <div className={styles.container} ref={containerRef}>
        <div className={styles.emptyState}>
          No projects available.
        </div>
      </div>
    );
  }

  const startIndex = pagination.active ? currentPage * effectiveItemsPerPage : 0;
  const endIndex = pagination.active
    ? Math.min(sortedProjects.length, startIndex + effectiveItemsPerPage)
    : sortedProjects.length;
  const visibleProjects = sortedProjects.slice(startIndex, endIndex);

  const handlePageSelect = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {showPagination && (
        <div className={styles.paginationTabs} ref={paginationRef}>
          <div className={styles.pageTabs}>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={`page-${index}`}
                type="button"
                className={`${styles.pageTab} ${currentPage === index ? styles.pageTabActive : ''}`}
                onClick={() => handlePageSelect(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className={styles.paginationArrows}>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              <HiChevronLeft />
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={handleNextPage}
              disabled={currentPage >= pageCount - 1}
              aria-label="Next page"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      )}

      <div className={styles.headerRow} ref={headerRef}>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('year')}
        >
          Year {getSortIcon('year')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('name')}
        >
          Name {getSortIcon('name')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('constructor')}
        >
          Architect {getSortIcon('constructor')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('location')}
        >
          Location {getSortIcon('location')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('category')}
        >
          Category {getSortIcon('category')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell}`}
          onClick={() => handleSort('m2')}
        >
          m² {getSortIcon('m2')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell}`}
          onClick={() => handleSort('kgPerM2')}
        >
          kg/m² {getSortIcon('kgPerM2')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell}`}
          onClick={() => handleSort('kgCO2PerM2')}
        >
          kg.eq.CO2/m² {getSortIcon('kgCO2PerM2')}
        </div>
      </div>

      <div
        className={`${styles.projectList} ${showPagination ? styles.paginationMode : ''}`}
        ref={listRef}
      >
        {visibleProjects.map((project, index) => {
          const isSelected = selectedProject?.id === project.id;

          return (
            <React.Fragment key={project.id}>
              <div
                ref={index === 0 ? handleSetFirstItemRef : null}
                data-project-list-item
                className={[
                  styles.projectItem,
                  isSelected && styles.selected,
                  hasModels(project) && styles.hasModels
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => hasModels(project) && onProjectSelect(project)}
              >
                <div className={styles.projectCell}>
                  <span className={styles.year}>{project.year}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.projectName}>{project.name}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.constructor}>{project.constructor}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.location}>{project.location}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.m2}>{project.footPrintMeaseure?.m2 || '-'}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.kgPerM2}>{project.footPrintMeaseure?.kgPerM2 || '-'}</span>
                </div>
                <div className={styles.projectCell}>
                  <span className={styles.kgCO2PerM2}>{project.footPrintMeaseure?.kgCO2PerM2 || '-'}</span>
                </div>
              </div>
              {index < visibleProjects.length - 1 && (
                <hr
                  ref={index === 0 ? handleSetSeparatorRef : null}
                  data-project-list-separator
                  className={styles.separator}
                />
              )}
            </React.Fragment>
          );
        })}

        {visibleProjects.length === 0 && (
          <div className={styles.emptyState}>
            No projects available.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
