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

class MainThree extends React.Component{
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
				<Button 
					onPress={() => navigate('Details')}
					title="Three"	
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
	}
})

export default MainThree