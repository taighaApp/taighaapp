import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{padding:0,margin:0,borderWidth:1}}>
        {/* <View style={styles.customDrawerContent}> */}
 
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        style={styles.drawerItem}
        labelStyle={styles.drawerLabel} 
      />
      <View style={styles.drawerItemWrapper}>
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('Settings')}
        style={styles.drawerItem}
        labelStyle={styles.drawerLabel} // Style for label text
      />
      </View>
    {/* </View> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 0,
    margin:0,
  },
  drawerLabel: {
    padding: 0,   // Remove padding from the label itself
    margin: 0,    // Remove margin from the label itself
  },
  drawerItem: {
    width:'100%',
    borderRadius:0,
    margin: 0, 
    padding:0,
    borderWidth:1,
  },
  drawerItemWrapper: {
    padding: 0,  // Remove padding around the item
    margin: 0,   // Remove margin around the item
  },
  customDrawerContent: {
    paddingHorizontal: 0, 
    margin: 0,
  },
});

export default CustomDrawerContent;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const CustomDrawerItem = ({ label, onPress }:any) => {
//   return (
//     <TouchableOpacity style={styles.customDrawerItem} onPress={onPress}>
//       <Text style={styles.drawerLabel}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const CustomDrawerContent = (props: any) => {
//   return (
//     <View style={styles.customDrawerContent}>
//       <View style={styles.header}>
//         <Text>Drawer Header</Text>
//       </View>

//       {/* Replace DrawerItems with TouchableOpacity */}
//       <CustomDrawerItem
//         label="Home"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//       <CustomDrawerItem
//         label="Settings"
//         onPress={() => props.navigation.navigate('Settings')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   customDrawerItem: {
//     padding: 0,
//     margin: 0,
//     borderWidth: 0,
//   },
//   drawerLabel: {
//     fontSize: 16,
//     padding: 0,
//     margin: 0,
//   },
//   customDrawerContent: {
//     // padding: 0,
//     // margin: 0,
//   },
//   header: {
//     padding: 0,
//     margin: 0,
//     borderWidth: 1,
//     borderBottomColor: 'red',
//   },
// });

// export default CustomDrawerContent;
