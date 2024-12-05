import React, { useCallback, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropertyListView from '@/components/common/PropertyListView';
import HomeSearchMap from '@/components/HomeSearch/HomeSearchMap';
import PropertiesDetails from '@/components/HomeSearch/PropertiesDetails';
import HomeSearch from '@/components/HomeSearch/HomeSearch';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomsheetModel from '@/components/common/CustomBottomsheetModel';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
import DashboardScreen from '../Admin/Dashboard';
import { StatusBar } from 'expo-status-bar';

function SearchScreen() {
  return (
    <View style={styles.screenContainer}>
      <HomeSearchMap
        isActive={''}
        street={''}
        address={''}
        price={0}
        showCheckbox={false} images={''}      
          />
    </View>
  );
}
function FavoritesScreen() {
  const [checked, setChecked] = useState('option1'); // Default selected value
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePress =()=>{
    bottomSheetModalRef.current?.present();
  }
  return (
    <View style={styles.screenContainer}>
      <View>
      <Pressable onPress={handlePress}>
        <Text>Favorites</Text>
      </Pressable>
      <CustomBottomsheetModel 
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={['10%', '46%']}
        showHandleIndicator={true}
        >
          <View style={{marginHorizontal:20,}}>
            <Text style={styles.searchText}>Lock in Your Preferences: Save This Search</Text>

              <View style={{borderBottomWidth:1,paddingBottom:25,borderColor:'#ECECEC',}}>
                <Text style={styles.optionHeadings}>Name Your Search</Text>
                <TextInput 
                  style={styles.input}
                  placeholder='Name'
                />
              </View>

                <View style={styles.selectEmailContainer}>
                  <Text style={styles.optionHeadings}>Email Me</Text>

                    <View style={styles.selectEmail}>
                      <View style={{flexDirection:'row',width:'35%',backgroundColor:'#F7F7F7',padding:2.5,borderRadius:30,marginBottom:10,}}>
                          <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                            <View style={styles.radioItem}>
                              <RadioButton.Android color='#AFAFAF' value="NoEmail" />
                              <Text style={styles.radioText}>No Email</Text>
                            </View>
                          </RadioButton.Group>
                      </View>

                      <View style={{flexDirection:'row', width:'35%', borderRadius:30,padding:2.5,backgroundColor:'rgba(51,102,204,0.12)'}}>
                        <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                          <View style={styles.radioItem}>
                            <RadioButton.Android color='#3366CC' value="EmailDaily" />
                            <Text>Email Daily</Text>
                          </View>
                        </RadioButton.Group>
                      </View>

                    </View>
                  </View>
                </View>

                <View style={styles.saveFooter}>
                  <TouchableOpacity style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',height:35,width:65,borderRadius:8}}>
                    <Text style={{color:'#fff',fontFamily:'LatoBold',fontSize:14,}}>Save</Text>
                  </TouchableOpacity>
                </View>

      </CustomBottomsheetModel>
    </View>
    </View>
  );
}
function TicketsScreen() {
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
    <ScrollView style={{flex:1,paddingHorizontal:20,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
       <View style={[styles.checkboxWrapper,{marginBottom:0 }]}>
          <Pressable
            role="checkbox"
            aria-checked={checked}
            style={styles.checkbox}
            onPress={onChange}>
            {checked && <Image style={{width:20,height:20}} source={require('../../assets/images/homesearch/icon/checked-box.png')}/>}
          </Pressable>
          <Text>Selected</Text>
       </View>
       
          <View style={{marginBottom:10,}}>
            <Pressable style={styles.dropdownButton} onPress={ handlePresentModalPress }>
              <Text style={styles.buttonText}>{openHouseoption}</Text>
              <AntDesign name="down" size={17} color="black" />
          </Pressable>
          {/* Half-Screen Modal */}

        <CustomBottomsheetModel 
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={['10%', '37%']}
        showHandleIndicator={false}
        >
          <View style={{}}>
            <View style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',paddingVertical:15,}}>
                <Text style={{color:'#fff',fontSize:16,}}>Batch Actions</Text>
            </View>
            <View>
                {batchAction.map((item)=>(
                  <View key={item.id} style={{borderBottomWidth:1,borderColor:'#ECECEC'}}>
                    <Text style={{color:'#AEAEAE',padding:15,fontSize:16}}>{item.batchActionValue}</Text>
                  </View>
                ))}
            </View>
              <View style={{flexDirection:'row',alignItems:'center',height:60}}>
               <TouchableOpacity style={{width:'50%'}} onPress={handleDismiss}>
                <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Cancel</Text>
                </TouchableOpacity>
                <View style={{borderWidth:1,height:20,borderColor:'#ECECEC'}}/>
               <TouchableOpacity style={{borderRightWidth:1,width:'50%'}} onPress={handleDismiss}>
                <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Ok</Text>
                </TouchableOpacity>
              </View>
      </View>
      </CustomBottomsheetModel>
       </View>
      </View>
      <PropertyListView/>
      {/* <PropertiesDetails/> */}
    </ScrollView>
  );
}
function MoreScreen() {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex:1}}>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <HomeSearch />

      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imageSource;
            switch (route.name) {
              case 'Dashboard':
                imageSource = require('../../assets/images/homesearch/icon/dashboard.png');
                break;
                case 'Search':
                imageSource = require('../../assets/images/homesearch/icon/homesearch.png');
                break;
              case 'Favorites':
                imageSource = require('../../assets/images/homesearch/icon/favorite.png');
                break;
              case 'Tickets':
                imageSource = require('../../assets/images/homesearch/icon/tickets.png');
                break;
              case 'More':
                imageSource = require('../../assets/images/homesearch/icon/more.png');
                break;
            }
            return (
              <View style={styles.tabscontainer}>
                <Image
                source={imageSource}
                style={{
                  width: 20,
                  height: 20,
                //   borderWidth:1,
                  tintColor: '#6A6A6A',
                }}
              />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                // borderWidth:1,
                fontWeight: '800',
                // paddingTop:2,
                color: focused ? '#3366CC' : '#000000',
              }}
            >
              {route.name}
            </Text>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '800',
            color:'#000000',
          },
          tabBarActiveTintColor: '#3366CC',
          tabBarInactiveTintColor: '#3366CC',
          fontSize:15,
          tabBarStyle: {
            height: 65,
            width:'100%',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            borderTopLeftRadius: 20,
            borderTopRightRadius:20,
            backgroundColor:'#fff',
          },
          headerShown: false,
          // tabBarActiveBackgroundColor: "red",

        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Search" component={SearchScreen}   />
        <Tab.Screen name="Favorites" component={FavoritesScreen}  />
        <Tab.Screen name="Tickets" component={TicketsScreen}   />
        <Tab.Screen name="More" component={MoreScreen}   />
      </Tab.Navigator>
      </View>
  );
}
const styles = StyleSheet.create({
      screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
      },
      container:{
        flex: 1,
      },
      tabscontainer:{
        justifyContent:'center',
        alignItems:'center',
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
    arrow: {
      fontSize: 14,
      color: '#333',
    },
    selectEmailContainer:{
      marginTop:20,
    },
    searchText: {
      color: '#6A6A6A',
      fontSize: 15,
      fontWeight:'light',
      marginBottom: 20,
      letterSpacing:1,
    // borderWidth:1,
    },
    input: {
      width: 'auto',
      borderColor:'#EAEAEA',
      borderRadius:5,
      height: 40,
      borderWidth: 1,
      padding: 10,
    },
    selectEmail:{
      marginBottom:15,
    },
    radioItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioText:{
      color:'#00000',
      fontWeight:'semibold',
      fontSize:14,
    },
    optionHeadings:{
      marginBottom:20,
      color:'#000000',
      fontSize:17,
      fontWeight:'semibold',
      fontFamily:'LatoSemiBold'
    },
    saveFooter:{
      height:'auto',
      alignItems:'center',
      justifyContent:'center',
      borderTopColor:'#EDEDED',
      borderTopWidth:1,
      paddingVertical:15,
      shadowColor:'#000',elevation:1
    }
});




