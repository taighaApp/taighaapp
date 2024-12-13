import { View, Text, LayoutAnimation, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const Header = () => {
    const scrollRef = useRef<ScrollView>(null);

    const handleIndexChange = (index: number) => {
        console.log("BottomSheet Index Changed:", index);
    };

    const handleFilterClick = (id:any) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); 
        setFilterChose(id);
    }

    const scrollToLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: 0, animated: true }); // Scroll to the leftmost position
        }
    };
  
    // don't remove the below state
    const FilterData=[
        {
          id:1,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/up-arrow-com.png'),
        },
        {
          id:2,
          FilterName:"Sort By Email",
          filterImage: require('../../../assets/images/admin/images/tickets/mail.png'),
        },
        {
          id:3,
          FilterName:"Closed",
          filterImage: require('../../../assets/images/admin/images/tickets/lock.png'),
        },
        {
          id:4,
          FilterName:"Sort By Activity",
          filterImage: require('../../../assets/images/admin/images/tickets/clock-activity--com-2.png'),
        },
        {
          id:5,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
        },
        {
          id:6,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
        },
        {
          id:7,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
        },
        {
          id:7,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
        },
        {
          id:8,
          FilterName:"Showstopper",
          filterImage: require('../../../assets/images/admin/images/tickets/email-reply.png'),
        },
      ]
    
    const [filterChose, setFilterChose] = useState(FilterData[0].id);

  return (
    <View style={{marginTop:40}}>
        <View style={{borderWidth:1,height:40,}}>
            <Text>Header</Text>
        </View>
        {/* ticket filter */}
        <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
          style={{ marginTop: 25, height: 35, }}
          ref={scrollRef}
          contentOffset={{ x: 0, y: 0 }} 
          >
            {FilterData.map((item)=>(
              <TouchableOpacity style={[styles.filterContainer,{backgroundColor:filterChose === item.id ? '#fff': '#rgba(255,255,255,0.4)'},{marginLeft:item.id === 1 ? 20:0}]} onPress={ ()=> handleFilterClick(item.id) }>
                <Image style={{width:17,height:17,objectFit:'contain',tintColor: filterChose === item.id ? '#3366cc':'#fff'}} source={item.filterImage}/>
                <Text
                  style={[{paddingLeft:5,color:filterChose === item.id ?'#3366cc':'#fff',}]}
                >
                  {item.FilterName}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
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
})

export default Header;