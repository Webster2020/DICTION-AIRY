import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getUserData } from '../../../redux/userRedux.js';
import { getTagsA, getTagsB } from '../../../redux/wordsRedux.js';
import { caFilterWords } from '../../../redux/filtersRedux.js';

import styles from './FiltersForm.module.scss';

import { Button } from '../../common/Button/Button';
import { Select } from '../../common/Select/Select';

const Component = ({ 
  user, 
  close, 
  tagsA, 
  tagsB, 
  // filteredWords, 
  wordsFilterDispatch,
}) => {
  useEffect(() => {
    // console.log(filteredWords);
  });

  // const tempTags = [...new Set([...tagsA, ...tagsB])];
  //let unique = [...new Set(myArray)];

  const types = [
    'ALL',
    'noun',
    'verb',
    'adjective',
    'adverb',
    'pronoun',
    'article',
    'preposition',
    'conjunction',
    'numeral',
    'other',
  ];
  
  const languages = ['ALL', 'pl', 'eng', 'de'];
  const levels = ['ALL', 0, 1, 2];
  const tags = ['ALL', ...new Set([...tagsA, ...tagsB])];
  const likes = ['ALL', 'NO', 'YES'];

  const filters = [
    { name: 'type', values: [...types] },
    { name: 'tag', values: [...tags] },
    { name: 'language', values: [...languages] },
    { name: 'level', values: [...levels] },
    { name: 'like', values: [...likes] },
  ];

  const [filteredValues, setFilteredValues] = useState({
    user: user,
    type: 'ALL',
    tag: 'ALL',
    language: 'ALL',
    level: 'ALL',
    like: 'ALL',
  });

  const handleSelectValue = (type, newValue) => {
    setFilteredValues({
      ...filteredValues,
      [type]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FILTERED VALUES:');
    console.log(filteredValues);
    wordsFilterDispatch(filteredValues);
    close(false);
  };

  return (
    <section className={styles.ff}>
      {filters.map((filter) => (
        <div className={`${styles.ffRowCol} ${styles.ff100}`} key={shortid.generate()}>
          <div className={styles.ffTitle}>
            <h2>
              {filter.name === 'language' ? 'LANG' : filter.name.toUpperCase()}
            </h2>
          </div>
          <Select
            type={filter.name}
            options={filter.values}
            val={filteredValues[filter.name]}
            handleChangeValue={(value) => handleSelectValue(filter.name, value)}
          />
        </div>
      ))}

      <div className={styles.ffRow}>
        <Button
          main='true'
          variant='translate'
          onClick={(e) => handleSubmit(e)}
        >
          <h2>FILTER</h2>
        </Button>
      </div>
    </section>
  );
};

Component.propTypes = {
  user: PropTypes.object,
  tagsA: PropTypes.array,
  tagsB: PropTypes.array,
  // filteredWords: PropTypes.array,
  close: PropTypes.func,
  wordsFilterDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: getUserData(state),
  tagsA: getTagsA(state),
  tagsB: getTagsB(state),
  // filteredWords: getFilteredWord(state),
});

const mapDispatchToProps = (dispatch) => ({
  wordsFilterDispatch: (data) => dispatch(caFilterWords(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as FiltersForm, Component as FiltersFormComponent };

// export default TranslateForm;
