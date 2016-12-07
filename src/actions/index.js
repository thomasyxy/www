import * as MainConstants from '../constants';
import fetch from '../utils/ajax';


export function loadInitPageData(){
  const API_NAME = MainConstants.INIT_PAGE_DATA;
  return (dispatch) => {
    fetch({
      api: API_NAME,
      suc: res => {
        dispatch({
          type: API_NAME,
          result: res.data
        });
      },
      err: msg => {
        console.error(msg);
      }
    })
  };
}
