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
} from 'react-native'
import Swiper from 'react-native-swiper';
import {getBanner} from '../services/getResources';

class Banner extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      banners: [],
      body: [],
    };
  }

  componentDidMount(){
    this.doGetBanner();
  }

  async doGetBanner(){
    let res = await getBanner();
    let banners = res.banners;
    this.setState({
      banners: banners,
    });
  }

  _renderSwiper(){
    let html = [];
    [].forEach.call(this.state.banners, (item, index) => {
      html.push(
        <View style={styles.slide} key={index}>
          <Image 
            style={{width: Dimensions.get('window').width, height: 160}}
            source={{uri: item.pic}}
          />
        </View>
        );
    });
    return html;
  }

	render(){
    let banner = this._renderSwiper();
		return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} 
          showsButtons={true}
          autoplay={true}
          autoplayTimeout={5}
          showsButtons={false}
          dot={<View style={styles.dotStyle} />}
          activeDot={<View style={styles.activeDotStyle} />}
          >
          {banner}
        </Swiper>
      </View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    height: 160,
  },
  wrapper: {

  },
  dotStyle: {
    backgroundColor:'rgba(0,0,0,.2)', 
    width: 8, 
    height: 8,
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: '#d33a31', 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  slide:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default Banner