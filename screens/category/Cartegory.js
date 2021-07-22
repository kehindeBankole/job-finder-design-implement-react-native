/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable ,  StyleSheet, Text, View , Dimensions} from 'react-native';
import SkillCard from '../../components/SkillCard';
//import { useHistory } from "react-router-dom";



export default function Cartegory({history}) {

 // let history = useHistory();

  function handleClick() {
  //  history.push("/home");
  console.log(23)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>choose your skills</Text>
      <Text style={styles.pageSubTitle}>We will show you relevant gigs associated with your skill set.</Text>
      <View style={{marginTop:30}}>  
     <SkillCard/>
      </View>
      <Pressable style={styles.nextButton} onPress={()=>history.push('/home')}>
        <Text style={styles.nextButtonText}>next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    position:'relative',
    height:Dimensions.get('window').height-60
  },
  pageTitle: {
   fontWeight: '700',
    textAlign: 'center',
    fontSize: 28,
    color: '#2E3137',
    fontFamily:'GTWalsheimPro-CondensedBold'
  },
  pageSubTitle: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 17,
    color: '#7E838B',
    lineHeight:28,
    marginTop:30,
    fontFamily:'GTWalsheimPro-Regular'
},
nextButton:{
  backgroundColor:'#9969D3',
  width:"100%",
  height:50,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:15,
  position:"absolute",
bottom:0,
left:16
},
nextButtonText:{
  color:"#FFFFFF",
  fontWeight:'500',
  fontFamily:'Inter-Medium',
  fontSize:16,
  textTransform:'capitalize'
}
  
});
