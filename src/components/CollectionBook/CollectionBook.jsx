import React from 'react';
import styles from './CollectionBook.module.css';
import collectionsData from '../../data/collectionsData';

function CollectionBook({ collectionName }) {
  if (!collectionName) return null;
  const info = collectionsData[collectionName];

  if (!info) {
    return <div className={styles.container}><div className={styles.missing}>
      No book metadata found for “{collectionName}”.
    </div></div>;
  }

  return (
    <div className={styles.container} role="complementary" aria-label="Collection book information">
      <div className={styles.coverWrap}>
        <img className={styles.cover} src={info.cover} alt={info.title} />
      </div>
      <div className={styles.meta}>
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>{info.title}</h3>
          {info.subtitle && <div className={styles.subtitle}>{info.subtitle}</div>}
        </div>
        <dl className={styles.table}>
          {info.authors && (<><dt>Authors</dt><dd>{[].concat(info.authors).join(', ')}</dd></>)}
          {info.publisher && (<><dt>Publisher</dt><dd>{info.publisher}</dd></>)}
          {info.year && (<><dt>Year</dt><dd>{info.year}</dd></>)}
          {info.pages && (<><dt>Pages</dt><dd>{info.pages}</dd></>)}
          {info.isbn && (<><dt>ISBN</dt><dd>{info.isbn}</dd></>)}
          {info.link && (<><dt>Source</dt><dd><a href={info.link} target="_blank" rel="noreferrer">View book</a></dd></>)}
        </dl>
        {info.blurb && <p className={styles.blurb}>{info.blurb}</p>}
      </div>
    </div>
  );
}
export default CollectionBook;
