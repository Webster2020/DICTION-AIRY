import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { Header } from './components/layout/Header/Header';
import { Home } from './components/views/Home/Home';
import { Main } from './components/views/Main/Main';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Words } from './components/views/Words/Words';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/words' component={Words} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
