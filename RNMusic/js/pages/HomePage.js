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
    Dimensions,
    PixelRatio,
} from 'react-native'
import {connect} from 'react-redux'
import UserInfo from './UserInfo'
import {login, getUid, getUserDetail} from '../actions/user'
import config from '../services/config'
import {userLogin, userDetail} from '../services/user'

class HomePage extends Component {
	constructor(props){
		super();
		// this.state = this.props;
		this.state = {
			loading: false
		};
		this.login = this.login.bind(this);
		this.getUid = this.getUid.bind(this);
		this.getUserDetail = this.getUserDetail.bind(this);
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

	async getUserDetail(){
		const {dispatch} = this.props;
		try{
			const info = await userDetail();
			dispatch(getUserDetail(info)).
				then(() => {
					// this.setState({})
				});
		}
		catch(err){
			throw new Error('getUserDetail Failed:' + err);
		}
	}

	render(){
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<UserInfo/>
			</View>
			);

		// const deviceW = Dimensions.get('window').height;
		// const ScreenScale = Dimensions.get('window').scale;
		// console.log(`width: ${deviceW} + Scale:  ${ScreenScale}`);

		// const pi = PixelRatio.get();
		// console.log(`pi: ${pi}`);

		let	loading
			// loading
			// 	=
			// 	<View>
			// 		<ActivityIndicator 
			// 			style={styles.loading}
			// 			animating={true}
			// 			size="large" 
			// 		/>
			// 	</View>

		this.getUserDetail();

		return (
			<DrawerLayoutAndroid
				drawerWidth={350}
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
			        <Button
			            onPress={this.getUserDetail}
			            title="getUserDetail"
			            color="#E5E5E5"
			            accessibilityLabel="Ok, Great!"
			          />
			        {loading}
			        <Text>{JSON.stringify(this.props.user)}</Text>
				</View>
			</DrawerLayoutAndroid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'red',
		zIndex: 2,
		position: 'absolute',
		top: 0,
		right: 0,
		width: null,
		height: null,
	}
});

const select = state => {
	return state;
}

export default connect(select)(HomePage)