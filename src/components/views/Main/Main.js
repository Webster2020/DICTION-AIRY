import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Main.module.scss';

import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { TextArea } from '../../features/TextArea/TextArea';
import { TextWrapper } from '../../features/TextWrapper/TextWrapper';

const Component = () => (
  <MainWrapper>
    <TextWrapper>
      <TextArea></TextArea>
    </TextWrapper>
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
  Component as Main,
  // Container as Main,
  Component as MainComponent,
};
