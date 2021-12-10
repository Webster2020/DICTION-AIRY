import React, { useState } from 'react';
import styles from './LoginForm.module.scss';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

const Component = () => {

  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChangeValue = (e, input) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LOGIN: ' + values.login);
    console.log('PASSWORD: ' + values.password);
    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <section className={styles.lf}>
      <div className={styles.lfRow}>
        <Input
          placeholder='LOGIN'
          type='text'
          name='login'
          value={values.login}
          handleChangeValue={(e) => handleChangeValue(e, 'login')}
        />
        <Input
          placeholder='PASSWORD'
          type='password'
          name='password'
          value={values.password}
          handleChangeValue={(e) => handleChangeValue(e, 'password')}
        />
      </div>
      <div className={styles.lfRow}>
        <Button main='true' variant='home' onClick={(e) => handleSubmit(e)}>
          <h2>LETS GO!</h2>
        </Button>
      </div>
    </section>
  );
};

export {
  Component as LoginForm,
  Component as LoginFormComponent,
};
