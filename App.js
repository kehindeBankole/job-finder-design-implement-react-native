import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cartegory from './screens/category/Cartegory'
import Home from './screens/home/Home'
import { NativeRouter, Route, Link } from "react-router-native";
export default function App() {
  return (
<NativeRouter>
<View>
     <Route exact path="/" component={Cartegory}/>
     <Route exact path="/home" component={Home}/>
    </View>
</NativeRouter>
  )
}

const styles = StyleSheet.create({})   
