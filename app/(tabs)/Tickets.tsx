import { View, Text, ScrollView, TouchableOpacity, Pressable, Image, StyleSheet } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import PropertyListView from '@/components/common/PropertyListView';
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import { AntDesign } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';

function TicketsScreen({route}:any) {
    const [isVisible, setIsVisible] = useState(false);
    const [openHouseoption, setOpenHouseoption] = useState('Batch action');
    const [checked, setChecked] = useState(false);
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
  
    return (
        <LinearGradient
        colors={['#854BD0CC', '#3366cc',]}
        start={{ x: -0.2, y: 0.5 }}
        end={{ x: 2, y: 0.5 }}
        style={styles.gradientContainer}
      >
     <Text>dsfm sdf,</Text>
</LinearGradient>
  // <ScrollView style={{flex:1,paddingHorizontal:20,}}>
  //       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
  //        <View style={[styles.checkboxWrapper,{marginBottom:0 }]}>
  //           <Pressable
  //             role="checkbox"
  //             aria-checked={checked}
  //             style={styles.checkbox}
  //             onPress={onChange}>
  //             {checked && <Image style={{width:20,height:20}} source={require('../../assets/images/homesearch/icon/checked-box.png')}/>}
  //           </Pressable>
  //           <Text>Selected</Text>
  //        </View>
         
  //           <View style={{marginBottom:10,}}>
  //             <Pressable style={styles.dropdownButton} onPress={ handlePresentModalPress }>
  //               <Text style={styles.buttonText}>{openHouseoption}</Text>
  //               <AntDesign name="down" size={17} color="black" />
  //           </Pressable>
  //           {/* Half-Screen Modal */}
  
  //         <CustomBottomsheetModel 
  //         bottomSheetRef={bottomSheetModalRef}
  //         snapPoints={['10%', '37%']}
  //         showHandleIndicator={false}
  //         >
  //           <View style={{}}>
  //             <View style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',paddingVertical:15,}}>
  //                 <Text style={{color:'#fff',fontSize:16,}}>Batch Actions</Text>
  //             </View>
  //             <View>
  //                 {batchAction.map((item)=>(
  //                   <View key={item.id} style={{borderBottomWidth:1,borderColor:'#ECECEC'}}>
  //                     <Text style={{color:'#AEAEAE',padding:15,fontSize:16}}>{item.batchActionValue}</Text>
  //                   </View>
  //                 ))}
  //             </View>
  //               <View style={{flexDirection:'row',alignItems:'center',height:60}}>
  //                <TouchableOpacity style={{width:'50%'}} onPress={handleDismiss}>
  //                 <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Cancel</Text>
  //                 </TouchableOpacity>
  //                 <View style={{borderWidth:1,height:20,borderColor:'#ECECEC'}}/>
  //                <TouchableOpacity style={{borderRightWidth:1,width:'50%'}} onPress={handleDismiss}>
  //                 <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Ok</Text>
  //                 </TouchableOpacity>
  //               </View>
  //       </View>
  //       </CustomBottomsheetModel>
  //        </View>
  //       </View>
  //       <PropertyListView route={route}/>
  //       {/* <PropertiesDetails/> */}
  //     </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    gradientContainer:{
        flex: 1, // Ensures it takes the whole page
        // justifyContent: 'center',
        // alignItems: 'center',
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
  })
  export default TicketsScreen;