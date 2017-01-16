'use strict';

import * as actions from '../../actions/home';

// 对页面prop 数据进行管理
const initialState = {
  navData: {}
};
const defaultAction = {
  type: 'doNothing'
};

export default function index(state = initialState, action = defaultAction) {
  switch (action.type) {
    case actions.LOAD_INIT_DATA:
      return loadInitData(state, action);
    default:
      return state;
  }
}

function loadInitData(state, action) {
  let nextState = Object.assign({}, state);
  nextState.navData = action.navData;
  return nextState;
}
