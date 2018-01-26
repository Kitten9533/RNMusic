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

	/**
	*    2*2
	**/


class MusicListContent extends React.Component{
	constructor(props) {
	  super(props);
		
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
	  	...this.props,
	  	...{ds: ds},
	  	...{dataSource: ds.cloneWithRows([{}]),
	  		dataSourceCell: [],
	  		},
	  };
	}

	componentDidMount(){
		this.getList();
	}

	async getList(){
		let res = await getPersonalized(this.state.type);
		this.setState({
			dataSourceCell: res.result.splice(0, 4).reverse()
		});
	}

	_renderListView(){
		let html = [];
		[].forEach.call(this.state.dataSourceCell, (item, index) => {
			let artists = [];
			[].forEach.call(item.artists, (atrist) => {
				artists.push(atrist.name);
			})
			html.push(
				<View key={index} style={{width: Dimensions.get('window').width/2.01, alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
				    <Image 
			            style={{width: Dimensions.get('window').width/2.01, height: Dimensions.get('window').width/3.9}}
			            source={{uri: item.picUrl}}
			            resizeMode={'stretch'}
			          />
					<Text style={styles.name} numberOfLines={1}>{item.name}</Text>
					<Text style={styles.artistsName} numberOfLines={1}>{artists.join('/')}</Text>
				</View>
				); 
		});
		return html;
	}

	render(){
		let content = this._renderListView();
		return (
			<View style={styles.content}>
				{content}
			</View>
			);
	}
}

class MusicListFourCell extends React.Component{
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
		flexDirection:'row',
		flexWrap : 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	name: {
		marginTop: 5,
		fontSize: 8,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'flex-start',
	},
	artistsName: {
		marginTop: 1,
		fontSize: 8,
		color: '#808080',
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'flex-start',
	},
})

export default MusicListFourCell