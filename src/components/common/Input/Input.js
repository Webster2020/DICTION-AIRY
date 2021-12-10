import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Component = ({
  variant,
  className: propClassName,
  maxLength,
  type,
  name,
  value,
  handleChangeValue,
  children,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]);
  else classes.push(styles.mainInput);

  return (
    <input
      className={classes.join(' ')}
      type={type}
      name={name}
      value={value}
      onChange={handleChangeValue}
      maxLength={maxLength}
      {...props}
    >
      {children}
    </input>
  );
};

Component.defaultProps = {
  type: 'text',
  name: 'text',
};

Component.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChangeValue: PropTypes.func,
  children: PropTypes.node,
};

export {
  Component as Input,
  Component as InputComponent,
};
