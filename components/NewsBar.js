'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewsBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>News Bar</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: 40,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
