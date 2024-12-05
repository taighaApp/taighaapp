
import React, { useCallback, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CustomBottomsheetModel from '../common/CustomBottomsheetModel';
import FilterProperty from './FilterProperty';
<<<<<<< HEAD
=======
import { Dimensions } from 'react-native';
import {  useWindowDimensions } from 'react-native';


>>>>>>> 0130124563664790d3d369e502a24dc6344255bf
import GlobalSearch from './GlobalSearch';
import { BottomSheetModal } from '@gorhom/bottom-sheet';


export default function Header() {
  const navigation = useNavigation(); // Get navigation object
  const [selectedTab, setSelectedTab] = useState('House');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // Handle the opening/closing of the Drawer when the menu icon is clicked
  const handleMenuClick = () => {
    navigation.dispatch(DrawerActions.openDrawer());  };

  const headerMenu = [
    { name: 'House', icon: require('../../assets/images/homesearch/icon/house.png') },
    { name: 'Townhomes', icon: require('../../assets/images/homesearch/icon/townhomes.png') },
    { name: 'Condos', icon: require('../../assets/images/homesearch/icon/Condos.png') },
    { name: 'Multi-family', icon: require('../../assets/images/homesearch/icon/multi-family.png') },
    { name: 'Lots/Land', icon: require('../../assets/images/homesearch/icon/land.png') },
  ];

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    console.log('Bottom sheet opened');
  }, []);

  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Search and Filter Section */}
      <View style={styles.searchContainer}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuClick}>
          <Ionicons name="menu" size={30} color="#FFFF" />
        </TouchableOpacity>

        {/* Search Component */}
        <GlobalSearch />

        {/* Filter Button */}
        <TouchableOpacity style={styles.filterButton} onPress={handlePresentModalPress}>
          <Image
            source={require('../../assets/images/homesearch/icon/filtericon.png')}
            style={{ width: 30, height: 30, tintColor: '#3478F6' }}
          />
        </TouchableOpacity>
      </View>

      {/* BottomSheet Modal */}
      <CustomBottomsheetModel bottomSheetRef={bottomSheetModalRef} snapPoints={["50%", "75%","90%"]}>
        <FilterProperty />
      </CustomBottomsheetModel>

      {/* Tabs Navigation */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
        {headerMenu.map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tabButton} onPress={() => setSelectedTab(tab.name)}>
            <Image
              source={tab.icon}
              style={[styles.tabIcon, { tintColor: selectedTab === tab.name ? '#000000' : '#6F6F6F' }]}
            />
            <Text style={[styles.tabText, selectedTab === tab.name && styles.activeTabText]}>
              {tab.name}
            </Text>
            {selectedTab === tab.name && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingTop: 40,
    borderBottomColor: '#ddd',
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
    paddingHorizontal: 20,
  },
  menuButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#3366CC',
  },
  filterButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  tabButton: {
    alignItems: 'center',
    width: 80,
  },
  tabText: {
    fontSize: 12,
    color: '#6F6F6F',
    textAlign: 'center',
    fontFamily: 'interRegular',
  },
  activeTabText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  tabIcon: {
    width: 23,
    height: 24,
  },
  activeIndicator: {
    marginTop: 5,
    height: 3,
    width: '50%',
    backgroundColor: '#000000',
  },
});

