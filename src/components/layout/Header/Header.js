import React from 'react';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Component = () => (
  <header className={styles.headerContainer}>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
      <h1 className={styles.headerText}>DICTIONAIRY</h1>
    </Link>
  </header>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
