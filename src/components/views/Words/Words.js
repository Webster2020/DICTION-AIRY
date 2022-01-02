import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, getAllByUser } from '../../../redux/wordsRedux.js';

import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { Word } from '../../features/Word/Word';
import { WordsList } from '../../features/WordsList/WordsList';

// import styles from './Words.scss';

const Component = ({ words, wordsByUser }) => {
  useEffect(() => {
    console.log('WORDS BY USER:');
    console.log(wordsByUser);
  });

  return (
    <MainWrapper>
      <WordsList>
        {words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </WordsList>
    </MainWrapper>
  );
};

Component.propTypes = {
  words: PropTypes.array,
  wordsByUser: PropTypes.array,
};

const mapStateToProps = (state) => ({
  words: getAll(state),
  wordsByUser: getAllByUser(state),
});

const Container = connect(mapStateToProps)(Component);

export { 
  Container as Words, 
  Component as WordsComponent, 
};
