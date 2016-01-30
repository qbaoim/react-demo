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
  ScrollView,
  SliderIOS,
  //NativeViewIOS, //写在这里不报错不好跟踪
  RefreshControl
  } from 'react-native';
  
import { connect }              from 'react-redux';

//广告轮播
import QBWSBannerView from './QBWSBannerView';
//对联icon
import QBWSIconListView from './QBWSIconListView';
//热读
import QBWSHotReadView from './QBWSHotReadView';

import QBWSGoodsPicTips from './QBWSGoodsPicTips';

import QBWSRestApi from '../restengine/QBWSRestApi';

//这种方式更新跟踪错误
import NativeViewIOS from './nativeview/NativeView';

//轮播图数据
import * as bannerActions from '../../modules/banners';
//热读数据
import * as newsActions   from '../../modules/news';

//call native
var reactcallnative = require('NativeModules').QBReactCallNative;

//事件
var RCTDeviceEventEmitter = require('RCTNativeAppEventEmitter');

const mapStateToProps = (state) => ({
  banners: state.banners,
  news: state.news,
  baogou: state.baogou,
  categories: state.categories,
  products: state.products
});
  
export default class QBWeiShangRoot extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isRefreshing: false
	    };
		
		//call native 方法
		reactcallnative.getNativeArray([{ok:'goods'}],(obj) => {
			console.log(obj);
			});
		}
		
	
	  componentDidMount() {
	    this._fetchData();
		
		//注册一个事件
		var subscription = RCTDeviceEventEmitter.addListener(
  			'sendEventToJS',
  				(reminder) => console.log(reminder.name)
			);
			
			reactcallnative.test();
	  }
	  
	  //移除事件
	  componentDidUmnount() {
            subscription.remove();
      }
	
	  _fetchData() {
		//获取轮播图
	    //this.props.fetchBanners();
		//获取热读
		this.props.fetchNews();
		QBWSRestApi.fetchTest();
	  }
	
	  _onRefresh() {
	    this.setState({
	      isRefreshing: true
	    }, () => {
	      this._fetchData();
	      this.setState({
	        isRefreshing: false
	      });
	    });
	}	
	
    render() {
		
		
		
        return (
			<View style={styles.container}>
			<ScrollView
			refreshControl={
			<RefreshControl
			  refreshing={this.state.isRefreshing}
			  onRefresh={this._onRefresh.bind(this)}
			  tintColor="#ff0000"
			  title="刷新数据..."
			  colors={['#ff0000', '#00ff00', '#0000ff']}
			  progressBackgroundColor="#ffff00"
			/>
			}
			>
			<QBWSBannerView banners={this.props.banners.list} />
			<QBWSIconListView navigator={this.props.navigator}/>
			<QBWSHotReadView news={this.props.news.list}/>
			<QBWSGoodsPicTips />
			<NativeViewIOS  />
			<SliderIOS value={75.0} maximumValue={100.0}/>
			</ScrollView>
			</View>                 
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    backgroundColor: '#f2f1f9'
  },
  nvContainer:{
	flex:1
  }
});

AppRegistry.registerComponent('QBWeiShangRoot', () => QBWeiShangRoot);

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,
  Object.assign({}, bannerActions,newsActions)
  )(QBWeiShangRoot);