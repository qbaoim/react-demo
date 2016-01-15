'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class StoreFloor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Store Floor</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fuchsia',
    height: 80,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
