import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';


import LoginScreen from './LoginScreen';
import { NavigaitionContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigaitionContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigaitionContainer>
  );
}
