import React, {
	Component
} from 'react'
import {connect} from 'react-redux'
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native'
class InfoTop extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		let avatar;
		if(!!this.props.user.avatarUrl){
			avatar = 
					<View style={styles.avatarBox}>
						<Image style={styles.avatar}
							source={{uri: this.props.user.avatarUrl}}
						/>
					</View>;
		}
		return (
				<View >
					<View style={styles.bacground}>
						<Image style={styles.bacgroundImage}
							resizeMode="cover"
							source={{uri: !!this.props.user.backgroundUrl ? this.props.user.backgroundUrl : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1324127592,1219935462&fm=27&gp=0.jpg'}}
						/>
					</View>
					{avatar}
					<Text style={styles.nickname}>{this.props.user.nickname}</Text>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	viewPage:{
		zIndex: 1,
		flex: 1,
		height: 160,
		alignItems: 'center',
		position: 'relative',
	},
	nickname: {
		flex: 1,
		position: 'absolute',
		color: '#ffffff',
		top: 130,
		paddingLeft: 15,
	},
	avatarBox: {
		flex: 1,
		width: 80,
		height: 80,
		position: 'absolute',
		top: 40,
		left: 15,
	},
	avatar: {
		flex: 1,
		borderRadius: 40,
	},
	bacground: {
		flex: 1,
		height: 160,
	},
	bacgroundImage: {
		flex: 1,
	}
});

const select = (state) => {
	return state
}

export default connect(select)(InfoTop)