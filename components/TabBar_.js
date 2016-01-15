'use strict';

import React, {
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

export default class TabBar extends Component {
	
  render() {
    return (
		<View style={[styles.tabContent]}>
			<TabBarIOS tintColor="white"
			    //tabbar 颜色
        		barTintColor="#d5d5d5">
				<TabBarIOS.Item
          			title="钱宝">
					
		  		</TabBarIOS.Item>
				<TabBarIOS.Item
          			title="广场">
					
				</TabBarIOS.Item>
				<TabBarIOS.Item
          			title="发现">
					
				</TabBarIOS.Item>
				<TabBarIOS.Item
          			title="我">
					
				</TabBarIOS.Item>
			</TabBarIOS>
		</View>
    );
  }
};

const styles = StyleSheet.create({
  tabContainer:{
	  flex: 1,
	  alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});
