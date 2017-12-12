import React, {
	Component
} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    DrawerLayoutAndroid,
    Text,
} from 'react-native'
import {UserInfo} from './UserInfo'
class HomePage extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<UserInfo/>
			</View>
			);	
		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.left}
				renderNavigationView={() => navigationView}
			>
				<View>
					<Text>1123</Text>
				</View>
			</DrawerLayoutAndroid>
		);
	}
}
export {HomePage}