'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResumePage from './mods/resume-page';

import './index.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <ResumePage />
  </MuiThemeProvider>,
  document.getElementById('container')
);
