'use strict';

import * as actions from '../actions/index';

// 对页面prop 数据进行管理
const initialState = {
  initData: null,
  essayList: [],
  curPage: 0,
  loading: false
};
const defaultAction = {
  type: 'doNothing'
};

export default function index(state = initialState, action = defaultAction) {
  switch (action.type) {
    case actions.LOAD_ARTICLE_LIST:
      return Object.assign({}, state, {
        essayList: action.data.list.map(item => (
          `第${action.data.page}次加载：${item}`
        )),
        page: action.data.page
      });
    default:
      return state;
  }
}
