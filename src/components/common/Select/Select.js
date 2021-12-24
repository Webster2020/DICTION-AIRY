import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

const Component = ({ type, options, handleChangeValue }) => {

  const handleSelect = (e) => {
    handleChangeValue(options[e.target.value]);
  };

  return (
    <select className={styles.select} onChange={(e) => handleSelect(e)}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

Component.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array.isRequired,
  handleChangeValue: PropTypes.func,
};

export {
  Component as Select,
  Component as SelectComponent,
};
