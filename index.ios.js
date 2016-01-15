/**
 * fengsh create 2016-1-15
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

import TabBar from './components/TabBar';

class QBaoDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  }
});

AppRegistry.registerComponent('QBaoDemo', () => QBaoDemo);
