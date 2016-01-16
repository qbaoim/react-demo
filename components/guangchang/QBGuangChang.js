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
  
import QBGuangChangRoot from './QBGuangChangRoot';
  
export default class QBGuangChang extends Component {
	_handleRightButtonPress(){
		alert("写评论");
	}
	
	_handleLeftButtonPress(){
		alert("最新消息");
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
			title: '好友动态',
			rightButtonIcon: require('../res/navimages/icon_topbar_edit@2x.png'),
			leftButtonIcon:require('../res/navimages/icon_topbar_chat@2x.png'),
			onLeftButtonPress:this._handleLeftButtonPress,
			onRightButtonPress: this._handleRightButtonPress,
			component: QBGuangChangRoot,
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

AppRegistry.registerComponent('QBGuangChang', () => QBGuangChang);