import React, { useState, useMemo } from 'react';
import styles from './ProjectList.module.css';

function ProjectList({ projects, onProjectSelect, selectedProject }) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      // If clicking the same field, toggle direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If clicking a new field, set it and default to ascending
      setSortField(field);
      setSortDirection('asc');
    }
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
        // Numeric comparison
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        // String comparison
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      }
    });
  }, [projects, sortField, sortDirection]);

  const hasModels = (project) => {
    return project.models && project.models.length > 0;
  };
  
  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '▲' : '▼';
  };

  if (projects.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          No projects available.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.headerRow}>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('year')}
        >
          Year {getSortIcon('year')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('constructor')}
        >
          Architect {getSortIcon('constructor')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('name')}
        >
          Name {getSortIcon('name')}
        </div>
        <div
          className={styles.headerCell}
          onClick={() => handleSort('location')}
        >
          Location {getSortIcon('location')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.categoryColumn}`}
          onClick={() => handleSort('category')}
        >
          Category {getSortIcon('category')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell }`}
          onClick={() => handleSort('m2')}
        >
          m² {getSortIcon('m2')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell }`}
          onClick={() => handleSort('kgPerM2')}
        >
          kg/m² {getSortIcon('kgPerM2')}
        </div>
        <div
          className={`${styles.headerCell} ${styles.rightAlignedCell } ${styles.kgCO2Column}`}
          onClick={() => handleSort('kgCO2PerM2')}
        >
          kg.eq.CO2/m² {getSortIcon('kgCO2PerM2')}
        </div>
      </div>

      {/* Project List */}
      <div className={styles.projectList}>
        {sortedProjects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div
              className={[
                styles.projectItem,
                selectedProject?.id === project.id && styles.selected,
                hasModels(project) && styles.hasModels
              ].filter(Boolean).join(' ')}
              onClick={() => hasModels(project) && onProjectSelect(project)}
            >
              <div className={styles.projectCell}>
                <span className={styles.year}>{project.year}</span>
              </div>
              <div className={styles.projectCell}>
                <span className={styles.constructor}>{project.constructor}</span>
              </div>
              <div className={styles.projectCell}>
                <span className={styles.projectName}>{project.name}</span>
              </div>
              <div className={styles.projectCell}>
                <span className={styles.location}>{project.location}</span>
              </div>
              <div className={`${styles.projectCell} ${styles.categoryColumn}`}>
                <span className={styles.category}>{project.category}</span>
              </div>
              <div className={styles.projectCell}>
                <span className={styles.m2}>{project.footPrintMeaseure?.m2 || '-'}</span>
              </div>
              <div className={styles.projectCell}>
                <span className={styles.kgPerM2}>{project.footPrintMeaseure?.kgPerM2 || '-'}</span>
              </div>
              <div className={`${styles.projectCell} ${styles.kgCO2Column}`}>
                <span className={styles.kgCO2PerM2}>{project.footPrintMeaseure?.kgCO2PerM2 || '-'}</span>
              </div>
            </div>
            {index < sortedProjects.length - 1 && <hr className={styles.separator} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
