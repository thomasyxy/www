import * as MainConstants from '../constants';
import Utils from '../utils'

const INIT_PAGE_DATA = MainConstants.INIT_PAGE_DATA;

let initState = {
  text: '你好',
  name: 'yixuan'
}

export default function dataLoadReducer(state = initState, action) {
    switch (action.type) {
        case MainConstants.INIT_PAGE_DATA:
            return loadInitData(state, action);
        default:
            return Utils.extend({}, state);
    }
}

function loadInitData(state, action) {
    let nextState = Utils.extend(true, {}, state);
    nextState.detailData = [action.result];
    return nextState;
}
