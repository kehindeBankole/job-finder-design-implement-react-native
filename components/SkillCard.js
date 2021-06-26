import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Mobile from '../assets/images/Vector.svg';
export default function SkillCard() {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 35,
        }}>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={styles.card}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 35}}>
        <View style={{marginRight: 10, ...styles.card}}>
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
        <View style={{marginLeft: 10, ...styles.card}} onTouchStart={()=>console.log(1)} onTouchEnd={()=>console.log('end')} >
          <Mobile />
          <Text style={styles.name}>d</Text>
          <View style={styles.clicked}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Inter-Light',
    fontSize: 18,
    fontWeight: '400',
  },
  card: {
    width: 115,
    height: 130,
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 15,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  clicked: {
    width: 25,
    height: 25,
    backgroundColor: '#9969D3',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
