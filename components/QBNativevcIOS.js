'use strict';

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet
  } from 'react-native';

var requireNativeComponent = require('requireNativeComponent');

export default class QBNativeIOSVC extends Component {
  render() {
    return (
		<View style={styles.container}>
		<QBNativeVC  />
		</View>
	);
  }
}

QBNativeIOSVC.propTypes = {
  style: View.propTypes.style
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

var QBNativeVC = requireNativeComponent('QBNativeVC', QBNativeIOSVC);

AppRegistry.registerComponent('QBNativeIOSVC', () => QBNativeIOSVC);