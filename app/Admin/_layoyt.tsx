
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewMore from './tickets/ViewMore';

const AdminStack = createStackNavigator();

export default function AdminNavigator() {
   
  return (
    <AdminStack.Navigator screenOptions={{ headerShown: false }}>
        <AdminStack.Screen name="ViewMore" component={ViewMore} />
    </AdminStack.Navigator>
  );
}
 
