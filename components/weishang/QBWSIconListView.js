/**
 *  fengsh create 2016-1-26
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import QBBaoGouView from './QBBaoGouView';
//声明一个二维数组
const CHANNELS = [[{
  name: '宝购',
  icon: require('../res/wsimages/home-baogou-icon.png'),
  url: 'http://m.qbao.com/store/home.htm'
}, {
  name: '雷拍',
  icon: require('../res/wsimages/home-leipai-icon.png'),
  url: 'http://m.qbao.com/store/recomments.htm'
}, {
  name: '优惠券',
  icon: require('../res/wsimages/home-coupon-icon.png'),
  url: 'http://m.qbao.com/activities/qianbao-travel-20151010/qb-travel.htm'
}, {
  name: '我要分销',
  icon: require('../res/wsimages/home-task-icon.png')
}], [{
  name: '电影票',
  icon: require('../res/wsimages/home-ticket-icon.png')
}, {
  name: '抢红包',
  icon: require('../res/wsimages/home-redbag-icon.png')
}, {
  name: '生活服务',
  icon: require('../res/wsimages/home-life-icon.png')
}, {
  name: '优选公众号',
  icon: require('../res/wsimages/home-public-icon.png')
}]];

export default class QBWSIconListView extends Component {
  render() {
	
	  var items = CHANNELS.map((channels,idx) => {
		  
		  var channels = channels.map((channel,index) => {
				  return (
					  
					  	<TouchableOpacity
	                		style={styles.item}
	                		key={index}
	                		onPress={() => {
	                  			this.props.navigator.push({
	                    		name: 'channel',
	                    		component: QBBaoGouView,
	                    		params: {
	                      			url: channel.url
	                    		}
	                  		})
	                	}}>
	                		<Image style={styles.icon} source={channel.icon}/>
	                		<Text style={styles.name}>{channel.name}</Text>
						</TouchableOpacity>
					  
				  );
			  })
		  
		  return (
			  <View style={{flex: 1, flexDirection: 'row'}} key ={idx} >
			  	 {channels}
			  </View>
	  	  );
	  })   
	  
    return (
      <View style={styles.container}>
        {items}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: 135,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    margin: 5,
  },
  name: {
    color: '#acabb0',
    fontSize: 10,
  }
  });
  
AppRegistry.registerComponent('QBWSIconListView', () => QBWSIconListView);