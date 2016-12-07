// import fetch from 'fetch';
import reqwest from 'reqwest';

import Utils from './index';

export default function fetch(params){
  if(!params.api || !API[params.api]){
    return
  }

  if(Utils.isLocal()){
    params.api = API[params.api]['local'];
    fetchMock(params);
  }else{

  }
}

function fetchMock(params){
  reqwest({
    url: params.api,
    type: params.type || 'json',
    method: params.method || 'get',
    success: (res) => {
      if(res.success === true){
        params.suc && params.suc(res.data);
      }else{
        params.err && params.err(res.message || '接口调用出错');
      }
    },
    error: () => {
      params.err && params.err('接口调用异常');
    }
  });
}
