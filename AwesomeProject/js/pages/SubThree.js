import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import Banner from '../components/Banner'

class SubThree extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Banner />
				<Text>SubThree</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	}
})

export default SubThree