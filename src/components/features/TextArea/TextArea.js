import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './TextArea.module.scss';

const Component = ({text, handleChangeText}) => (
  <div className={styles.textAreaContainer}>
    <TextareaAutosize
      className={styles.textArea}
      autoFocus
      value={text}
      onChange={handleChangeText}
    />
  </div>
);

Component.propTypes = {
  text: PropTypes.string,
  handleChangeText: PropTypes.func,
};

export {
  Component as TextArea,
  Component as TextAreaComponent,
};
