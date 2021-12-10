import React from 'react';
import PropTypes from 'prop-types';

import styles from './TranslatePanel.module.scss';

import { Button } from '../../common/Button/Button';
import { TranslateForm } from '../TranslateForm/TranslateForm';

const Component = ({word, closePanel}) => {
  const clickClose = (e) => {
    e.preventDefault();
    console.log('close');
    closePanel();
  };

  return (
    <div className={styles.tp}>
      <Button variant='x' onClick={(e) => clickClose(e)}>
        x
      </Button>
      <h2 className={styles.tpWord}>{word.toUpperCase()}</h2>
      <TranslateForm />
    </div>
  );
};

Component.propTypes = {
  word: PropTypes.string,
  closePanel: PropTypes.func,
};

export {
  Component as TranslatePanel,
  Component as TranslatePanelComponent,
};
