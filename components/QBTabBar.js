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
   
//微商
import QBWeiShang from './weishang/QBWeiShang';
//消息
import QBMessage from './messages/QBMessage';
//社区
import QBSns from './sns/QBSns';
//发现
import QBFaxian from './faxian/QBFaxian';
//我
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
				{/**微商*/}
				<TabBarIOS.Item
				title="微商"
				selected={this.state.selectedIndex == 0}
				icon = {require('./res/tabbar/index_1_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_1_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 0,
					});
				}}>
					<QBWeiShang />
				</TabBarIOS.Item>
				{/**消息*/}
				<TabBarIOS.Item
				title = "消息"
				selected={this.state.selectedIndex == 1}
				icon = {require('./res/tabbar/index_2_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_2_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 1,
					});
				}}>
					<QBMessage />
				</TabBarIOS.Item>
				{/**社区*/}
				<TabBarIOS.Item
				title="社区"
				selected={this.state.selectedIndex == 2}
				icon = {require('./res/tabbar/index_3_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_3_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 2,
					});
				}}>
					<QBSns />
				</TabBarIOS.Item>
				{/**发现*/}
				<TabBarIOS.Item
				title="发现"
				selected={this.state.selectedIndex == 3}
				icon = {require('./res/tabbar/index_3_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_3_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 3,
					});
				}}>
					<QBFaxian />
					</TabBarIOS.Item>
				{/**我*/}
				<TabBarIOS.Item
				title="我"
				selected={this.state.selectedIndex == 4}
				icon = {require('./res/tabbar/index_4_normal@2x.png')}
				selectedIcon = {require('./res/tabbar/index_4_selected@2x.png')}
				onPress={() => {
					this.setState({
						selectedIndex: 4,
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