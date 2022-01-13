import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserData, getLoginStatus } from '../../../redux/userRedux.js';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Component = ({ user, userIsLogged }) => (
  <header className={styles.headerContainer}>
    <Link to={userIsLogged ? '/main' : '/'} style={{ textDecoration: 'none' }}>
      <h1 className={styles.headerText}>DICTIONAIRY</h1>
      <h3 className={styles.headerUser}>{user.login !== '' ? `USER: ${user.login}` : 'USER: none'}</h3>
    </Link>
  </header>
);

Component.propTypes = {
  user: PropTypes.object,
  userIsLogged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: getUserData(state) || {},
  userIsLogged: getLoginStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
