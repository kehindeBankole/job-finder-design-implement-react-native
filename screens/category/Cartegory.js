import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import SkillCard from '../../components/SkillCard';

export default function Cartegory() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>choose your skills</Text>
      <Text style={styles.pageSubTitle}>We will show you relevant gigs associated with your skill set.</Text>
      <View style={{marginTop:30}}>  
     <SkillCard/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  pageTitle: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 28,
    color: '#2E3137',
  },
  pageSubTitle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 17,
    color: '#7E838B',
    lineHeight:18,
    marginTop:40
}
  
});
