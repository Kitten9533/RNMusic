import xFetch from '../services/xFetch'
import {getSavedUid} from '../services/storage'

// 用户登录，获取用户详情
export const getCurrentUser = async(uid) => {
	var res = xFetch('/user/detail?uid=' + uid);
	return res;
}

//用户登录
export const userLogin = async(phone, password) => {
	return xFetch(`/login/cellphone?phone=${phone}&password=${password}`);
}

//获取用户详情
export const userDetail = async() => {
	const gUid = await getSavedUid();
	if(!gUid) {
		alert('请先登录');
		return;
	}
	return xFetch(`/user/detail?uid=${gUid}`);
}