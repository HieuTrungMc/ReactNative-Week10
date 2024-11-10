// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'
import BikeList from './BikeList'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="BikeList" component={BikeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;