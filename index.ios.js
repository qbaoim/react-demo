/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import IconList from './components/IconList';
import NewsBar from './components/NewsBar';
import HomePromption from './components/HomePromption';
import LeipaiSection from './components/LeipaiSection';
import BaogouSection from './components/BaogouSection';
import AdvertiseBar from './components/AdvertiseBar';
import StoreFloor from './components/StoreFloor';
import RecommendStore from './components/RecommendStore';
import TabBar from './components/TabBar';

class QBaoDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <ScrollView>
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
