import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        ...styles.wrapper,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#383f51" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#d1beb0',
    flex: 1,
    alignItems: 'center',
  },
});
