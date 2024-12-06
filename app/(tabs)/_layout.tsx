import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropertyListView from '@/components/common/PropertyListView';
import HomeSearchMap from '@/components/HomeSearch/HomeSearchMap';
import PropertiesDetails from '@/components/HomeSearch/PropertiesDetails';
import HomeSearch from '@/components/HomeSearch/HomeSearch';
import Dashboard from './Dashboard';
import { StatusBar } from 'expo-status-bar';
import Search from './Search';
import Favorites from './Favorites';
import Tickets from './Tickets';
import More from './More';

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
            if (route.name === "Favorites" || route.name === "Tickets") {
                // Use the same image for Favorites and Tickets
                imageSource = require('../../assets/images/homesearch/icon/dashboard.png');
            } else {
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
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Search" component={Search}   />
        <Tab.Screen name="Favorites" component={Favorites}  />
        <Tab.Screen name="Tickets" component={Tickets}   />
        <Tab.Screen name="More" component={More}   />
      </Tab.Navigator>
      </View>
  );
}
const styles = StyleSheet.create({
     
      container:{
        flex: 1,
      },
      tabscontainer:{
        justifyContent:'center',
        alignItems:'center',
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




