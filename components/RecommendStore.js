'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RecommendStore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recommend Store</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    height: 80,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
