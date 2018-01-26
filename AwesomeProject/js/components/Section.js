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
// import Iconfont from 'react-native-vector-icons/iconfont';
import icon from '../common/iconfontConf'

class Section extends React.Component{
	constructor(props) {
	  super(props);
	
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
	  	dataSource: ds.cloneWithRows([
	  			{key: '', icon: 'diantai', text: '私人FM'},
	  			{key: '', icon: 'rili', text: '每日推荐'},
	  			{key: '', icon: 'swticonyinle2', text: '歌单'},
	  			{key: '', icon: 'paihangbang', text: '排行榜'}
	  		])
	  };
	  this._renderRow = this._renderRow.bind(this);
	} 

	_renderRow(rowData){
		return (
			    <View style={styles.circle}>
                    <Text style={styles.icon}>
                    	{icon(rowData.icon)}
                	</Text>
                	<Text style={styles.iconText}>{rowData.text}</Text>
                </View>
			);
	}

	render(){
		return (
			<View style={styles.container}>
                <ListView
		          dataSource={this.state.dataSource}
		          renderRow={this._renderRow}
		          contentContainerStyle={styles.listView}
		        />
		    </View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		
	},
	circle: {
		flex: 1,
    	alignItems: 'center',
	},
	icon: {
		marginTop: 15,
		marginBottom: 10,
		fontFamily: 'iconfont', 
		fontSize: 24, 
		color: '#d33a31',
	},
	iconText: {
		fontSize: 12, 
		color: '#808080',
		marginBottom: 10,
	},
	listView: {
		flexDirection:'row',
		paddingLeft: 20, 
		paddingRight: 20,
		borderColor: '#e0e0e0',
		borderBottomWidth : 1,
	},
})

export default Section