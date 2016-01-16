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

import QBTabBar from './components/QBTabBar';

class QBaoDemo extends Component {
  render() {
    return (
       <QBTabBar />
    );
  }
}

AppRegistry.registerComponent('QBaoDemo', () => QBaoDemo);
