import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainButtons.module.scss';

const Component = ({children}) => (
  <section className={styles.mb}>{children}</section>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainButtons,
  Component as MainButtonsComponent,
};
