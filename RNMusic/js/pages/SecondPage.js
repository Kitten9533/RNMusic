import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'

class SecondPage extends Component{
	constructor(props) {
	  super();
	
	  this.state = {};
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>SecondPage</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default SecondPage