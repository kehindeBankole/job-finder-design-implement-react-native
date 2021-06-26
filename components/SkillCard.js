import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SkillCard() {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
        </View>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
        </View>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginTop:35}}>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
        </View>
        <View style={styles.card}>
          <Text  style={styles.name}>d</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center' ,marginTop:35}}>
        <View style={{marginRight:10 , ...styles.card}}>
          <Text  style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={{marginLeft:10 , ...styles.card}}>
          <Text style={styles.name}>d</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  name:{
fontFamily:"Inter-Black",
fontSize:30,
fontWeight:'900'
  },
  card: {
    width: 115,
    height: 130,
    borderWidth: 1,
    borderColor:'#EAECF0',
    borderRadius: 15,
    justifyContent:'center',
    flexDirection:"row",
    alignItems:'center',
    position:"relative",
  },
  clicked:{
    width:25,
    height:25,
    backgroundColor:'#9969D3',
    position:"absolute",
    top:0,
    right:0,
    borderBottomLeftRadius:15,
    borderTopRightRadius:15
  }
});
