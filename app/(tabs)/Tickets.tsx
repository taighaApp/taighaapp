import { View, Text, TouchableOpacity, Pressable, Image, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Platform, Keyboard, FlatList, Alert } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { FAB, Searchbar } from 'react-native-paper';
import CustomBottomSheet from '@/components/common/CustomBottomSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, Swipeable } from 'react-native-gesture-handler';
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import Accordion from '@/components/common/Accordion/CustomAccordion';
import Index from '../Admin/tickets/Index';
import TicketDetails from '../Admin/tickets/TicketDetails';
const {width,height: windowHeight} = Dimensions.get('window');


interface FlatListProps {
  id: number;
  name: string;
  time: string;
  heading: string;
  ticketId: string;
  content: string;
  profileImage: any;
  threadCount: number;
  replyImage: any;
  profileRead: boolean;
  readContent: boolean;
}

const Tickets:React.FC<FlatListProps> = ({route}:any)=> {
    const [isVisible, setIsVisible] = useState(false);
    const [openHouseoption, setOpenHouseoption] = useState('Batch action');
    const [checked, setChecked] = useState(false);
    const [profileRead, setProfileRead] = useState(true);
    const [readContent, setReadContent] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    
  const batchAction = [
    {id:1,batchActionValue:'Favorite'},
    {id:2,batchActionValue:'Request Tour'},
    {id:3,batchActionValue:'Ask a Question'},
    {id:4,batchActionValue:'Start Offer'},
  ] 
  
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    console.log('Bottom sheet opened');
    setIsVisible(!isVisible);
  }, []);
  
  const handleDismiss = useCallback(() => {
    bottomSheetModalRef.current?.close();
    console.log('Dismiss button pressed');
  }, []);
  
   const onChange= () => setChecked(!checked);
  
  
  const onChangeSearch = (text: React.SetStateAction<string>)=>{
    setSearchQuery(text);
  }

  
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.bottomSheetContent}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <Text>test</Text>
      
        <CustomBottomSheet snapPoints={['80%', '100%','150%']} initialIndex={0}>
          <View style={{marginHorizontal:20, minHeight: windowHeight + 500}}>
            <View style={{}}>
              <TextInput
                style={styles.bottomSheetSearchInput}
                placeholder="Ticket Search"
                value={searchQuery}
                onChangeText={onChangeSearch}
                autoFocus
                placeholderTextColor="#999"
              />
              <TouchableOpacity 
                onPress={() => setSearchQuery('')}
                style={styles.searchIcon}
              >
                <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
              </TouchableOpacity>
            </View>

            {/* ticket List */}
          <Index props={handlePresentModalPress}/>
          {/* ************************************************* */}
        </View>
        </CustomBottomSheet> 

        {/* datails component */}
        <CustomBottomsheetModel
          snapPoints={['80%', '100%','150%']} 
          initialIndex={0}
          bottomSheetRef={bottomSheetModalRef}
          showHandleIndicator={false}
        >
            <TicketDetails/>
            {/* <Text>jscbhsaj</Text> */}
        </CustomBottomsheetModel>

         {/* fixed create button */}
         <FAB
          style={styles.fab}
          onPress={() => console.log('Pressed')}
          icon={() => (
            <Image style={{width:17,height:17, margin:'auto'}}
              source={require('../../assets/images/admin/images/tickets/gradiant-plus.png')} // Replace with your image
            />
          )}
        /> 
        </KeyboardAvoidingView> 
      
    );
  }
  const styles = StyleSheet.create({
    gradientContainer:{
        flex: 1,
    },
    bottomSheetContent: {
      flex: 1,
      backgroundColor:'#3366CC',
    },
    container:{
      flex:1,
      borderWidth:1,
    },
    checkboxWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth:1,
        backgroundColor:'#ffff',
        height:30,
        paddingHorizontal:7,
        borderRadius:3,
        borderColor:'#EAEAEA',
        // paddingVertical: 8,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 2,
    },
    checkbox:{
        width: 20,
        height: 20,
        marginRight: 8,
        borderRadius:5,
        borderColor:'#AFAFAF',
        borderWidth:0.5,
      },
      dropdownButton: {
        width:'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
      },
      buttonText: {
        fontSize: 16,
        color: '#333',
      },
      fab: {
        position: 'absolute',
        right: 20,
        bottom: 15,
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        width:45,
        height:45,
      },
      searchbar: {
        borderRadius: 8,
        height: 40,
        margin: 6,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EAEAEA',
      },
      searchbarInput: {
        fontSize: 14,
        textAlign: 'center', 
      },
      bottomSheetSearchInput: {
        height: 40,
        backgroundColor: '#F9F9F9',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingLeft: 40,
        fontSize: 16,
      },
      searchIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
      },
      searchResults: {
        flex: 1,
      },
      searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
      },
      bottomSheetSearchContainer: {
        position: 'relative',
        marginBottom: 16,
      },
 
  })
  export default Tickets;


// propertyListView card;

      //   <ScrollView style={{flex:1,paddingHorizontal:20,}}>
    //   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
    //    <View style={[styles.checkboxWrapper,{marginBottom:0 }]}>
    //       <Pressable
    //         role="checkbox"
    //         aria-checked={checked}
    //         style={styles.checkbox}
    //         onPress={onChange}>
    //         {checked && <Image style={{width:20,height:20}} source={require('../../assets/images/homesearch/icon/checked-box.png')}/>}
    //       </Pressable>
    //       <Text>Selected</Text>
    //    </View>
       
    //       <View style={{marginBottom:10,}}>
    //         <Pressable style={styles.dropdownButton} onPress={ handlePresentModalPress }>
    //           <Text style={styles.buttonText}>{openHouseoption}</Text>
    //           <AntDesign name="down" size={17} color="black" />
    //       </Pressable>
    //       {/* Half-Screen Modal */}

    //     <CustomBottomsheetModel 
    //     bottomSheetRef={bottomSheetModalRef}
    //     snapPoints={['10%', '37%']}
    //     showHandleIndicator={false}
    //     >
    //       <View style={{}}>
    //         <View style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',paddingVertical:15,}}>
    //             <Text style={{color:'#fff',fontSize:16,}}>Batch Actions</Text>
    //         </View>
    //         <View>
    //             {batchAction.map((item)=>(
    //               <View key={item.id} style={{borderBottomWidth:1,borderColor:'#ECECEC'}}>
    //                 <Text style={{color:'#AEAEAE',padding:15,fontSize:16}}>{item.batchActionValue}</Text>
    //               </View>
    //             ))}
    //         </View>
    //           <View style={{flexDirection:'row',alignItems:'center',height:60}}>
    //            <TouchableOpacity style={{width:'50%'}} onPress={handleDismiss}>
    //             <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Cancel</Text>
    //             </TouchableOpacity>
    //             <View style={{borderWidth:1,height:20,borderColor:'#ECECEC'}}/>
    //            <TouchableOpacity style={{borderRightWidth:1,width:'50%'}} onPress={handleDismiss}>
    //             <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Ok</Text>
    //             </TouchableOpacity>
    //           </View>
    //   </View>
    //   </CustomBottomsheetModel>
    //    </View>
    //   </View>
    //   <PropertyListView route={route}/>
    //   {/* <PropertiesDetails/> */}
    // </ScrollView>