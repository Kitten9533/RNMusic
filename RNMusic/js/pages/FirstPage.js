import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'

class FirstPage extends Component{
	constructor(props) {
	  super();
	
	  this.state = {};
	}

	render(){
		return (
			<View style={styles.container}>
				<Text>FirstPage</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default FirstPage