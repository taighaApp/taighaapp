

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from '../(tabs)/_layout';
// import DashboardScreen from '../Admin/Dashboard';
import Seller from './Seller';
import Buyer from './Buyer';
import Investors from './Investors';
import Rent from './Rent';
import PM from './PM';
import WhatWeDo from './WhatWeDo';
import Owners from './Owner';
import Tenant from './Tenants';
import Profile from './UserProfile';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Privacypolicy from './Privacypolicy';
import Terms from './Terms';
import CustomDrawer from './CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Dashboard from './MainDashboard';
import RootLayout from '../_layout';
import Tasks from '../Admin/Tasks/Tasks';

const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
  return (
        <Drawer.Navigator
        initialRouteName="Tabs"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            drawerStyle: { width: 320, padding:0, margin:0},
            drawerType: 'front', // Change this to 'front', 'back', or 'permanent'
            drawerActiveTintColor: '#e91e63',
            swipeEdgeWidth: Dimensions.get('window').width,
            headerShown: false,
        }}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            {/* <Drawer.Screen name="Dashboard" component={Dashboard} /> */}
            <Drawer.Screen name="Seller" component={Seller} /> 
            <Drawer.Screen name="Buyer" component={Buyer} /> 
            <Drawer.Screen name="Investors" component={Investors} /> 
            <Drawer.Screen  name="Rent" component={Rent} /> 
            <Drawer.Screen name="Property Management" component={PM} />            
            <Drawer.Screen name="What we do" component={WhatWeDo} />  
            <Drawer.Screen name="Owners" component={Owners} />  
            <Drawer.Screen name="Tenants" component={Tenant} />  
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name='About Us' component={Aboutus} />
            <Drawer.Screen name='Contact Us' component={Contactus} />
            <Drawer.Screen name='Privacy Policy' component={Privacypolicy} />
            <Drawer.Screen name='Terms of Service' component={Terms} />
        </Drawer.Navigator>
  );
};

export default DrawerLayout;
