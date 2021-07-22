/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Pressable , StyleSheet, Text, View , Dimensions} from 'react-native';
import Mobile from '../assets/images/Vector.svg';
import Mark from '../assets/images/Shape.svg';
import Product from '../assets/images/product design icon.svg';
export default function SkillCard() {
  const [click, setClick] = React.useState(false);
  function handleTouch(id) {
   setClick(prev => !prev);
  }
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Mobile Developer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Product />
          <Text style={styles.name}>Product Designer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Software Engineer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 35,
        }}>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Project Manager</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Back-End Developer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
        <View style={styles.card} onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Front-End Developer</Text>
          <View style={click && styles.clicked}>
            <Mark />
          </View>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 35}}>
        <View
          style={{marginRight: 10, ...styles.card}}
          onTouchStart={handleTouch}>
          <Mobile />
          <Text style={styles.name}>Graphics Designer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </View>
        <Pressable
          style={{marginLeft: 10, ...styles.card}}
          onPress={() => handleTouch()}>
          <Mobile />
          <Text style={styles.name}>Fullstack Developer</Text>
          <View style={click ? styles.clicked : null}>
            <Mark />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily:'GTWalsheimPro-Regular',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 17,
    textAlign: 'center',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },

});
