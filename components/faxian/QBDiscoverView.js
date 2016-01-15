'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  
export default class QBDiscoverMV extends Component {
  render() {
    return (
      <View style={[styles.fullview, {backgroundColor: 'blue'}]}>
	  <Text >"发现主页"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullview: {
    flex: 1,
  }
});

AppRegistry.registerComponent('QBDiscoverMV', () => QBDiscoverMV);