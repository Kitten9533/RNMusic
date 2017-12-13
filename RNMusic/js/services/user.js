// 用户登录，获取用户详情
import xFetch from '../services/xFetch'

export const getCurrentUser = async(uid) => {
	var res = xFetch('/user/detail?uid=' + uid);
	return res;
}

//用户登录
export const userLogin = async(phone, password) => {
	return xFetch(`/login/cellphone?phone=${phone}&password=${password}`);
}