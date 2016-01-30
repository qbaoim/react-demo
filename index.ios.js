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



import { Provider } from 'react-redux';
//配置reducer
import configureStore from './modules/configureStore';
import Application from './components/Application';

const store = configureStore();

class QBaoDemo extends Component {
  render() {
    return (
		//将store放进provider
		//将provider放在组件顶层，并渲染
	   <Provider store={store}>
        <Application />
	   </Provider>
    );
  }
}

AppRegistry.registerComponent('QBaoDemo', () => QBaoDemo);
