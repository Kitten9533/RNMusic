import * as us from '../actions/user'
// mapStateToProps
const initUser = {
	// account: null,
	// profile: null,
	// loading: false,
	uid: '',
	nickname: '',
	avatarUrl: '',
	backgroundUrl: '',
	follows:'',
	followeds: '',
};

export const user = (state = initUser, action) => {
	switch(action.type){
		case us.USER_LOGIN: 
			// alert(JSON.stringify({...state, ...action.user, uid: action.user.account.id}));
			// return {...state, ...action.user, uid: action.user.account.id};
			// return state;
			return {...state, uid: action.user.account.id.toString()};
			break;
		case us.GET_UID:
			return {...state};
			break;
		case us.GET_USER_INFO:
			return {
				...state, 
				uid: action.user.profile.userId.toString(),
				nickname: action.user.profile.nickname,
				avatarUrl: action.user.profile.avatarUrl,
				backgroundUrl: action.user.profile.backgroundUrl,
				follows: action.user.profile.follows.toString(),
				followeds: action.user.profile.followeds.toString(),
			};
			break;
		default: 
			return state;
	}
}