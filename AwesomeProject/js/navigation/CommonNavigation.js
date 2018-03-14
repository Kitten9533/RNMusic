import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import { StackNavigator, TabNavigator} from 'react-navigation'
import Player from '../pages/Player'
import TopNavigation from '../navigation/TopNavigation';

const CommonNavigation = StackNavigator ({
	Player: {
		screen: Player,
		navigationOptions: {
	   	    headerTitle: 'Player',
	    },
	},
	TopNavigation: {
		screen: TopNavigation,
		navigationOptions: {
	      headerTitle: null,
	    },
	}
},{
	initialRouteName: 'TopNavigation',
	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#d33a31',
			height: 50,
		},
		cardStyle: {
			backgroundColor: '#fff',
			color: 'red', 
		}
	},
})

export default CommonNavigation