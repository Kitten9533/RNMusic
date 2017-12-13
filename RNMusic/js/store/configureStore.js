import reducers from '../reducers';
import thunk from 'redux-thunk'
import promise from './promise'
import array from './array'
import analytics from './analytics'
import {applyMiddleware, createStore} from 'redux';

const store = createStore(reducers, applyMiddleware(thunk, promise, array, analytics));

// console.log('-----------------');
// console.log(applyMiddleware(thunk, promise, array, analytics))
// console.log('-----------------');

// const store = createStore(reducers, {});

export default store;