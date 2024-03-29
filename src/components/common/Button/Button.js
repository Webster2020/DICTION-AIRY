import React from 'react';
import PropTypes from 'prop-types';

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

export {
  Component as Button,
  Component as ButtonComponent,
};
