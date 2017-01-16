
'use strict';

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import list from './list/';
import home from './home/';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
  home,
  routing: routerReducer
});

export default rootReducer;
