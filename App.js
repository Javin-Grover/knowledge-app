import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/home.js";
import EnglishScreen from "./screens/english.js";
import MathsScreen from "./screens/maths.js"
import CurrentAffairsScreen from "./screens/current_affairs.js"
import ScienceScreen from "./screens/science.js"

const Stack = createStackNavigator();

export default class App extends React.Component {
  render (){
  return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="English" component={EnglishScreen} />
        <Stack.Screen name="CurrentAffairs" component={CurrentAffairsScreen} />
        <Stack.Screen name="Maths" component={MathsScreen} />
      <Stack.Screen name="Science" component={ScienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
  }
} 



