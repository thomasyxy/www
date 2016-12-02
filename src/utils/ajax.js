import fetch from 'fetch';

import Utils from './index';

export default function fetch(params){
  if(!params.url || !API[params.url]){
    return
  }

  if(Utils.isLocal()){
    params.api = API[params.url]['local'];
    fetchMock(params);
  }else{

  }
}
