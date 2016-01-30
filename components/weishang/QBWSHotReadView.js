/**
 * fengsh create 2016-1-16
 *  热读视图
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class QBWSHotReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  //循环播放
  _loop() {
    this.newsTimer = setTimeout(() => {
      if (this.state.currentIndex === this.props.news.length - 1) {
        this.setState({
          currentIndex: 0
        });
      } else {
        this.setState({
          currentIndex: this.state.currentIndex + 1
        });
      }
      this._loop();
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.news.length !== nextProps.news.length) {
      clearTimeout(this.newsTimer);
      this.setState({
        currentIndex: 0
      }, () => {
        this._loop();
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.newsTimer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../res/wsimages/home-news-title.png')}/>
        <View style={styles.news}>
        {
          this.props.news.map((item, index) => {
            if (index === this.state.currentIndex) {
              return (
                <Text key={index} style={styles.content}>{item.title}</Text>
              );
            }
          })
        }
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 29,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    color: '#99989e',
    fontSize: 12,
  },
  news: {
    marginLeft: 5,
  },
});

AppRegistry.registerComponent('QBWSHotReadView', () => QBWSHotReadView);