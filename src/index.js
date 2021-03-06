import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components/macro';

import App from './App';
import CreatePoll from './components/CreatePoll';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Login from './components/Login';
import NotFound from './components/NotFound';
import TestComponent from './components/TestComponent';

import defaultTheme from './themes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Header />
    <Router>
      <App path="/" />
      <CreatePoll path="/new" />
      <Login path="/login" />
      <TestComponent path="/test" />
      <NotFound default />
    </Router>
    <Footer />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
