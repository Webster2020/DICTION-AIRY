import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainWrapper.module.scss';

const Component = ({children}) => (
  <section className={styles.mw}>{children}</section>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainWrapper,
  Component as MainWrapperComponent,
};
