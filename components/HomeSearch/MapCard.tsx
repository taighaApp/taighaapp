import { View, Image, StyleSheet, Text, FlatList, Dimensions, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import HomeAccessories from './HomeAccessories';

const { width } = Dimensions.get('window'); // Get the device's screen width

const PropertyListView = ({listData, route}:any) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChecked, setChecked] =  useState(false);
  const [isActive, setActive] =  useState(true);
  const toggleCheckbox = () => setChecked(!isChecked);
  
  const data = [
    { id: '1', image: require('../../assets/images/dummyCardImage.png') },
  ];

  const onScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

const active = ()=>{
  setActive(false)
}

  return (
      <View>
        {listData.map((item:any)=>(   
                                 
    <View style={styles.propertyListContainer} key={item.id}>
        <View style={{ flex: 1,width:120,height:120,}}>
            <Image source={item.images[0]} style={styles.propertyImage} />
        </View>

      <View style={{flex:2, flexDirection:'column',justifyContent:'space-between',marginLeft:15,marginBottom:5}}>

        <View>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View>
                  <Text style={styles.propertyValue}>{item.propertyPrice}</Text>
              </View>

              <View style={styles.mapMediaContainer}>
                <Pressable style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/homesearch/icon/chat-bubble--com.png')}/>
                </Pressable>
                <Pressable style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/homesearch/icon/favorite.png')}/>
                </Pressable>
                <Pressable style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/homesearch/icon/share-icon.png')}/>
                </Pressable>
           
              </View>
           </View>

            <View style={styles.addressContainer}>
              <Text style={styles.propertyAddress}>{item.propertyStreet}</Text>
              <Text style={styles.propertyAddress}>{item.propertyAddress}</Text>
            </View>
        </View>

      {/* Home Accessories Component */}
       <HomeAccessories route ={route}/>

      </View>
    </View>
        ))}
  </View>
  )
}

const styles =StyleSheet.create({
    propertyListContainer:{
      // flex:1,
      flexDirection:'row',
      height:140,
      width:'auto',
      marginHorizontal:20,
      padding:10,
      borderRadius:8,
      // borderWidth:1,
      marginBottom:10,
      backgroundColor: '#ffffff',
      // Shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, // Even shadow on all sides
      shadowOpacity: 0.2,
      shadowRadius: 5, // Adjust blur radius
      // Shadow for Android
      elevation: 5, // Adjust elevation
    },
    propertyImage:{
        width: '100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:8,
        // borderWidth:1,
    },
    mapMediaContainer:{
      display:'flex',
      flexDirection:'row',
      gap:6,
      // borderWidth:1
    },
    mapMediaWrapper:{
      width:25,
      height:25,
      borderRadius:50,
      backgroundColor:'#E9E9E9',
      alignItems:'center',
      justifyContent:'center'
    },
    addressContainer:{
      marginTop:5,
      // borderWidth:1
    },
    propertyAddress:{
      fontSize:12,
      color:'#6A6A6A',
      textTransform:'uppercase',
    },
    propertyValue:{
      color:'#000000',
      fontWeight:'bold',
      fontSize:16,
    },
    mapMedia:{
      width:15,
      height:15
    },
    slide: {
      width:120,
      height:120,
      alignItems:'center',
      justifyContent:'center',
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      margin: 5,
    },
    activeDot: {
      backgroundColor: '#FFFFFF',
    },
    inactiveDot: {
      backgroundColor: '#D9D9D9',
    },
    checkboxWrapper:{
      width:120,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      position: 'absolute',
      paddingHorizontal:5,
      paddingVertical:5,
      zIndex: 9,
      pointerEvents: 'box-none',
  },
  checkbox:{
    width: 15,
    height: 15,
    borderRadius:3,
    borderColor:'rgba(233,233,233,0.7)',
    backgroundColor:'rgba(233,233,233,0.7)',
  },
  activeButton:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(51,102,204,0.7)',
    borderRadius:3,
  },
  activeText:{
   color:'#FFFF',
   padding:3,
   fontSize:8,
   fontWeight:'bold',
  }
})
export default PropertyListView;