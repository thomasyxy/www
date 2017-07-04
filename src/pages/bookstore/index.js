'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Door from './mods/door';

import './index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Door />
  </MuiThemeProvider>,
  document.getElementById('container')
);
