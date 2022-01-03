import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { 
  getUserData, 
  // caUser, 
  caLoginDB, 
  getLoginStatus,
} from '../../../redux/userRedux.js';

import styles from './LoginForm.module.scss';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

const Component = ({ 
  user, 
  login, 
  // userDispatch,
  userLoginDispatch,
}) => {

  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  useEffect(() => {
    console.log('USE EFFECT');
    console.log(values);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('>>> FROM  S T O R E  <<<');
    console.log(user);
    console.log('login: ' + login);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
  });

  const handleChangeValue = (e, input) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LOGIN: ' + values.login);
    console.log('PASSWORD: ' + values.password);
    userLoginDispatch(values);
    // userDispatch(values);
    // setValues({
    //   login: '',
    //   password: '',
    // });
    // setLogin(true); //if login in backend is true (TODO!!)
  };

  return (
    <section className={styles.lf}>
      {!login && (
        <div className={styles.lfRow}>
          <Input
            placeholder='LOGIN'
            type='text'
            name='login'
            value={values.login}
            handleChangeValue={(e) => handleChangeValue(e, 'login')}
          />
          <Input
            placeholder='PASSWORD'
            type='password'
            name='password'
            value={values.password}
            handleChangeValue={(e) => handleChangeValue(e, 'password')}
          />
        </div>
      )}
      {!login && (
        <div className={styles.lfRow}>
          <Button main='true' variant='home' onClick={(e) => handleSubmit(e)}>
            <h2>CHECK</h2>
          </Button>
        </div>
      )}
      {login && (
        <div className={styles.lfRow}>
          <Button main='true' variant='home'>
            <Link to={'/main'} style={{ textDecoration: 'none' }}>
              <h2>Hello {user.login}!</h2>
              <br />
              <br />
              <h2>LET`S GO!</h2>
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

Component.propTypes = {
  user: PropTypes.object,
  login: PropTypes.bool,
  wordAddDispatch: PropTypes.func,
  // userDispatch: PropTypes.func,
  userLoginDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: getUserData(state),
  login: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  userLoginDispatch: (data) => dispatch(caLoginDB(data)),
  // userDispatch: (data) => dispatch(caUser(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginForm,
  Component as LoginFormComponent,
};
