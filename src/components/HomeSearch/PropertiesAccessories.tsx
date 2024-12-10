import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HomeAccessories = () => {
  return (
    <View style={styles.infoContainer}>
        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../../assets/images/PropertiesImage/bed-block.png')}/>
            <Text style={styles.infoCounts}>5bd</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../../assets/images/PropertiesImage/bath-block.png')}/>
            <Text style={styles.infoCounts}>5ba</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../../assets/images/PropertiesImage/squaremeasure-block.png')}/>
            <Text style={styles.infoCounts}>6887Sqft</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../../assets/images/PropertiesImage/timeclock-block.png')}/>
            <Text style={styles.infoCounts}>88D</Text>
        </View>

        {/* <Image style={{width:50,height:20,objectFit:'cover'}} source={require('../../assets/images/homesearch/icon/rmls-logo.png')}/> */}
    </View> 
  )
}

const  styles = StyleSheet.create({
    infoContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        // borderWidth:1,
        marginRight:5,
      },
      info:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        minWidth:35,
        height:'auto',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#DBDBDB',
        marginRight:10,
      },
      infoImage:{
        width:15,
        height:15,
        objectFit:'contain',
        color:'#020202',
      },
      infoCounts:{
        paddingLeft:3,
        color:'#020202',
        fontSize:15,
        fontWeight:'semibold',
        // fontFamily:'interRegular',
      },
})

export default HomeAccessories;