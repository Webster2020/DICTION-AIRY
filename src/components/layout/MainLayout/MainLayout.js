import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <main className={styles.mainLayoutContainer}>{children}</main>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
