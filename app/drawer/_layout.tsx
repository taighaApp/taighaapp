

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Seller from './Seller';
import Tabs from '../(tabs)/_layout';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
  return (
        <Drawer.Navigator
        initialRouteName="Seller"
        screenOptions={{
            drawerStyle: { width: 240, padding: 0, margin: 0 }, // For the entire drawer container
            drawerActiveTintColor: '#e91e63',
        }}
       
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen

            name="Seller"
            component={Seller}
            options={{ 
                headerShown: false,
                drawerStyle: {
                    padding:0,
                    margin: 0, // This will work to remove margin from the drawer itself
                  },
             }}
        />
            <Drawer.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Drawer.Navigator>
  );
};

export default DrawerLayout;
