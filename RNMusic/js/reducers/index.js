import {combineReducers} from 'redux';
const user = require('../reducers/user');
const other = require('../reducers/other');

export default combineReducers({
	...user,
	...other
});