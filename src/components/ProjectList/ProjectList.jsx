import React, { useState, useMemo } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import styles from './ProjectList.module.css';

const sortOptions = [
  { value: '', label: 'Default order' },
  { value: 'name', label: 'Name' },
  { value: 'constructor', label: 'Architect' },
  { value: 'location', label: 'Location' },
  { value: 'year', label: 'Year' },
  { value: 'category', label: 'Category' },
  { value: 'm2', label: 'm²' },
  { value: 'kgPerM2', label: 'kg/m²' },
  { value: 'kgCO2PerM2', label: 'kg.eq.CO2/m²' }
];

function ProjectList({ projects, onProjectSelect, selectedProject }) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleSortFieldChange = (event) => {
    const { value } = event.target;
    setSortField(value);
    setSortDirection('asc');
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const toggleProjectDetails = (projectId) => {
    setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  const sortedProjects = useMemo(() => {
    if (!sortField) {
      return projects;
    }

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
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [projects, sortField, sortDirection]);

  const hasModels = (project) => project.models && project.models.length > 0;

  if (projects.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>No projects available.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <label className={styles.sortLabel}>
          Sort by
          <select
            className={styles.sortSelect}
            value={sortField}
            onChange={handleSortFieldChange}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className={styles.sortDirectionButton}
          onClick={toggleSortDirection}
          disabled={!sortField}
          aria-label={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
        >
          <span aria-hidden="true">{sortDirection === 'asc' ? '▲' : '▼'}</span>
        </button>
      </div>

      <div className={styles.projectList}>
        {sortedProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          const canSelect = hasModels(project);
          const projectDetailsId = `project-details-${project.id}`;

          return (
            <div
              key={project.id}
              className={[
                styles.projectItem,
                canSelect ? styles.clickable : styles.disabled,
                selectedProject?.id === project.id ? styles.selected : null,
                isExpanded ? styles.expanded : null
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => canSelect && onProjectSelect(project)}
            >
              <div className={styles.projectSummary}>
                <div className={styles.summaryText}>
                  <span className={styles.projectName}>{project.name}</span>
                  {project.year && (
                    <span className={styles.projectYear}>{project.year}</span>
                  )}
                </div>
                <div className={styles.summaryActions}>
                  {!canSelect && (
                    <span className={styles.unavailable}>No model</span>
                  )}
                  <button
                    type="button"
                    className={styles.expandButton}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleProjectDetails(project.id);
                    }}
                    aria-expanded={isExpanded}
                    aria-controls={projectDetailsId}
                  >
                    {isExpanded ? (
                      <HiChevronUp aria-hidden="true" />
                    ) : (
                      <HiChevronDown aria-hidden="true" />
                    )}
                    <span className={styles.srOnly}>
                      {isExpanded ? 'Hide details' : 'Show details'} for {project.name}
                    </span>
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className={styles.projectDetails} id={projectDetailsId}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Architect</span>
                    <span className={styles.detailValue}>{project.constructor || '-'}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>{project.location || '-'}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Category</span>
                    <span className={styles.detailValue}>{project.category || '-'}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>m²</span>
                    <span className={styles.detailValue}>
                      {project.footPrintMeaseure?.m2 ?? '-'}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>kg/m²</span>
                    <span className={styles.detailValue}>
                      {project.footPrintMeaseure?.kgPerM2 ?? '-'}
                    </span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>kg.eq.CO2/m²</span>
                    <span className={styles.detailValue}>
                      {project.footPrintMeaseure?.kgCO2PerM2 ?? '-'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
