import { View, Image, StyleSheet, Text, FlatList, Dimensions, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import Checkbox from 'expo-checkbox';
import Buttons from './Buttons';
import HomeAccessories from '../HomeSearch/HomeAccessories';

const { width } = Dimensions.get('window'); // Get the device's screen width

const PropertyListView = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChecked, setChecked] =  useState(false);
  const [isActive, setActive] =  useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);
  
  const data = [
    { id: '1', image: require('../../assets/images/dummyCardImage.png') },
    { id: '2', image: require('../../assets/images/google.png') },
    { id: '3', image: require('../../assets/images/facebook.png') },
  ];

  const onScroll = (event: { nativeEvent: { contentOffset: { x: number; }; }; }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

const active = ()=>{
  setActive(false)
}
  return (
    <View style={styles.propertyListContainer}>
        <View style={{ flex: 1 }}>

          <View style={styles.checkboxWrapper}>
            <Pressable onPress={toggleCheckbox}>
              <Checkbox 
                style={styles.checkbox}
                value={isChecked} 
                color={isChecked ? '#3366cc' : ''}
                onValueChange={setChecked} />
            </Pressable>

                {isActive ?
                <Pressable style={styles.activeButton} onPress={active}>
                  <Text style={styles.activeText}>Active</Text>
              </Pressable>
            :''}
          </View>
         
          <Carousel
            loop
            width={120}
            height={120}
            autoPlay={false}
            data={data}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
                <View>
                  <Image source={item.image} style={styles.propertyImage} />
                </View>
            )}
          />

              {/* Pagination Dots */}
              <View style={styles.pagination}>
                {data.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      activeIndex === index ? styles.activeDot : styles.inactiveDot,
                    ]}
                  />
                ))}
              </View>
        </View>

      {/* <Image source={require('../../assets/images/dummyCardImage.png')} /> */}

      <View style={{flex:2, flexDirection:'column',justifyContent:'space-between',marginLeft:15,marginBottom:5}}>

        <View>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View>
                  <Text style={styles.propertyValue}>$6,000,000</Text>
              </View>

              <View style={styles.mapMediaContainer}>
                {/* <View style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/chat-bubble--com.png')}/>
                </View> */}

                <View style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/homesearch/icon/favorite.png')}/>
                </View>

                {/* <View style={styles.mapMediaWrapper}>
                    <Image style={styles.mapMedia} source={require('../../assets/images/icon-share.png')}/>
                </View> */}
                
              </View>
           </View>

            <View style={styles.addressContainer}>
              <Text style={styles.propertyAddress}> 6220 NW SKYLINE BLVD</Text>
              <Text style={styles.propertyAddress}>Portland, OR 97229</Text>
            </View>
        </View>

      {/* Home Accessories Component */}
       <HomeAccessories/>

      </View>
      
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
        width: 120,
        height:120,
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
      width:12,
      height:12
    },
    slide: {
      width:120,
      height:120,
      alignItems:'center',
      justifyContent:'center',
      // borderWidth: 1,
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