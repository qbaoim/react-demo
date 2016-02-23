'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NativeModules,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

var QBCallNativeVC = NativeModules.QBCallNativeVC;

export default class QBBaoGouView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigator.pop()}>
          <Text style={styles.header}>Back</Text>
        </TouchableOpacity>
		<View style={[styles.container,{backgroundColor: 'red'}]}>
		  <TouchableOpacity
		   					key = 'btnkey'
	                		onPress={() => {
							console.log('fdafdasfdasf');
							//var aaa = JSON.stringify(this.props.navigator)
							var nav = this.props.navigator;
	                  		QBCallNativeVC.push({'obj':'nav'},() => {
								
	                  		});	
	                	}}>	
	                	<Text > 点击我 </Text>
		   </TouchableOpacity>
		   </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  }
});

AppRegistry.registerComponent('QBBaoGouView', () => QBBaoGouView);