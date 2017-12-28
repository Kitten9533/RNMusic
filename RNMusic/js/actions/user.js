import {userLogin} from '../services/user';
import {saveUser, saveUid, getSavedUid} from '../services/storage';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_UID = 'GET_UID';
// mapDispatchToProps

export const login = async(user) => {
	// const {account, profile} = user;
	// alert('user---------' + JSON.stringify(user));
	const savedUser = await saveUser(user);
	const savedUid = await saveUid(user.account.id.toString());
	return {
		type: USER_LOGIN,
		user
	}
}

export const getUid = async() => {
	const gUid = await getSavedUid();
	return {
		type: GET_UID,
		gUid
	}
}

export const getUserDetail = async(info) => {
	return {
		type: GET_USER_INFO,
		user: info
	}
}