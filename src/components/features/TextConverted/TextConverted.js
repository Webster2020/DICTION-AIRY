import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TextConverted.module.scss';

import { Button } from '../../common/Button/Button';
import { TranslatePanel } from '../TranslatePanel/TranslatePanel';

const Component = ({words}) => {

  const [clickedWord, setClickedWord] = useState('');

  const clickWorld = (e, word) => {
    e.preventDefault();
    setClickedWord(word);
  };

  const closePanel = () => {
    setClickedWord('');
  };

  return (
    <div className={styles.textConverted}>
      {words.map((word, index) => (
        <div key={index} className={styles.textConvertedWord}>
          <Button
            variant='word'
            onClick={
              word !== ',' || word !== '.' ? (e) => clickWorld(e, word) : null
            }
          >
            {word.toUpperCase()}
          </Button>
        </div>
      ))}
      {clickedWord !== '' && (
        <TranslatePanel word={clickedWord} closePanel={closePanel} />
      )}
    </div>
  );
};

Component.propTypes = {
  words: PropTypes.array,
};

export {
  Component as TextConverted,
  Component as TextConvertedComponent,
};
