import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { LoginForm } from '../../features/LoginForm/LoginForm';
import { MainButtons } from '../../features/MainButtons/MainButtons';
import { MainWrapper } from '../../layout/MainWrapper/MainWrapper';

const Component = () => {

  const [loginVisible, setLoginVisible] = useState(false);

  const handler = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <MainWrapper>
      <MainButtons>
        <Button main='true' variant='home'>
          <BrowserRouter>
            <Link to={'/main'} style={{ textDecoration: 'none' }}>
              <h2>TRY FREE</h2>
            </Link>
          </BrowserRouter>
        </Button>
        <Button main='true' variant='home' onClick={handler}>
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
