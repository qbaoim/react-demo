/**
 * fengsh create 2016-1-16
 * 
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    TabBarIOS,
    Component,
	StyleSheet,
	View
   } = React;
   
//钱宝导航
import QBQbao from './qbao/QBQbao';
//广场导航
import QBGuangChang from './guangchang/QBGuangChang';
//发现导航
import QBFaxian from './faxian/QBFaxian';
//个人导航
import QBMe from './me/QBMe';

export default class QBTabBar extends Component {
	constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0, //默认初始状态
        };
    }
	
	render() {
        return (
            <TabBarIOS tintColor= "#545454" 
			style={[{backgroundColor: "#545454"}]}>
				{/**首页*/}
				<TabBarIOS.Item
				title="钱宝"
				selected={this.state.selectedIndex == 0}
				icon = {require('./res/tabbar/index_1_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_1_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 0,
					});
				}}>
					<QBQbao />
				</TabBarIOS.Item>
				{/**广场*/}
				<TabBarIOS.Item
				title = "广场"
				selected={this.state.selectedIndex == 1}
				icon = {require('./res/tabbar/index_2_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_2_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 1,
					});
				}}>
					<QBGuangChang />
				</TabBarIOS.Item>
				{/**发现*/}
				<TabBarIOS.Item
				title="发现"
				selected={this.state.selectedIndex == 2}
				icon = {require('./res/tabbar/index_3_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_3_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 2,
					});
				}}>
					<QBFaxian />
				</TabBarIOS.Item>
				{/**我*/}
				<TabBarIOS.Item
				title="我"
				selected={this.state.selectedIndex == 3}
				icon = {require('./res/tabbar/index_4_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_4_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 3,
					});
				}}>
					<QBMe />
				</TabBarIOS.Item>
			</TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
	marginTop:0,
  }
});

AppRegistry.registerComponent('QBTabBar', () => QBTabBar);