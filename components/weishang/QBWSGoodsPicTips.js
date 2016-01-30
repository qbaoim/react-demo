/**
 * fengsh create 2016-1-16
 *   商品图片提示
 */
 
 
 'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');

export default class QBWSGoodsPicTips extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='stretch'
          style={styles.left}
          source={require('../res/wsimages/home-promption-sample01.png')}/>
        <View style={styles.right}>
          <Image
            style={styles.top}
            resizeMode='stretch'
            source={require('../res/wsimages/home-promption-sample02.png')}/>
          <Image
            style={styles.bottom}
            resizeMode='stretch'
            source={require('../res/wsimages/home-promption-sample03.png')}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 145,
    marginTop: 8,
    marginBottom: 8,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  top: {
    width: width/2,
  },
  bottom: {
    width: width/2,
  }
});

AppRegistry.registerComponent('QBWSGoodsPicTips', () => QBWSGoodsPicTips);
