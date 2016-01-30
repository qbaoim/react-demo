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
  
import QBSnsRoot from './QBSnsRoot';
  
export default class QBSns extends Component {
	_handleRightButtonPress(){
		alert("扫描－发现");
	}
	
	
  render() {
    return (
		
		<NavigatorIOS
		//背景色
		barTintColor="#e62f17"
		//左右按钮标题的色
		tintColor = 'white'
		translucent={false}
		style = {styles.container}
		itemWrapperStyle={styles.navWrap}
		//标题色
		titleTextColor = 'white'
		initialRoute = {{
			title: '发现',
			rightButtonIcon: require('../res/navimages/icon_topbar_scan@2x.png'),
			onRightButtonPress: this._handleRightButtonPress,
			component: QBSnsRoot,
			}}/>
			
			
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

AppRegistry.registerComponent('QBSns', () => QBSns);