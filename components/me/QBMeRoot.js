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
  
export default class QBMeRoot extends Component {  
    render() {
        return (
         <View style={[styles.container,{backgroundColor: 'green'}]}>
			 
        <Text>我首页</Text>
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

AppRegistry.registerComponent('QBMeRoot', () => QBMeRoot);