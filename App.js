import React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen"
import SpaceCraftsScreen from "./screens/SpaceCrafts"
import StarMapScreen from "./screens/StarMap"
import DailyPicScreen from "./screens/DailyPic"

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
      <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
      <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;