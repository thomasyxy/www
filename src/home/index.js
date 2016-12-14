'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/index';
import reducers from './reducers/index';

import App from './mods/main';

import './index.scss';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
