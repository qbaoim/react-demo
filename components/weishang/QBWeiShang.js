/**
 * fengsh create 2016-1-16
 * 
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  View,
  } from 'react-native';
  
import QBWeiShangRoot from './QBWeiShangRoot';
  
export default class QBWeiShang extends Component {
	_handleRightButtonPress(){
		alert("扫描－发现");
	}
	
	
  render() {
    return (
		//微商首页
		<QBWeiShangRoot />	
    );
  }
}

const styles = StyleSheet.create({
  navWrap:{
	  flex:1,
	  backgroundColor : 'green',
  },
  container: {
    flex: 1,
	marginTop:0,
}
});

AppRegistry.registerComponent('QBWeiShang', () => QBWeiShang);