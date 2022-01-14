import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getUserData } from '../../../redux/userRedux.js';
import { getAll } from '../../../redux/wordsRedux.js';

import { Filters } from '../../features/Filters/Filters';
import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { Word } from '../../features/Word/Word';
import { WordsList } from '../../features/WordsList/WordsList';


const Component = ({ user, words }) => {
  useEffect(() => {
    console.log('WORDS BY USER:');
  });

  return (
    <MainWrapper>
      <Filters />
      <WordsList>
        {words.map((word) => (
          <Word key={shortid.generate()} word={word} user={user} />
        ))}
      </WordsList>
    </MainWrapper>
  );
};

Component.propTypes = {
  user: PropTypes.object,
  words: PropTypes.array,
};

const mapStateToProps = (state) => ({
  user: getUserData(state),
  words: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export { 
  Container as Words, 
  Component as WordsComponent, 
};
