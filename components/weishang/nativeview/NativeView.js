/**
    fengsh 2016-1-29
 */
 
'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet
  } from 'react-native';

var requireNativeComponent = require('requireNativeComponent');

export default class NativeViewIOS extends Component {
  render() {
    return <NativeView shouldClick = {true} style={[styles.container,{backgroundColor: 'red'}]} />;
  }
}

NativeViewIOS.propTypes = {
  shouldClick: React.PropTypes.bool,
  style: View.propTypes.style
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop:0,
	marginBottom:62,
  }
});

var NativeView = requireNativeComponent('NativeView', NativeViewIOS);

AppRegistry.registerComponent('NativeViewIOS', () => NativeViewIOS);