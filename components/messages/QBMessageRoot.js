/**
 * fengsh create 2016-1-16
 * 
 */
 
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  
export default class QBMessageRoot extends Component {  
    render() {
        return (
         <View style={[styles.container,{backgroundColor: 'white'}]}>
			 
        <Text>广场首页</Text>
		
		</View>
                        
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop:0,
  }
});

AppRegistry.registerComponent('QBMessageRoot', () => QBMessageRoot);