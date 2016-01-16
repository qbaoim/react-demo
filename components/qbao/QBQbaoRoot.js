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
  } from 'react-native';
  
import SearchBar from './SearchBar';
import Banner from './Banner';
import IconList from './IconList';
import NewsBar from './NewsBar';
import HomePromption from './HomePromption';
import LeipaiSection from './LeipaiSection';
import BaogouSection from './BaogouSection';
import AdvertiseBar from './AdvertiseBar';
import StoreFloor from './StoreFloor';
import RecommendStore from './RecommendStore';
  
export default class QBQbaoRoot extends Component {  
    render() {
        return (
         <View style={[styles.container,{backgroundColor: 'white'}]}>
        <SearchBar/>
		<ScrollView style = {[{backgroundColor:'red'}]}>
			<Banner/>
			<IconList/>
			<NewsBar/>
			<HomePromption/>
			<LeipaiSection/>
			<BaogouSection/>
			<AdvertiseBar/>
			<StoreFloor/>
			<RecommendStore/>
			</ScrollView>
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

AppRegistry.registerComponent('QBQbaoRoot', () => QBQbaoRoot);
