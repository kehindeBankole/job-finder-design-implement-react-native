import React from 'react'
import { StyleSheet, Text, View , Dimensions} from 'react-native'

export default function CustomModal(props) {
    return (
        <React.Fragment>
        {/* <View style={ {...styles.container } } onTouchStart={()=>console.log(Dimensions.get('window').height)}>
         
        </View> */}
        <View style={{...styles.contentBox }}>
        <Text style={styles.companytitle}>
{props.company}
</Text>
<Text style={styles.title}>
{props.title}
</Text>
</View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        // height:Dimensions.get('window').height,
        // width:Dimensions.get('window').width,
        // backgroundColor:'rgba(0, 0, 0, 0.5)',
        // position:'absolute',
        // // top:0,
        // zIndex:1,
        // padding:0,
        // margin:0,
    },
    contentBox:{
        height:Dimensions.get('window').height - 200,
        width:Dimensions.get('window').width,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        zIndex:99,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
      alignItems:'center',
    },
    title:{
     fontSize:24,
     fontFamily:"GTWalsheimPro-Bold",
     marginTop:9
    },
    companytitle:{
        fontSize:12,
        fontFamily:"GTWalsheimPro-Bold",
        marginTop:42,
        color:"#5A5F69"
       }
})
