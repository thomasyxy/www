'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';

import createStore from './store';
import reducers from './reducers';

import './index.scss';

const store = createStore(reducers);

// 创建一个与store事件同步的history对象
const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('container')
);
