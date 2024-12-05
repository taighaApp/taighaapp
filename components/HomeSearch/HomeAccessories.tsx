import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomeAccessories = () => {
  const propertyDetails = [
    { type: 'bedrooms', count: 5, icon: require('../../assets/images/homesearch/icon/bed-single-hotel.png') },
    { type: 'bathrooms', count: 5, icon: require('../../assets/images/homesearch/icon/bath.png') },
    { type: 'area', count: 6887, icon: require('../../assets/images/homesearch/icon/square-measument.png') },
    { type: 'time', count: '88D', icon: require('../../assets/images/homesearch/icon/time-clock-date-time-icon.png') },
//  <Image style={{width:50,height:20,objectFit:'cover'}} source={require('../../assets/images/homesearch/icon/rmls-logo.png')}/> 
  ];
  const logo = require('../../assets/images/homesearch/icon/rmls-logo.png');
  return (
  
     <View style={styles.infoContainer}>
      {/* <View style={styles.info}> */}
    {propertyDetails.map((detail: { type: any; icon: ImageSourcePropType | undefined; count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
      <Link href={`/Propertiesdetails?type=${detail.type}`}  key={index} style={styles.info}>
        <Image style={styles.infoImage} source={detail.icon} />
        <Text style={styles.infoCounts}>{detail.count}</Text>
      </Link>
    ))}
         {/* Display the logo separately */}
         <Image style={styles.logo} source={logo} />
    </View>
  )
}

const  styles = StyleSheet.create({
    infoContainer:{
        // display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // borderWidth:1,
        // marginRight:15,
        // width:'100%',
      },
      info:{
        // borderWidth:1,
        borderColor:'#DBDBDB',
        paddingHorizontal:10,
        paddingVertical:5,
        // height:25,
        // minWidth:40,
        borderRadius:50,
        marginRight:15,
        alignItems:'center',
        justifyContent:'center',
        },
      infoImage:{
        width:14,
        height:16,
        objectFit:'contain',
        // borderWidth:1,
      },
      infoCounts:{
        paddingLeft:3,
        color:'#8C8C8C',
        fontSize:12,
        fontWeight:'regular',
        // padding:5,
      },
      logo: {
        width: 48,
        height: 18,
        resizeMode: 'cover', // Adjust to fit the logo properly
        marginLeft: 10,
      },
})

export default HomeAccessories;