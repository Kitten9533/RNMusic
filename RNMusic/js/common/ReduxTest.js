import React, {
	Component
} from 'react'
import {connect} from 'react-redux'
import {
	AppRegistry,
    StyleSheet,
	View,
	Text,
	Switch,
} from 'react-native'

class ReduxTest extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	value: true
	  };
	  this.handleChange = this.handleChange.bind(this)
	}

	handleChange(value){
		this.setState({
			value: value
		})
	}

	render(){
		return (
			<View>
				<Switch onValueChange={this.handleChange} value={this.state.value}/>
			</View>
			);
	}
}
export {ReduxTest}