import { View, Text, LayoutAnimation, StyleSheet, TouchableOpacity, Image ,Dimensions} from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';


const {width,height} = Dimensions.get('window');

const Header = () => {
    const scrollRef = useRef<ScrollView>(null);

    const handleIndexChange = (index: number) => {
        console.log("BottomSheet Index Changed:", index);
    };

  return (
    <View style={{marginTop:50}}>
        {/* <View style={{borderWidth:1,height:40,}}>
            <Text>Header</Text>
        </View> */}
        <View style={styles.searchContainer}>
           <View style={styles.search}>
           <Image style={styles.searchImage} source={require('../../../assets/images/admin/images/Tasks/search_icon.png')}/>
           </View>
           <View>
            <Text style={styles.ticket}>Documents (10)</Text>
            </View>
           <View style={styles.ticketFilter}>
            <Image style={styles.filterImage} source={require('../../../assets/images/admin/images/Tasks/filter_icon.png')}/>
           </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:34,
        marginRight:10,
        paddingHorizontal:15
      },
      searchContainer:{
        height:40,
        flexDirection:'row',
        alignItems:'center',width:width-40,margin:'auto',justifyContent:'space-between'
      },
      search:{
        width:40,height:40,borderWidth:1,borderRadius:8,borderColor:'#rgba(234,234,234,0.3)',alignItems:'center',justifyContent:'center'
      },
      searchImage:{
        width:22,height:22
      },
      ticket:{
        color:'#FFFFFF',fontSize:20,fontFamily:'rubikLight',
      },
      ticketFilter:{
        width:40,height:40,alignItems:'center',justifyContent:'center',backgroundColor:'#2E5CB8',borderRadius:8,
      },
      filterImage:{
        width:22,height:22,objectFit:'contain'
      },
})

export default Header;