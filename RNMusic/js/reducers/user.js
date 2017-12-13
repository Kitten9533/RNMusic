import * as us from '../actions/user'
// mapStateToProps
const initUser = {
	account: null,
	profile: null,
	loading: false,
};

export const user = (state = initUser, action) => {
	switch(action.type){
		case us.USER_LOGIN: 
			alert({...state, ...action.user, uid: action.user.account.id});
			return {...state, ...action.user, uid: action.user.account.id};
			// return state;
			break;
		case us.GET_UID:
			return {...state};
			break;
		default: 
			return state;
	}
}