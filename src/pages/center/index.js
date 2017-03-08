'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Create from './mods/create';

import './index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Create />
  </MuiThemeProvider>,
  document.getElementById('container')
);
