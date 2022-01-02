import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

const Component = ({ options, val, handleChangeValue }) => {
  useEffect(() => {
    console.log('USE EFFECT SELECT');
    console.log('options: ' + options);
    console.log('value: ' + val);
  });

  const handleSelect = (e) => {
    handleChangeValue(e.target.value);
  };

  return (
    <select className={styles.select} value={val} onChange={(e) => handleSelect(e)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Component.propTypes = {
  options: PropTypes.array,
  val: PropTypes.string,
  handleChangeValue: PropTypes.func,
};

export {
  Component as Select,
  Component as SelectComponent,
};
