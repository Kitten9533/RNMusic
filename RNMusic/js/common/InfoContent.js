import React, {
	Component
} from 'react'
import {
	View,
	ListView,
	Text
} from 'react-native'
class InfoContent extends Component{
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
	  	dataSource: ds.cloneWithRows(['我的消息', '会员中心', '商城', '在线听歌免流量', '',
	  	 '我的好友', '附近的人', '',
	  	 '个性换肤', '听歌识曲', '定时停止播放', '扫一扫', '音乐闹钟', '驾驶模式', '音乐云盘'])
	  };
	  this._renderRow = this._renderRow.bind(this);
	}

	_renderRow(rowData){
		console.log(`rowData: ${rowData}`);
		return (
			<View>
				{/*<Text style={{fontFamily:'iconfont'}}>&#xe623;</Text>*/}
				{<Text>{rowData}</Text>}
			</View>

			);
	}

	render(){
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
			/>
			);
	}
}
export default InfoContent