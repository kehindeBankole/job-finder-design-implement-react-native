import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Filter from '../../assets/images/filter.svg'
export default function Home() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Latest Gigs</Text>
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity>
          <View style={styles.button}>
          <Filter/>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    position: 'relative',
    height: Dimensions.get('window').height - 30,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  pageTitle: {
    //fontWeight: '500',
    fontSize: 28,
    color: '#2E3137',
    fontFamily: 'GTWalsheimPro-Bold',
  },
  filter: {
    display: 'flex',
    flexDirection:'row',
    marginTop:20,
justifyContent:"space-between"
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'GTWalsheimPro-Bold',
    borderRadius: 11,
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
    paddingHorizontal: 10,
    paddingVertical: 11,
    width:'85%'
  },
  button:{
      width:40,
      height:40,
      backgroundColor:"#9969D3",
      borderRadius:11,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
  }
});
