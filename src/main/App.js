import React from 'react';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Routes from './Routes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { GlobalStyle } from '../styles/global.styles';
import * as S from './App.styles'

export function App() {
  return (
    <S.AppContainer>
      <Router>
        <Nav />
        <Routes />
        <Footer />
      </Router>
      <GlobalStyle />
    </S.AppContainer >
  );
}

export default App;
