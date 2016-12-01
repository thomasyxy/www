import * as MainConstants from '../constants';
const INIT_PAGE_DATA = MainConstants.INIT_PAGE_DATA;


export function loadInitPageData(){
  return dispatch => {
    dispatch({
      type: INIT_PAGE_DATA,
      result: {
        msg: 12581
      }
    })
  }
}
