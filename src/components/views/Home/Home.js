import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Home.module.scss';

import { Link } from 'react-router-dom';

import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { MainButtons } from '../../features/MainButtons/MainButtons';
import { Button } from '../../common/Button/Button';

const Component = () => (
  <MainWrapper>
    <MainButtons>
      <Button main='true' variant='home'>
        <Link to={'/main'} style={{ textDecoration: 'none' }}>
          <h2>TRY FREE</h2>
        </Link>
      </Button>
      <Button main='true'>
        <h2>LOGIN</h2>
      </Button>
    </MainButtons>
  </MainWrapper>
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
  Component as Home,
  // Container as Home,
  Component as HomeComponent,
};
