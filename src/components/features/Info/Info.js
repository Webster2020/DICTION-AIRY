import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';

const Component = ({wordsAmount, filters}) => {

  useEffect(() => {
    console.log('INFO');
    console.log(wordsAmount);
    console.log(filters.level);
  });

  const cont = [
    ['WORDS: ', wordsAmount],
    ['LANGUAGE: ', filters.language],
    ['LEVEL: ', filters.level],
    ['TYPE: ', filters.type],
    ['LIKE: ', filters.like],
    ['TAG: ', filters.tag],
  ];

  return (
    <div className={styles.i}>
      <div className={styles.iRow}>
        <h2>FILTERS</h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[0][0]}<span>{cont[0][1]}</span></h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[1][0].substring(0, 4)}: <span>{cont[1][1].toUpperCase()}</span></h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[2][0]}<span>{cont[2][1]}</span></h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[3][0]}<span>{cont[3][1]}</span></h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[4][0]}<span>{cont[4][1]}</span></h2>
      </div>
      <div className={styles.iRow}>
        <h2>{cont[5][0]}<span>{cont[5][1]}</span></h2>
      </div>
    </div>
  );
};

Component.propTypes = {
  wordsAmount: PropTypes.number,
  filters: PropTypes.object,
};

export { Component as Info, Component as InfoComponent };
