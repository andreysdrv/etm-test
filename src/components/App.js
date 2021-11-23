import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from '../screens/RootStackScreen';
import {Provider} from 'react-redux';
import {store} from '../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    );
  }
}
