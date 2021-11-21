import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Button.module.scss';

const Component = ({
  children,
  variant,
  link,
  main,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]);
  else classes.push(styles.default);

  let Comp = 'a';

  if (link) {
    Comp = 'button';
  }

  if (main) {
    Comp = 'div';
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  link: PropTypes.bool,
  main: PropTypes.bool,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};
