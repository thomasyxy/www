'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ResumePage from './mods/resume-page';

import './index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <ResumePage />
  </MuiThemeProvider>,
  document.getElementById('container')
);
