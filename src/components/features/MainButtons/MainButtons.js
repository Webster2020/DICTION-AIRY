import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainButtons.module.scss';

const Component = ({children}) => (
  <article className={styles.mb}>{children}</article>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainButtons,
  Component as MainButtonsComponent,
};
