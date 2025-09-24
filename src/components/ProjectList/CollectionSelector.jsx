import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './CollectionSelector.module.css';

function CollectionSelector({ 
  projects, 
  selectedCollection, 
  onCollectionChange,
  isRightSection = false 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get unique collections from projects
  const collections = useMemo(() => {
    const uniqueCollections = [...new Set(projects.map(project => project.collection).filter(Boolean))];
    return ['All Collections', ...uniqueCollections.sort()];
  }, [projects]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCollectionSelect = (collection) => {
    const collectionValue = collection === 'All Collections' ? null : collection;
    onCollectionChange(collectionValue);
    setIsOpen(false);
  };

  const displayValue = selectedCollection || 'All Collections';

  return (
    <div 
      className={`${styles.collectionSelector} ${isRightSection ? styles.rightSection : ''}`}
      ref={dropdownRef}
    >
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`${styles.dropdownIcon} ${isOpen ? styles.open : ''}`}>
          ▼
        </span>
        <span className={styles.selectedCollection}>{displayValue}</span>
      </button>
      
      {isOpen && (
        <div className={`${styles.dropdownMenu} ${isRightSection ? styles.rightSectionMenu : ''}`}>
          {collections.map((collection) => (
            <button
              key={collection}
              className={`${styles.dropdownItem} ${
                displayValue === collection ? styles.selected : ''
              }`}
              onClick={() => handleCollectionSelect(collection)}
            >
              {collection}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CollectionSelector;
