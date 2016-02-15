
/**
 * fengsh create 2016-1-16
 * 
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  } from 'react-native';
  
export default class QBSnsRoot extends Component {  
    render() {
        return (
         <View style={styles.container}>

          <View style = {styles.scrollView}> 
          </View>

          <ScrollView
            automaticallyAdjustContentInsets={false}
            horizontal={true}
            pagingEnabled = {true}
            showsHorizontalScrollIndicator = {false}
            style={[styles.scrollView, styles.horizontalScrollView]}>
            {THUMBS.map(createThumbRow)}
          </ScrollView>

          </View>
                        
        );
    }
}

var THUMBS = ['http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg',
              'http://img.article.pchome.net/00/35/62/34/pic_lib/wm/Zhiwu37.jpg'
              ];

var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  // tabHeader:{
  //   top: 0,
  //   backgroundColor : '#6A85B',
  //   height : 50,
  // },

  scrollView: {
    top: 200,
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});

AppRegistry.registerComponent('QBSnsRoot', () => QBSnsRoot);