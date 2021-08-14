import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cartegory from './screens/category/Cartegory'
import Home from './screens/home/Home'
import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  
  return (
     <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Category" component={Cartegory} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})   