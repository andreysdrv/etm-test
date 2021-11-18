import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';

const App = () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);

export default App;
