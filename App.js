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


// // In App.js in a new project

// import * as React from 'react';
// import { View, Text , Pressable} from 'react-native';


// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Pressable style={{backgroundColor:'red' , height:80}}onPress={()=>navigation.navigate('Cat')}>
// <Text>go to cat</Text>
//       </Pressable>
//     </View>
//   );
// }
// function CatScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Cat Screen</Text>
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// function App() {
//   return (
   
//   );
// }

// export default App;

