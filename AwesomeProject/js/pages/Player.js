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
  	findNodeHandle,
  	ImageBackground,
} from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur';
 
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null, blur: null, uri: null};
    this.imageLoaded = this.imageLoaded.bind(this);
    this._getBlur = this._getBlur.bind(this);
  }

  componentWillMount() {
    this.setState({
    	uri: 'http://p1.music.126.net/xSLtTnr8ewSuPfAi8DD_4A==/2488194813712174.jpg'
    })
  }
 
  imageLoaded() {
  	let elImg = findNodeHandle(this.img);
    this.setState({ 
    	viewRef: elImg,
    });

  }

  _getBlur() {
  	let blur = null;
  	if(!!this.state.viewRef){
  		blur = (<BlurView style={styles.absolute} viewRef={this.state.viewRef} blurType="light" blurAmount={10}/>);
  	}
  	return blur;
  }
 
  render() {
  	let blur = this._getBlur();
    return (
      <View style={styles.container}>
        <Image
          ref={(img) => {this.img = img}}
          source={{uri: this.state.uri}}
          style={styles.absolute}
          onLoadEnd={this.imageLoaded}
        />  
        {blur}      
        <Image
          ref={(img) => {this.centerImg = img}}
          source={{uri: 'http://p1.music.126.net/xSLtTnr8ewSuPfAi8DD_4A==/2488194813712174.jpg'}}
          style={styles.center}
        />  
        <Text>Hi, I am some unblurred text</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  center: {
	width: 100,
	height: 100,
	justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Player