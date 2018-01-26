import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'

class SubThree extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Text>SubThree</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default SubThree