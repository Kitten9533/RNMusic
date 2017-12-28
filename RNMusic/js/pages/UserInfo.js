import React, {
	Component
} from 'react'
import {
	StyleSheet,
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
		return (
			<View style={styles.container}>
				<InfoTop/>
				<InfoContent/>
				<InfoBottom/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default UserInfo