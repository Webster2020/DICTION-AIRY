import React from 'react';
import PropTypes from 'prop-types';
import styles from './WordsList.module.scss';

const Component = ({ children }) => {
  return (
    <article className={styles.wl}>
      <ul className={styles.wlList}>{children}</ul>
    </article>
  );
};

Component.defaultProps = {
  children: '',
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as WordsList,
  Component as WordsListComponent,
};
