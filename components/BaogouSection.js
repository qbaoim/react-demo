'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BaogouSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Baogou Section</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: 80,
    marginBottom: 2
  },
  title: {
    color: 'white'
  }
});
