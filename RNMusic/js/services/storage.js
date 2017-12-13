import {AsyncStorage} from 'react-native';

const CURRENT_USER_KEY = 'CURRENT_USER_KEY';
const CURRENT_USER_UID = 'CURRENT_USER_UID';

export const saveUser = async user => {
	await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
	return user;
}

export const saveUid = async uid =>{
	await AsyncStorage.setItem(CURRENT_USER_UID, uid);
}

export const getSavedUid = async ()=>{
	return AsyncStorage.getItem(CURRENT_USER_UID).then((value) => {
		return value;
	}).catch((err) => {
		console.log('Error in getSavedUid:' + err);
	});
}