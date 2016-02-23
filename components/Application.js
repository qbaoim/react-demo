'use strict';

import React, {
  Component,
  Navigator,
} from 'react-native';

import QBTabBar from './QBTabBar';

export default class Application extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'QBTabBar',
          component: QBTabBar
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;

          if(Component) {
            return <Component {...route.params} navigator={navigator} />
          }
        }}
      />
    );
  }
};
