import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native'
import {
	StackNavigator,
} from 'react-navigation'

// import HomePage from '../pages/HomePage'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'

const RouteConfigs = {
	First: {
		screen: FirstPage,
	},
	Second: {
		screen: SecondPage,
	},
}

const RootNavigation = StackNavigator(RouteConfigs, {
	initialRouteName: 'First'
});

export default RootNavigation