import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './Word.module.scss';

import { Button } from '../../common/Button/Button';
import { BiLike, BiDislike, BiInfoCircle } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Component = ({ word }) => {
  const buttonsData = [
    {
      icon: <BiDislike />,
      level: 0,
    },
    {
      icon: <BiInfoCircle />,
      level: 1,
    },
    {
      icon: <BiLike />,
      level: 2,
    },
  ];

  const [visible, setVisible] = useState(false);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // level will come from word.level (it will be changing by dispatch action during click on level buttons)
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [level, setLevel] = useState(0); //this line to remove in future
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // like will come from word.like (it will be changing by dispatch action during click on heart button)
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [like, setLike] = useState(false); //this line to remove in future

  return (
    <li className={styles.w}>
      <Button
        variant={'dictionary'}
        className={`wDictionary wDictionary${level}`}
        onClick={() => setVisible(!visible)}
      >
        <h2>{word.word}</h2>
      </Button>
      {like && (
        <div className={'wHeart'}>
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
                  className={`level${btn.level} ${
                    level === btn.level && 'wDataLevelSelected'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setLevel(btn.level);
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
                setLike(!like);
              }}
            >
              <h2 className={styles.wDataLikeIcon}>
                {!like ? <BsHeart /> : <BsHeartFill />}
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
};

export {
  Component as Word,
  Component as WordComponent,
};
