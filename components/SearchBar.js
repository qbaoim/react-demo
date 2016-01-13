'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search Bar</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 40,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
