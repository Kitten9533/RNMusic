import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button,
	ScrollView,
} from 'react-native'
import MVList from '../components/MVList'

class SubTwo extends React.Component{
	render(){
		return (
			<ScrollView style={styles.container}>
				<MVList />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	}
})

export default SubTwo