import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View
        style={{
          ...styles.wrapper,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#383f51" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#d1beb0',
    flex: 1,
    alignItems: 'center',
  },
});
