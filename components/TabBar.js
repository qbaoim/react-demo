/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 * icon={{uri: base64Icon, scale: 3}}
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

//钱宝首页
import QbaoMV from './qbao/QBQianbaoView';
//广场首页
import QBGuangchangMV from './guangchang/QBGuangChangView';
//发现首页
import QBDiscoverMV from './faxian/QBDiscoverView';
//我首页
import QBMeMV from './me/QBMeView';

var TabBar = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBar',

  getInitialState: function() {
    return {
      selectedTab: 'qb', //默认初始状态
      notifCount: 0,
      presses: 0,
    };
  },

  _renderItemView:function (idx:int) {
	  var view;
	  
	  switch (idx) {
	  	  case 0: 
		     view = <QbaoMV />;
			 break;
		  case 1:
		     view = view = <QBGuangchangMV />;  
			 break;
		  case 2:
		  	 view = view = <QBDiscoverMV />; 
		  	 break;
		  case 3:
		  	 view = view = <QBMeMV />; 
		 	 break; 
	  }
	  
	  return (
		  <View style={[styles.tabContent,{backgroundColor: 'white'}]}>
			  {view}
		  </View>
	  );
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor= "#545454"
        style={[{backgroundColor: "#545454"}]}>
		{/**首页*/}
        <TabBarIOS.Item
          title="钱宝"
          selected={this.state.selectedTab === 'qb'}
		  icon = {this.state.selectedTab === 'qb' ? require('./res/tabbar/index_1_selected@2x.png') : require('./res/tabbar/index_1_normal@2x.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'qb',
            });
          }}>
          
		  {this._renderItemView(0)}
        </TabBarIOS.Item>
		{/**广场*/}
        <TabBarIOS.Item
		  icon = {this.state.selectedTab === 'gc' ? require('./res/tabbar/index_2_selected@2x.png') : require('./res/tabbar/index_2_normal@2x.png')}
		  title = "广场"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'gc'}
          onPress={() => {
            this.setState({
              selectedTab: 'gc',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderItemView(1)}
        </TabBarIOS.Item>
		{/**发现*/}
        <TabBarIOS.Item
          icon = {this.state.selectedTab === 'fx' ? require('./res/tabbar/index_3_selected@2x.png') : require('./res/tabbar/index_3_normal@2x.png')}
          title="发现"
          selected={this.state.selectedTab === 'fx'}
          onPress={() => {
            this.setState({
              selectedTab: 'fx',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderItemView(2)}
        </TabBarIOS.Item>
		{/**我*/}
		<TabBarIOS.Item
          icon = {this.state.selectedTab === 'me' ? require('./res/tabbar/index_4_selected@2x.png') : require('./res/tabbar/index_4_normal@2x.png')}
          title="我"
          selected={this.state.selectedTab === 'me'}
          onPress={() => {
            this.setState({
              selectedTab: 'me',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderItemView(3)}
		  </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  }
});

module.exports = TabBar;