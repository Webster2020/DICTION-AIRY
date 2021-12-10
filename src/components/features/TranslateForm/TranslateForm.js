import React, { useEffect, useState } from 'react';

import styles from './TranslateForm.module.scss';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Select } from '../../common/Select/Select';

const Component = () => {

  const [values, setValues] = useState({
    translation: '',
    sentence: '',
    language: 'eng',
    level: ':-(',
  });

  useEffect(() => {
    console.log(values);
  });

  const handleChangeValue = (e, input) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const handleSelectValue = (type, value) => {
    console.log(type);
    console.log(value);
    setValues({
      ...values,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LOGIN: ' + values.translation);
    console.log('PASSWORD: ' + values.sentence);
    setValues({
      translation: '',
      sentence: '',
    });
  };

  return (
    <section className={styles.tf}>
      <div className={styles.tfRowCol}>
        <Input
          variant='wordInput'
          placeholder='translation...'
          type='text'
          name='words'
          maxLength='15'
          value={values.translation}
          handleChangeValue={(e) => handleChangeValue(e, 'translation')}
        />
        <Input
          variant='wordInput'
          placeholder='ex.sentence...'
          type='text'
          name='sentence'
          maxLength='15'
          value={values.sentence}
          handleChangeValue={(e) => handleChangeValue(e, 'sentence')}
        />
        <div className={styles.tfRowRow}>
          <Select
            type='language'
            options={['pl', 'eng', 'de']}
            handleChangeValue={(value) => handleSelectValue('language', value)}
          />
          <Select
            type='level'
            options={[':-(', ':-/', ':-)']}
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

export {
  Component as TranslateForm,
  Component as TranslateFormComponent,
};
