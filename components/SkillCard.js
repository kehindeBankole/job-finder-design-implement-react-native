import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SkillCard() {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <Text>d</Text>
        </View>
        <View style={styles.card}>
          <Text>d</Text>
        </View>
        <View style={styles.card}>
          <Text>d</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginTop:35}}>
        <View style={styles.card}>
          <Text>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Text>d</Text>
        </View>
        <View style={styles.card}>
          <Text>d</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 115,
    height: 130,
    borderWidth: 2,
    borderColor:'#EAECF0',
    borderRadius: 15,
 //   borderColor: 'red',
    justifyContent:'center',
    flexDirection:"row",
    alignItems:'center',
    position:"relative"
  },
  clicked:{
    width:25,
    height:25,
    backgroundColor:'red',
    position:"absolute",
    top:0,
    right:0,
    borderBottomLeftRadius:15,
    borderTopRightRadius:15
  }
});
