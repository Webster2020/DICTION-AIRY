import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Title.module.scss';

const Component = ({title}) => (
  <div className={styles.root}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);

Component.propTypes = {
  title: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Title,
  // Container as Title,
  Component as TitleComponent,
};
