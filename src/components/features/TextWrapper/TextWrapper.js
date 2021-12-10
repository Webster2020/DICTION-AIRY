import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextWrapper.module.scss';

const Component = ({children}) => (
  <section className={styles.tw}>{children}</section>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as TextWrapper,
  Component as TextWrapperComponent,
};
