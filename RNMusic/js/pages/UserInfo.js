import React, {
	Component
} from 'react'
import {
	View,
	Text
} from 'react-native'
import {InfoTop} from '../common/InfoTop'
import {InfoContent} from '../common/InfoContent'
import {InfoBottom} from '../common/InfoBottom'
class UserInfo extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return (
			<View>
				<InfoTop/>
				<InfoContent/>
				<InfoBottom/>
			</View>
			);
	}
}
export {UserInfo}