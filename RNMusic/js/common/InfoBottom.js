import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'
import {Text} from '../common/F8Text'
class InfoBottom extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return (
			<View style={styles.footer}>
				<Text>InfoBottom</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	contaner: {
		flex: 1,
	},
	footer: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
	}
});

export default InfoBottom