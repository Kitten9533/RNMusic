import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import TopNavigation from '../navigation/TopNavigation';

class HomePage extends React.Component{
	render(){
		return (
			<TopNavigation/>
		)
	}
}

// var toolbarActions = [
//   {title: 'Create', icon: require('./ic_create_black_48dp.png'), show: 'always'},
//   {title: 'Filter'},
//   {title: 'Settings', icon: require('./ic_settings_black_48dp.png'), show: 'always'},
// ];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	toolbar: {
    	backgroundColor: '#e9eaed',
    	height: 56,
  	},
})

export default HomePage