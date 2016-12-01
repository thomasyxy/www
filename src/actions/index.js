import * as MainConstants from '../constants';


export function loadInitPageData(){
  const API_NAME = MainConstants.INIT_PAGE_DATA;
  return (dispatch) => {
    dispatch({
      type: API_NAME
    });
  };
}
