import React, {
	Component
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'
// import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';

class MainOne extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
				<Button 
					onPress={() => navigate('Player')}
					title="111111111"	
					>
				</Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	}
})

export default MainOne