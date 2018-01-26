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
			<ScrollView>
				<MVList />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {

	}
})

export default SubTwo