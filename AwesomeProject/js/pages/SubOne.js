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
import Banner from '../components/Banner'
import Section from '../components/Section'
import MusicList from '../components/MusicList'
import MusicListThreeCell from '../components/MusicListThreeCell'
import MusicListFourCell from '../components/MusicListFourCell'

class SubOne extends React.Component{
	render(){
		return (
			<ScrollView style={styles.container}>
				<Banner/>
				<Section/>
				<MusicList type={"personalized"} />
				<MusicListThreeCell type={"privatecontent"} />
				<MusicListFourCell type={"mv"} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	}
})

export default SubOne