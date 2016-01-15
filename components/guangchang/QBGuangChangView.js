'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  
export default class QBGuangchangMV extends Component {
  render() {
    return (
      <View style={[styles.fullview, {backgroundColor: 'red'}]}>
	  <Text >"广场主页"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullview: {
    flex: 1,
  }
});

AppRegistry.registerComponent('QBGuangchangMV', () => QBGuangchangMV);