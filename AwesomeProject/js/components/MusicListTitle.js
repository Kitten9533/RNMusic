import React, {
 	Component,
} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button,
  	Image,
  	Dimensions,
  	ListView,
} from 'react-native'
import icon from '../common/iconfontConf';
import dicConf from '../common/dicConf';

class MusicListTitle extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = this.props;
	}

	render (){
		return (
			<View>
				<Text style={styles.title}>
					<Text style={styles.beforeTitleIcon}>
						{icon('vertical_line')}
					</Text>
					{dicConf.nameDic[this.state.type]}
					<Text style={styles.titleIcon}>
						{icon('youjiantou1')}
					</Text>
				</Text>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	title: {
		fontSize: 12,
		borderColor: '#e0e0e0',
		marginTop: 10,
		marginBottom: 5,
	},
	beforeTitleIcon: {
		fontSize: 12,
		fontFamily: 'iconfont', 
		borderColor: '#e0e0e0',
		color: '#d33a31',
	},	
	titleIcon: {
		fontSize: 12,
		fontFamily: 'iconfont', 
		borderColor: '#e0e0e0',
		marginLeft: 15,
	},
})

export default MusicListTitle