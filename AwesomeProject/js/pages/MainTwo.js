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
import SubOne from '../pages/SubOne';
import SubTwo from '../pages/SubTwo';
import SubThree from '../pages/SubThree';

const MainTwo = TabNavigator({
	SubOne: {
		screen: SubOne,
		navigationOptions: {
			title: '音乐',
		},
	},
	SubTwo: {
		screen: SubTwo,
		navigationOptions: {
			title: '视频',
		},
	},
	SubThree: {
		screen: SubThree,
		navigationOptions: {
			title: '电台',
		},
	}
},{
	initialRouteName: 'SubOne',
	tabBarPosition: 'top',
	animationEnabled: false, //TabNavigator嵌套TabNavigator 无法正常显示问题修复
	swipeEnabled: false, //TabNavigator嵌套TabNavigator 无法正常显示问题修复
	tabBarOptions: {
		style: {
			backgroundColor: '#fff',
			borderBottomWidth: 0,
			elevation: 0,
		},
		labelStyle: {
			color: '#000',
			margin: 0,
		},
		tabStyle: {
			paddingLeft: 10,
			paddingRight: 10,
		},
		indicatorStyle: {
			backgroundColor: '#d33a31',
            elevation: 0,
            shadowColor: "#d33a31",
            shadowOpacity: 0,
            shadowRadius: 0,
            shadowOffset: {
            	height: 0,
            	width: 0,
            },
            // transform: {
            // 	scale: 50,
            // },
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

export default MainTwo