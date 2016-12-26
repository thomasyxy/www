'use strict';
import { ajax, nameSpace } from '../../utils';

const ns = nameSpace('HOME');

export const LOAD_ARTICLE_LIST = ns('LOAD_ARTICLE_LIST');

export function getArticleList(params, suc, err) {
  return (dispatch) => {
    ajax({
      api: 'GET_ARTICLE_LIST',
      method: 'get',
      body: params
    }, (res) => {
      dispatch({
        type: LOAD_ARTICLE_LIST,
        data: {
          data: res.data
        }
      });
    }, (res) => {
      console.log(res);
    });
  };
}
