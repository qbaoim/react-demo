'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  
export default class QBMeMV extends Component {
  render() {
    return (
      <View style={[styles.fullview, {backgroundColor: 'yellow'}]}>
	  <Text >"我的主页"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullview: {
    flex: 1,
  }
});

AppRegistry.registerComponent('QBMeMV', () => QBMeMV);