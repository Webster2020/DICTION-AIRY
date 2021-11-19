import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import TextareaAutosize from 'react-textarea-autosize';

import styles from './TextArea.module.scss';

const Component = () => (
  <div className={styles.textAreaContainer}>
    {/* <textarea className={"textArea"} maxLength="2000" rows="52" /> */}
    <TextareaAutosize className={styles.textArea} autoFocus />
  </div>
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
  Component as TextArea,
  // Container as TextArea,
  Component as TextAreaComponent,
};
