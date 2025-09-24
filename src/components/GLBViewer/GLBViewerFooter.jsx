import React from 'react';
import styles from './GLBViewerFooter.module.css';
import staticColorData from '../../data/colorData'

const GLBViewerFooter = ({ materialsData = {}, footPrintData = {} }) => {
  // Fixed maximum value for ratio calculation
  const FIXED_VALUE_KGM2 = 1500;
  const FIXED_VALUE_CARBON = 1000;
  
  // Helper function to render a data section
  const renderDataSection = (data, sectionKey, maxValue) => {
    if (!data.materials || data.materials.length === 0) {
      return (
        <div className={styles.emptyState}>
          No {sectionKey} data to display
        </div>
      );
    }
    
    // Filter out "Total" row for color mapping, but keep it for display
    const dataRows = data.materials.filter(([label]) => label.toLowerCase() !== 'total');
    const totalRow = data.materials.find(([label]) => label.toLowerCase() === 'total');
    
    // Add color mapping to non-total rows
    const updatedDataRows = dataRows.map(row => {
      const materialName = row[0];
      const material = Object.values(staticColorData).find(mat => 
        mat.name === materialName || mat.name === materialName + 's'
      );
      return [...row, material ? material.face : null];
    });

    // Add total row with a default color (you can customize this)
    const allRowsToDisplay = [
      ...updatedDataRows,
      ...(totalRow ? [[...totalRow, 'black']] : []) // Gray color for total, you can change this
    ];

    return (
      <div className={styles.dataSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>{data.title}</h3>
          <span className={styles.sectionMeasure}>{data.meassure}</span>
        </div>
        
        <table className={styles.dataTable}>
          <tbody>
            {allRowsToDisplay.map(([label, value, color]) => {
              const numericValue = parseFloat(value) || 0;
              // Calculate width percentage based on the provided maximum value
              const widthPercentage = (numericValue / maxValue) * 100;
              const isTotal = label.toLowerCase() === 'total';
              
              return (
                <tr 
                  key={`${sectionKey}-${label}`} 
                  className={`${styles.dataRow} ${isTotal ? styles.totalRow : ''}`}
                >
                  <td className={styles.nameCell}>
                    <span className={styles.materialName}>{label}</span>
                  </td>
                  <td className={styles.barCell}>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.proportionBar}
                        style={{
                          width: numericValue === 0 ? '0%' : `${Math.max(Math.min(widthPercentage, 100), 1)}px`,
                          backgroundColor: color || 'black'
                        }}
                        data-material={label.toLowerCase()}
                      ></div>
                    </div>
                  </td>
                  <td className={styles.valueCell}>
                    <span className={styles.materialValue}>{value}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          {renderDataSection(materialsData, 'materials', FIXED_VALUE_KGM2)}
        </div>
        <div className={styles.rightColumn}>
          {renderDataSection(footPrintData, 'footprint', FIXED_VALUE_CARBON)}
        </div>
      </div>
    </div>
  );
};

export default GLBViewerFooter;
