import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from '../screens/RootStackScreen';
import {Provider} from 'react-redux';
import {store} from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
