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
	*    2*1   +   1*1
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
			dataSourceCell: res.result.splice(0, 3).reverse()
		});
	}

	_renderListView(){
		let html = [];
		[].forEach.call(this.state.dataSourceCell, (item, index) => {
			html.push(
				<View key={index} style={{width: index !== 2 ? Dimensions.get('window').width/2.01 : Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
				    <Image 
			            style={{width: index !== 2 ? Dimensions.get('window').width/2.01 : Dimensions.get('window').width, height: index !== 2 ? Dimensions.get('window').width/3.9 : Dimensions.get('window').width/2.8}}
			            source={{uri: item.picUrl}}
			            resizeMode={'stretch'}
			          />
					<Text style={styles.name} numberOfLines={1}>{item.name}</Text>
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

class MusicListThreeCell extends React.Component{
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
		marginBottom: 2,
		fontSize: 8,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		alignSelf: 'flex-start',
	}
})

export default MusicListThreeCell