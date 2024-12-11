import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const {width,height} = Dimensions.get('window');

export default function TicketDatails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const content = "A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following ";
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFavClick = ()=>{
    setFavorites((prevFavorites) => !prevFavorites);
    setFavoritesCount((prevCount) => prevCount + 1);
  }
  return (
    <View style={{width:width,marginVertical:20,}}>
        <View style={styles.headerContainer}>

    <TouchableOpacity style={{width:'93%',flexDirection:'row'}} onPress={ handleFavClick }>
          <Text style={styles.headerText}>
            C24056 : Customer : 9957 SW Scott Ct, Portland, OR - Work Order - Home Winterizing and water bill{" "}{favoritesCount}
          </Text>
          
          {favorites? 
          <Image style={styles.headerIcon} source={require('../../../assets/images/admin/images/tickets/favorites-1.png')}/>
            
          :
          <Image style={styles.headerIcon} source={require('../../../assets/images/admin/images/tickets/favorites.png')}/>
          }
          </TouchableOpacity>
          
        </View>
        <View style={{borderWidth:1,marginTop:22,borderColor:'#ECECEC'}}/>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text
              style={styles.descriptionText}
              numberOfLines={isExpanded ? undefined : 3}
              ellipsizeMode="tail" 
            >
              {isExpanded ? (
              <>
                {content}
                <Text style={styles.readMore} onPress={toggleReadMore}>
                  Read Less
                </Text>
              </>
            ) : (
              <>
                {content.slice(0, 115)}
                <Text style={styles.readMore} onPress={toggleReadMore}>
                Read More...
                </Text>
              </>
            )}
            </Text>
         
          </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: width-40,
    borderColor: '#ECECEC',
    margin:'auto',
  },
  headerText: {
    marginRight:5,
    fontFamily: 'rubikMedium',
    fontSize: 17,
  },
  headerIcon: {
    width: 21,
    height: 21,
    objectFit:'contain',
  },
  readMore:{
    marginTop: 8,
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  descriptionContainer: {
    marginVertical: 22,
  },
  descriptionText: {
    fontFamily: 'rubikLight',
    fontSize: 17,
    lineHeight: 25,
    letterSpacing:0.2,
    color: '#333',
    marginTop:5,
  },
  descriptionTitle: {
    fontFamily: 'interMedium',
    fontSize: 17,
    letterSpacing:0.2,
  }
})