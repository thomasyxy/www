'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginPage from './mods/login-page';

import './index.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <LoginPage />
  </MuiThemeProvider>,
  document.getElementById('container')
);
