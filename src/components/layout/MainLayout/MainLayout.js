import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

const Component = ({children}) => {
  return (
    <main className={styles.mainLayoutContainer}>
      {children}
    </main>
  );
};

Component.defaultProps = {
  children: '',
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
