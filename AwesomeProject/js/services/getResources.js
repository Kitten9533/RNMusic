import xFetch from '../services/xFetch'
import dicConf from '../common/dicConf'
import config from '../services/config'

//获取banner
export const getBanner = async() => {
	let res = await xFetch(`/banner`);
	return res;
}

//获取推荐信息等
export const getPersonalized = async(type) => {
	let phone = config.phone,
		password = config.password;
	// let res = await xFetch(`/login/cellphone?phone=${phone}&password=${password}`);
	let res = await xFetch(dicConf.apiDic[type]);
	return res;
}

//获取mv列表
export const getMVList = async(offset=0, limit=10) => {
	let res = await xFetch(`/top/mv?offset=${offset}&limit=${limit}`);
	return res;
}

//获取mv详情
export const getMVDetail = async(mvid) => {
	let res = await xFetch(`/mv?mvid=${mvid}`);
	return res;
}