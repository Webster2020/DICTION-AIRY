import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getUserData } from '../../../redux/userRedux.js';
import { getAll, getSize } from '../../../redux/wordsRedux.js';
import { getFilters } from '../../../redux/filtersRedux.js';

import { Filters } from '../../features/Filters/Filters';
import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { Word } from '../../features/Word/Word';
import { WordsList } from '../../features/WordsList/WordsList';


const Component = ({ user, words, wordsAmout, filters }) => {
  return (
    <MainWrapper>
      <Filters />
      <h2>Words: {wordsAmout}</h2>
      <h2>TYPE: {filters.type}</h2>
      <h2>LEVEL: {filters.level}</h2>
      <h2>LIKE: {filters.like}</h2>
      <h2>TAG: {filters.tag}</h2>
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
  wordsAmout: PropTypes.number,
  filters: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: getUserData(state),
  words: getAll(state),
  wordsAmout: getSize(state),
  filters: getFilters(state),
});

const Container = connect(mapStateToProps)(Component);

export { 
  Container as Words, 
  Component as WordsComponent, 
};
