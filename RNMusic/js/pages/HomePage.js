import React, {
	Component
} from 'react'
import {
	ActivityIndicator,
    AppRegistry,
    StyleSheet,
    View,
    DrawerLayoutAndroid,
    Text,
    Button,
} from 'react-native'
import {connect} from 'react-redux'
import UserInfo from './UserInfo'
import {login, getUid} from '../actions/user'
import config from '../services/config'
import {userLogin} from '../services/user'

class HomePage extends Component {
	constructor(props){
		super();
		// this.state = this.props;
		this.state = {
			loading: false
		};
		this.login = this.login.bind(this);
		this.getUid = this.getUid.bind(this);
	}

	_validFields(phone, password){
		if(!phone || !phone.length){
			throw new Error('phone is Empty');
		}
		if(!password || !password.length){
			throw new Error('password is Empty');
		}
	}

	async login(){
		const {phone, password} = config;
		const {dispatch} = this.props;
		try{
			this._validFields(phone, password);
			const user = await userLogin(phone, password);
			// alert(JSON.stringify(user));
			dispatch(login(
				user
			));
		}
		catch(err){
			throw new Error('Login Failed:' + err);
		}
	}

	async getUid(){
		const {dispatch} = this.props;
		this.setState({loading: true});
		try{
			dispatch(getUid()).
				then(()=>{
					this.setState({loading: false});
				});
		}
		catch(err){
			throw new Error('getUid Failed:' + err);
		}
	}

	render(){
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<UserInfo/>
			</View>
			);

		let	loading
		// if(this.state.loading){
			loading
				=
				<ActivityIndicator 
					style={styles.loading}
					animating={true}
					size="large" 
				/>
		// }

		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.left}
				renderNavigationView={() => navigationView}
			>
				<View>
					<Button
			            onPress={this.login}
			            title="Login"
			            color="#80BD01"
			            accessibilityLabel="Ok, Great!"
			          />
			       	<Button
			            onPress={this.getUid}
			            title="getUid"
			            color="#E5E5E5"
			            accessibilityLabel="Ok, Great!"
			          />
			        {loading}
			        <Text>{JSON.stringify(this.props.user.uid)}</Text>
				</View>
			</DrawerLayoutAndroid>
		);
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		alignItems: 'center',
		height: 40,
		justifyContent: 'center',
		// marginTop: 300
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'red'
	}
});

const select = state => {
	return state;
}

export default connect(select)(HomePage)