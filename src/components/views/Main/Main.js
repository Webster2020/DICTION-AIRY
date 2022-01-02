import React, { useState } from 'react';

import { convTextToButtons } from '../../../utils/convTextToButtons';

// import styles from './Main.module.scss';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { MainButtons } from '../../features/MainButtons/MainButtons';
import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';
import { TextArea } from '../../features/TextArea/TextArea';
import { TextConverted } from '../../features/TextConverted/TextConverted';
import { TextWrapper } from '../../features/TextWrapper/TextWrapper';

const Component = () => {

  const [text, setText] = useState('');
  const [words, setWords] = useState(['dupa', 'dupa2', ',']);
  const [converted, setConverted] = useState(false);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleConvertion = (e) => {
    e.preventDefault();
    setWords(convTextToButtons(text));
    setConverted(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText('');
    setConverted(false);
  };

  return (
    <MainWrapper>
      <TextWrapper>
        {!converted && (
          <TextArea
            value={text}
            id='textarea'
            handleChangeText={(e) => handleChangeText(e)}
          ></TextArea>
        )}
        {converted && <TextConverted words={words} />}
      </TextWrapper>
      <MainButtons>
        {!converted && (
          <Button
            main='true'
            variant='home'
            id='convert'
            onClick={(e) => handleConvertion(e)}
          >
            <h2>CONVERT</h2>
          </Button>
        )}
        {converted && (
          <Button 
            main='true' 
            variant='home'
            id='clear' 
            onClick={(e) => handleClear(e)}
          >
            <h2>CLEAR</h2>
          </Button>
        )}
        <Button main='true' variant='home' onClick={(e) => handleClear(e)}>
          <Link to={'/words'} style={{ textDecoration: 'none' }}>
            <h2>MY WORDS</h2>
          </Link>
        </Button>
      </MainButtons>
    </MainWrapper>
  );
};

export {
  Component as Main,
  Component as MainComponent,
};
