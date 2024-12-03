import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropertyListView from '@/components/common/PropertyListView';
import HomeSearchCardview from '@/components/HomeSearch/HomeSearchCardViews';
import HomeSearchMap from '@/components/HomeSearch/HomeSearchMap';


// Placeholder screen components
function DashboardScreen() {
  return (
    <View style={styles.screenContainer}>
    <Text>dashboard Screen</Text>
    </View>
  );
}
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
  return (
    <View style={styles.screenContainer}>
      <HomeSearchCardview/>
    </View>
  );
}
function TicketsScreen() {

  return (
    <ScrollView style={{flex:1}}>
      <PropertyListView/>
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
export default function App() {
  return (
    <View style={styles.container}>
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
    alignItems: 'flex-start',
    marginBottom: 20,
},
checkbox:{
  width: 19,
  height: 19,
  marginRight: 8,
  borderRadius:5,
  borderColor:'#AFAFAF',
  borderWidth:0.5,
  marginTop:3
},
});