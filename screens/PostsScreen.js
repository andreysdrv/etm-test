import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const PostsScreen = ({navigation}) => (
  <View style={{backgroundColor: 'red'}}>
    <Button
      title="TEST BUTTON"
      onPress={() => navigation.navigate('CommentsScreen')}
    />
  </View>
);

export default PostsScreen;

const styles = StyleSheet.create({});
