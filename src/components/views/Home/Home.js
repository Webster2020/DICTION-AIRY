import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { LoginForm } from '../../features/LoginForm/LoginForm';
import { MainButtons } from '../../features/MainButtons/MainButtons';
import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';

const Component = () => {

  const [loginVisible, setLoginVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  const handler = () => {
    setLoginVisible(!loginVisible);
    setCounter(counter + 1);
  };

  return (
    <MainWrapper>
      <MainButtons>
        <h1>{counter}</h1>
        <Button main='true' id={'tryfree'} variant='home'>
          <Link to={'/main'} id={'main'} style={{ textDecoration: 'none' }}>
            <h2>TRY FREE</h2>
          </Link>
        </Button>
        <Button main='true' id={'login'} variant='home' onClick={handler}>
          <h2>LOGIN</h2>
        </Button>
      </MainButtons>
      {loginVisible && <LoginForm />}
    </MainWrapper>
  );
};

export {
  Component as Home,
  Component as HomeComponent,
};
