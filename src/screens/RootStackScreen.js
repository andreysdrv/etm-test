import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostsScreen from './PostsScreen';
import CommentsScreen from './CommentsScreen';

const RootStack = createNativeStackNavigator();

export default class RootStackScreen extends Component {
  render() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen name="PostsScreen" component={PostsScreen} />
        <RootStack.Screen name="CommentsScreen" component={CommentsScreen} />
      </RootStack.Navigator>
    );
  }
}
