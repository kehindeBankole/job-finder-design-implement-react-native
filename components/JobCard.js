import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';

export default function JobCard(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={(img)=>props.handleClick(img)}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          style={styles.tinyLogo}
          source={props.img}
        />
        <View style={{marginLeft: 20, alignSelf: 'center'}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.company}>{props.company}</Text>
        </View>
      </View>
      <Text style={styles.time}>3s ago</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#2E3137',
    fontFamily: 'GTWalsheimPro-Bold',
  },
  company: {
    fontSize: 12,
    color: '#5A5F69',
    fontFamily: 'GTWalsheimPro-Light',
    marginTop: 6,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#9EA1A5',
    fontFamily: 'GTWalsheimPro-Light',
  },
});
