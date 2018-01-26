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
  	RefreshControl,
} from 'react-native'
import icon from '../common/iconfontConf';
import dicConf from '../common/dicConf';
import {getMVList} from '../services/getResources';
import MusicListTitle from '../components/MusicListTitle';

class MVList extends React.Component{
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

	_renderListView(rowData){
		return (
			<View>
				<Image 
					source={{uri: rowData.cover}} 
					style={{width: Dimensions.get('window').width, height: 300,}}
				/>
			</View>
			);
	}

	async getList(){
		let res = await getMVList();
		if(!res.hasMore){
			alert('没有更多了');
			return;
		}
		this.setState({
			dataSource: this.state.ds.cloneWithRows(res.data)
		});
	}

	render(){
		return (
			<View style={styles.content}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderListView}
			        contentContainerStyle={styles.listView}
			        initialListSize={5}
					>
				</ListView>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	listView: {

	}
})

export default MVList