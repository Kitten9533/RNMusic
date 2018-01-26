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
import {getPersonalized} from '../services/getResources';
import MusicListTitle from '../components/MusicListTitle';

	/*
	*    3*2
	*/


class MusicListContent extends React.Component{
	constructor(props) {
	  super(props);
		
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
	  	...this.props,
	  	...{ds: ds},
	  	...{dataSource: ds.cloneWithRows([
	  			{}
	  		])},
	  };
	}

	componentDidMount(){
		this.getList();
	}

	async getList(){
		let res = await getPersonalized(this.state.type);
		this.setState({
			dataSource: this.state.ds.cloneWithRows(res.result.splice(0, 6))
		});
	}

	_renderListView(rowData){
		return (
			<View style={{width: Dimensions.get('window').width/3.1, alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
			    <Image 
		            style={{width: Dimensions.get('window').width/3.1, height: Dimensions.get('window').width/3.1}}
		            source={{uri: rowData.picUrl}}
		            resizeMode={'stretch'}
		          />
				<Text style={styles.name} numberOfLines={1}>{rowData.name}</Text>
			</View>
			);
	}

	render(){
		return (
			<View style={styles.content}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderListView}
			        contentContainerStyle={styles.listView}
					>
				</ListView>
			</View>
			);
	}
}

class MusicList extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = this.props;
	} 

	render(){
		return (
			<View style={styles.container}>
				<MusicListTitle type={this.state.type}/>
				<MusicListContent type={this.state.type}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	listView: {
		flexDirection:'row',
		flexWrap : 'wrap',
		justifyContent: 'space-between',
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		marginTop: 5,
		marginBottom: 2,
		fontSize: 8,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'flex-start',
	}
})

export default MusicList