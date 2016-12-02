import * as MainConstants from '../constants';
import Utils from '../utils'

const INIT_PAGE_DATA = MainConstants.INIT_PAGE_DATA;

let initState = {
  navData: null
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
    nextState.navData = [action.result];
    return nextState;
}
