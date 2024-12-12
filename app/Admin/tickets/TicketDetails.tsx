import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Children, useRef, useState } from 'react'
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomAccordionArrow from '@/components/common/Accordion/CustomAccordionArrow';
import CustomAccordion from '@/components/common/Accordion/CustomAccordion';

const {width,height} = Dimensions.get('window');

const TicketDetails: React.FC = ({ props }:any) => {
    console.log(props);
    
    const [isExpanded, setIsExpanded] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [favoritesCount, setFavoritesCount] = useState(0);

  const content = "A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following ";
  
  const ticketDetails = [
    {
        id:1,
        type:"Customer",
        created:"Alejandra Granadino Nov 04 2024 at 11:04 AM",
        activity:"Loga Prasath 11/11/2024 10:17 AM",
        lastEmail:"Loga Prasath 11/11/2024 10:17 AM",
        property:"9957 SW Scott Ct, Portland, OR 97223, USA",
        priority:"High",
        group:"Work Order",
        staff:"Marisol Miranda",
        status:"Open",
        cC:"Krishna@gm.in",
        access:"Krishna@gm.in",
    },
    {
        id:2,
        type:"Customer",
        created:"Alejandra Granadino Nov 04 2024 at 11:04 AM",
        activity:"Loga Prasath 11/11/2024 10:17 AM",
        lastEmail:"Loga Prasath 11/11/2024 10:17 AM",
        property:"9957 SW Scott Ct, Portland, OR 97223, USA",
        priority:"High",
        group:"Work Order",
        staff:"Marisol Miranda",
        status:"Open",
        cC:"Krishna@gm.in",
        access:"Krishna@gm.in",
    },
]

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFavClick = ()=>{
    setFavorites((prevFavorites) => !prevFavorites);
    setFavoritesCount((prevCount) => prevCount + 1);
  }
  return (
    <View style={{flex:1,}}>
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
    <CustomAccordion title={'Tickets Details'} >
    <View>
            {ticketDetails.map((details)=>(
                <View key={details.id} style={{flexDirection:'row'}}>
                    <View style={styles.detailsHeadingsWrapper}>
                        <Text style={styles.detailsHeading}>Type</Text>
                        <Text style={styles.detailsHeading}>Created</Text>
                        <Text style={styles.detailsHeading}>Activity</Text>
                        <Text style={styles.detailsHeading}>Last Email</Text>
                        <Text style={styles.detailsHeading}>Property</Text>
                        <Text style={styles.detailsHeading}>Priority</Text>
                        <Text style={styles.detailsHeading}>Group</Text>
                        <Text style={styles.detailsHeading}>Staff</Text>
                        <Text style={styles.detailsHeading}>Status</Text>
                        <Text style={styles.detailsHeading}>CC</Text>
                        <Text style={styles.detailsHeading}>Access</Text>
                    </View>
                    <View style={styles.detailsValuesWrapper}>
                        <Text style={styles.detailsValues}>{details.type}</Text>
                        <Text style={styles.detailsValues}>{details.created}</Text>
                        <Text style={styles.detailsValues}>{details.activity}</Text>
                        <Text style={styles.detailsValues}>{details.lastEmail}</Text>
                        <Text style={styles.detailsValues}>{details.property}</Text>
                        <Text style={styles.detailsValues}>{details.priority}</Text>
                        <Text style={styles.detailsValues}>{details.group}</Text>
                        <Text style={styles.detailsValues}>{details.staff}</Text>
                        <Text style={styles.detailsValues}>{details.status}</Text>
                        <Text style={styles.detailsValues}>{details.cC}</Text>
                        <Text style={styles.detailsValues}>{details.access}</Text>
                    </View>
                </View>
                    ))}
        </View>
    </CustomAccordion>
    <TouchableOpacity onPress={props}>
    <CustomAccordionArrow title={'Activity History'} children={undefined}/>
    </TouchableOpacity>
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
  },
  detailsHeadingsWrapper:{

  },
  detailsHeading:{
      fontSize:17,
      fontFamily:'rubikRegular',
      letterSpacing:0.2,
      marginVertical:10,
  },
  detailsValuesWrapper:{},
      detailsValues:{
      fontSize:17,
      fontFamily:'rubikLight',
      letterSpacing:0.2,
      marginVertical:10,

  }
});
export default TicketDetails;