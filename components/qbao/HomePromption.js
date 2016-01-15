'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomePromption extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Promption</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 80,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
