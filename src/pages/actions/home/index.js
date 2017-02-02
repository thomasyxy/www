'use strict';
import { ajax, nameSpace } from '../../../utils';

const ns = nameSpace('HOME');

export const LOAD_INIT_DATA = ns('LOAD_INIT_DATA');
export const LOAD_ARTICLE_LIST = ns('LOAD_ARTICLE_LIST');

export function getInitList(params, suc, err) {
  return (dispatch) => {
    ajax({
      api: 'GET_INIT_DATA',
      method: 'get',
      body: params
    }, (res) => {
      dispatch({
        type: LOAD_INIT_DATA,
        navData: res.navData
      });
      suc && suc();
    }, (res) => {
      console.log(res);
      err && err()
    });
  };
}

export function getArticleList(params, suc, err) {
  return (dispatch) => {
    ajax({
      api: 'GET_ARTICLE_LIST',
      method: 'get',
      body: params
    }, (res) => {
      dispatch({
        type: LOAD_ARTICLE_LIST,
        data: res.list
      });
      suc && suc();
    }, (res) => {
      console.log(res);
      err && err()
    });
  };
}
