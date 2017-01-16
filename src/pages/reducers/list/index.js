
'use strict';

import * as actions from '../../actions/list';
import extend from 'extend';

// 对页面prop 数据进行管理
const initialState = {
  morelist: null,
  navTitle: {},
  navList: null
};

export default function index(state = initialState, action = defaultAction) {
  switch (action.type) {
    case actions.ADD_TEXT:
      return Object.assign({}, state, {
        list: [action.data, ...state.list]
      });
    default:
      return extend(true, {}, state);
  }
}
