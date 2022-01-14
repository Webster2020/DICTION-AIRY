import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { caWordLike, caWordUnlike, caWordLevel, caEditWordToDB } from '../../../redux/wordsRedux.js';

import styles from './Word.module.scss';

import { Button } from '../../common/Button/Button';
import { BiLike, BiDislike, BiInfoCircle } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Component = ({ 
  word, 
  wordLikeDispatch, 
  wordUnlikeDispatch, 
  wordLevelDispatch, 
  wordEditDispatch,
}) => {

  const buttonsData = [
    {
      icon: <BiDislike />,
      level: 0,
      style: styles.wDictionary0,
      styleLevel: styles.level0,
    },
    {
      icon: <BiInfoCircle />,
      level: 1,
      style: styles.wDictionary1,
      styleLevel: styles.level1,
    },
    {
      icon: <BiLike />,
      level: 2,
      style: styles.wDictionary2,
      styleLevel: styles.level2,
    },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <li className={styles.w}>
      <Button
        variant={'dictionary'}
        className={`${styles.wDictionary} ${buttonsData[word.level].style}`}
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
      >
        <h2>{word.word}</h2>
      </Button>
      {word.like && (
        <div className={styles.wHeart}>
          <h2>
            <BsHeartFill />
          </h2>
        </div>
      )}
      {visible && (
        <div className={styles.wData}>
          <h2 className={styles.wDataTrans}>{word.translation}</h2>
          <h3 className={styles.wDataRest}>{word.sentence}</h3>
          <div className={styles.wDataLevels}>
            {buttonsData.map((btn) => (
              <div className={styles.wDataLevel} key={shortid.generate()}>
                <Button
                  variant={'level'}
                  className={`${buttonsData[btn.level].styleLevel} ${
                    word.level === btn.level && styles.wDataLevelSelected
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    wordLevelDispatch({ word: word.word, level: btn.level });
                    const data = {
                      level: btn.level,
                      like: word.like,
                    };
                    wordEditDispatch(word._id, data);
                  }}
                >
                  <h3>{btn.icon}</h3>
                </Button>
              </div>
            ))}
          </div>
          <div className={styles.wDataLike}>
            <Button
              variant={'like'}
              onClick={(e) => {
                e.preventDefault();
                word.like ? wordUnlikeDispatch(word.word) : wordLikeDispatch(word.word);
                const data = {
                  level: word.level,
                  like: !word.like,
                };
                wordEditDispatch(word._id, data);
              }}
            >
              <h2 className={styles.wDataLikeIcon}>
                {!word.like ? <BsHeart /> : <BsHeartFill />}
              </h2>
            </Button>
          </div>
        </div>
      )}
    </li>
  );
};

Component.propTypes = {
  word: PropTypes.string,
  wordLikeDispatch: PropTypes.func,
  wordUnlikeDispatch: PropTypes.func,
  wordLevelDispatch: PropTypes.func,
  wordEditDispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  wordLikeDispatch: (word) => dispatch(caWordLike(word)),
  wordUnlikeDispatch: (word) => dispatch(caWordUnlike(word)),
  wordLevelDispatch: (data) => dispatch(caWordLevel(data)),
  wordEditDispatch: (word, data) => dispatch(caEditWordToDB(word, data)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as Word,
  Component as WordComponent,
};
