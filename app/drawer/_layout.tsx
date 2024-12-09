

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Seller from './Seller';
import Tabs from '../(tabs)/_layout';

const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
  return (
        <Drawer.Navigator
        initialRouteName="Seller"
        screenOptions={{
            drawerStyle: { width: 240 },
            drawerActiveTintColor: '#e91e63',
        }}
        >
        <Drawer.Screen
            name="Seller"
            component={Seller}
            options={{ headerShown: false }}
        />
            <Drawer.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Drawer.Navigator>
  );
};

export default DrawerLayout;
