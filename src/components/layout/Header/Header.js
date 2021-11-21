import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Component = () => (
  <header className={styles.headerContainer}>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
      <h1 className={styles.headerText}>DICTIONAIRY</h1>
    </Link>
  </header>
);

// Component.propTypes = {

// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
