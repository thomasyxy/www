'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Container from './mods/container';

import './index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Container />
  </MuiThemeProvider>,
  document.getElementById('container')
);
