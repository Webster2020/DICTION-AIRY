import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, caWordAdd } from '../../../redux/wordsRedux.js';
import { getUserData } from '../../../redux/userRedux.js';

import styles from './TranslateForm.module.scss';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Select } from '../../common/Select/Select';

const Component = ({ user, word, words, close, wordAddDispatch }) => {
  const types = [
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
  const [values, setValues] = useState({
    user: user,
    word: word,
    translation: '',
    sentence: '',
    type: 'noun',
    tagA: '',
    tagB: '',
    language: 'eng',
    level: 0,
    like: false,
  });

  useEffect(() => {
    console.log('USE EFFECT');
    console.log(values);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log('>>> FROM  S T O R E  <<<');
    console.log(words);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
  });

  const handleChangeValue = (e, input) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const handleSelectValue = (type, value) => {
    setValues({
      ...values,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      user: user,
      word: word,
      translation: '',
      sentence: '',
      type: '',
      tagA: '',
      tagB: '',
      language: 'eng',
      level: 0,
      like: false,
    });
    wordAddDispatch(values);
    close();
  };

  return (
    <section className={styles.tf}>
      <div className={styles.tfRowCol}>
        <Input
          variant='wordInput'
          placeholder='translation'
          type='text'
          name='words'
          maxLength='15'
          value={values.translation}
          handleChangeValue={(e) => handleChangeValue(e, 'translation')}
        />
        <Input
          variant='wordInput'
          placeholder='sentence'
          type='text'
          name='sentence'
          maxLength='15'
          value={values.sentence}
          handleChangeValue={(e) => handleChangeValue(e, 'sentence')}
        />
        <div className={styles.tfRowRow}>
          <Input
            variant='wordInput'
            placeholder='tag A'
            type='text'
            name='tagA'
            maxLength='10'
            value={values.tagA}
            handleChangeValue={(e) => handleChangeValue(e, 'tagA')}
          />
          <Input
            variant='wordInput'
            placeholder='tag B'
            type='text'
            name='tagB'
            maxLength='10'
            value={values.tagB}
            handleChangeValue={(e) => handleChangeValue(e, 'tagB')}
          />
        </div>
        <div className={`${styles.tfRowCol} ${styles.tf100}`}>
          <Select
            type='type'
            options={types}
            val={values.type}
            handleChangeValue={(value) => handleSelectValue('type', value)}
          />
        </div>
        <div className={styles.tfRowRow}>
          <Select
            type='language'
            options={['pl', 'eng', 'de']}
            val={values.language}
            handleChangeValue={(value) => handleSelectValue('language', value)}
          />
          <Select
            type='level'
            options={[0, 1, 2]}
            val={values.level}
            handleChangeValue={(value) => handleSelectValue('level', value)}
          />
        </div>
      </div>
      <div className={styles.tfRow}>
        <Button
          main='true'
          variant='translate'
          onClick={(e) => handleSubmit(e)}
        >
          <h2>TRANSLATE</h2>
        </Button>
      </div>
    </section>
  );
};

Component.propTypes = {
  user: PropTypes.object,
  word: PropTypes.string,
  words: PropTypes.array,
  close: PropTypes.func,
  wordAddDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: getUserData(state),
  words: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  wordAddDispatch: (data) => dispatch(caWordAdd(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as TranslateForm,
  Component as TranslateFormComponent,
};
