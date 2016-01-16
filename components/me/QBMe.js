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
  
import QBMeRoot from './QBMeRoot';
  
export default class QBMe extends Component {
	
	_handleLeftButtonPress(){
		alert("设置");
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
			title: '我',
			leftButtonIcon: require('../res/navimages/icon_topbar_set@2x.png'),
			onLeftButtonPress:this._handleLeftButtonPress,
			component: QBMeRoot,
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

AppRegistry.registerComponent('QBMe', () => QBMe);