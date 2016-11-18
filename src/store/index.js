
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import JhsDetailReducer from '../reducers/jhs-detail';
import { createStore, applyMiddleware } from 'redux';

let enhancer;

if (process.env.NODE_ENV !== 'production') {
    enhancer = applyMiddleware(thunk, createLogger());
} else {
    enhancer = applyMiddleware(thunk);
}

const store = createStore(JhsDetailReducer, undefined, enhancer);

export default store;
