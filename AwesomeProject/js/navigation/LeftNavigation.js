import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';

class HomeScreen extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
				<Button 
					onPress={() => navigate('Details')}
					title="go to details"	
					>
				</Button>
			</View>
		)
	}
}

class DetailsScreen extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Details Screen</Text>
				<Button 
					onPress={() => navigate('Home')}
					title="go Home"	
					>
				</Button>
			</View>
		)
	}
}

const LeftNavigation = TabNavigator ({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
	      headerTitle: 'Home',
	    },
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
	      headerTitle: 'Details',
	    },
	},
},{
	initialRouteName: 'Home',
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default LeftNavigation