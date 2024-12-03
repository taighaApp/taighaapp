import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HomeAccessories = () => {
  return (
    <View style={styles.infoContainer}>
        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../assets/images/homesearch/icon/bed-single-hotel.png')}/>
            <Text style={styles.infoCounts}>5</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../assets/images/homesearch/icon/bath.png')}/>
            <Text style={styles.infoCounts}>5</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../assets/images/homesearch/icon/square-measument.png')}/>
            <Text style={styles.infoCounts}>6887</Text>
        </View>

        <View style={styles.info}>
            <Image style={styles.infoImage} source={require('../../assets/images/homesearch/icon/time-clock-date-time-icon.png')}/>
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
        justifyContent:'space-between',
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
        padding:5,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#DBDBDB',
      },
      infoImage:{
        width:12,
        height:12,
        objectFit:'contain'
      },
      infoCounts:{
        paddingLeft:3,
        color:'#8C8C8C',
        fontSize:12,
        fontWeight:'regular'
      },
})

export default HomeAccessories;