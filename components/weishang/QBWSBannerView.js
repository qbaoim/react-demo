/**
 *	fengsh create 2016-1-26
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

//循环播放组件
import Carousel from 'react-native-looped-carousel';
//切割组件
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');

export default class QBWSBannerView extends Component {
  render() {
	//查看当前取到的广告图数量
    console.log('banner.length: ' + this.props.banners.length);
    if (this.props.banners.length > 0) {
      return (
        <Carousel delay={2000} style={styles.container}>
        {
          this.props.banners.map((banner, index) => {
            return (
              <View key={index}>
                <Image
                  source={{uri: banner.picUrl}}
                  style={styles.bannerImage}/>
              </View>
            );
          })
        }
        </Carousel>
      );
    } else {
      return <View style={styles.container}></View>;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 172,
  },
  bannerImage: {
    width: width,
    height: 172,
  }
});

AppRegistry.registerComponent('QBWSBannerView', () => QBWSBannerView);