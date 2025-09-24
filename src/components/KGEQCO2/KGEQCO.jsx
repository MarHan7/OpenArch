import React, { useState, useMemo } from 'react';
import styles from './KGEQCO.module.css';
import materialsData from "../../data/kgeqco2";
import colorMaterialsData from "../../data/colorData"; // Import your color data

function KgText({ onMaterialSelect, selectedMaterial }) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const getMaterialColor = (materialFamily) => {
 
    switch (materialFamily?.toUpperCase()) {
      case 'MINERAL':
        return 'mineral';
      case 'METAL':
        return 'metal';
      case 'BIOBASED':
        return 'biobased';
      case 'GEOBASED':
        return 'geobased';
      case 'GLASS':
        return 'glass';
      case 'PLASTIC':
        return 'plastic';
      default:
        return 'mineral'; // Default fallback
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedMaterials = useMemo(() => {
    return [...materialsData].sort((a, b) => {
      let aValue = '';
      let bValue = '';

      switch (sortField) {
        case 'materialFamily':
          aValue = a.materialFamily?.toLowerCase() || '';
          bValue = b.materialFamily?.toLowerCase() || '';
          break;
        case 'kbobNumber':
          aValue = a.kbobNumber?.toLowerCase() || '';
          bValue = b.kbobNumber?.toLowerCase() || '';
          break;
        case 'kbobName':
          aValue = a.kbobName?.toLowerCase() || '';
          bValue = b.kbobName?.toLowerCase() || '';
          break;
        case 'materialName':
          aValue = a.materialName?.toLowerCase() || '';
          bValue = b.materialName?.toLowerCase() || '';
          break;
        case 'kgPerM3':
          aValue = a.kgPerM3 || 0;
          bValue = b.kgPerM3 || 0;
          break;
        case 'kgEqCO2':
          aValue = a.kgEqCO2 || 0;
          bValue = b.kgEqCO2 || 0;
          break;
        default:
          return 0;
      }

      if (['kgPerM3', 'kgEqCO2'].includes(sortField)) {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      }
    });
  }, [materialsData, sortField, sortDirection]);

  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '▲' : '▼';
  };

  if (materialsData.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          No materialsData available.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p>Kg eq CO2</p>
            <a href="https://www.kbob.admin.ch/fr/donnees-ecobilans-dans-la-construction" target="_blank" rel="noopener noreferrer">KBOB 2018</a>
        </div>
      <div className={styles.headerRow}>
        <div className={styles.headerCell} onClick={() => handleSort('materialFamily')}>
          Material Family {getSortIcon('materialFamily')}
        </div>
        <div className={styles.headerCell} onClick={() => handleSort('kbobNumber')}>
          N° KBOB {getSortIcon('kbobNumber')}
        </div>
       
        <div className={styles.headerCell} onClick={() => handleSort('materialName')}>
          Material Name {getSortIcon('materialName')}
        </div>
        <div className={`${styles.headerCell} ${styles.rightAlign}`} onClick={() => handleSort('kgPerM3')}>
          kg/m² {getSortIcon('kgPerM3')}
        </div>
        <div className={`${styles.headerCell} ${styles.rightAlign}`} onClick={() => handleSort('kgEqCO2')}>
          kg.eq.CO2/m² {getSortIcon('kgEqCO2')}
        </div>
      </div>

      <div className={styles.materialList}>
        {sortedMaterials.map((material, index) => {
          const colorCategory = getMaterialColor(material.materialFamily);
          const backgroundColor = colorMaterialsData[colorCategory]?.face;
          
          return (
            <React.Fragment key={`${material.kbobNumber}-${index}`}>
                
              <div
                className={`${styles.materialItem} ${
                  selectedMaterial?.kbobNumber === material.kbobNumber && 
                  selectedMaterial?.materialName === material.materialName 
                    ? styles.selected : ''
                }`}
                onClick={() => onMaterialSelect && onMaterialSelect(material)}
              >
                <div 
                  className={`${styles.materialCell} ${styles.materialFamilyCell}`}
                >
                  <div 
                    className={styles.colorSquare}
                    style={{ backgroundColor }}
                  ></div>
                  <span className={styles.materialFamily}>{material.materialFamily}</span>
                </div>
                

                
                <div className={styles.materialCell}>
                  <span className={styles.kbobNumber}>{material.kbobNumber}</span>
                </div>
                
                <div className={styles.materialCell}>
                  <span className={styles.materialName}>{material.materialName}</span>
                </div>
                <div className={`${styles.materialCell} ${styles.rightAlign}`}>
                  <span className={styles.kgPerM3}>{material.kgPerM3?.toLocaleString() || '-'}</span>
                </div>
                <div className={`${styles.materialCell} ${styles.rightAlign}`}>
                  <span className={styles.kgEqCO2}>{material.kgEqCO2 || '-'}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default KgText;
