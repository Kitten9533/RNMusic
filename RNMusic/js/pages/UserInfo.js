import React, {
	Component
} from 'react'
import {
	View,
	Text
} from 'react-native'
// import xFetch from '../services/xFetch'
import InfoTop from '../common/InfoTop'
import InfoContent from '../common/InfoContent'
import InfoBottom from '../common/InfoBottom'
class UserInfo extends Component{
	constructor(props) {
	  super();
	
	  this.state = {};
	}

	render(){
		// this.fetchData();
		return (
			<View>
				<InfoTop/>
				<InfoContent/>
				<InfoBottom/>
			</View>
			);
	}

	// fetchData(){
	// 	var info = xFetch('/user/detail?uid=102474474');
	// }
}
export default UserInfo