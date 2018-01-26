import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import { StackNavigator, TabNavigator} from 'react-navigation';
import MainOne from '../pages/MainOne';
import MainTwo from '../pages/MainTwo';
import MainThree from '../pages/MainThree';

const TopNavigation = TabNavigator({
	MainOne: {
		screen: MainOne,
		navigationOptions: {
			header: null,
		},
	},
	MainTwo: {
		screen: MainTwo,
		navigationOptions: {
			header: null,
			title: null,
		},
	},
	MainThree: {
		screen: MainThree,
		navigationOptions: {
			header: null,
		},
	}
},{
	initialRouteName: 'MainOne',
	tabBarPosition: 'top',
	tabBarOptions: {
		style: {
			backgroundColor: '#d33a31', 
			justifyContent: 'center',
			// elevation: 0, //立体感
		},
		tabStyle: {
 			
		},
		indicatorStyle: {
			height: 0,
		},
	},
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default TopNavigation