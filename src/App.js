import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { Header } from './components/layout/Header/Header';
import { Main } from './components/views/Main/Main';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
