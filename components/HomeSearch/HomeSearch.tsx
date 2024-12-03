import React, { useCallback, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView, Platform, UIManager, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomsheetModel from '../common/CustomBottomsheetModel';
import FilterProperty from './FilterProperty';
import { Dimensions } from 'react-native';

const {width:SCREEN_WIDTH,height:SCREEN_HEIGHT} = Dimensions.get('window');

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
  ) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
export default function Header() {
  const [selectedTab, setSelectedTab] = useState('House');
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [firstInputValue, setFirstInputValue] = useState(""); // State for the first input
  const [secondInputValue, setSecondInputValue] = useState(""); // State for the second input
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

 const headerMenu = [
  { name: 'House', icon: require('../../assets/images/homesearch/icon/house.png') },
  { name: 'Townhomes', icon: require('../../assets/images/homesearch/icon/townhomes.png') },
  { name: 'Condos', icon: require('../../assets/images/homesearch/icon/Condos.png') },
  { name: 'Multi-family', icon: require('../../assets/images/homesearch/icon/multi-family.png') },
  { name: 'Lots/Land', icon: require('../../assets/images/homesearch/icon/land.png') },
]
  const handleAppendText = () => {
    if (secondInputValue.trim() !== "") {
      setFirstInputValue((prev) => `${prev} ${secondInputValue}`.trim());
      setSecondInputValue("");
    }
  };

  const clearFirstInput = () => {
    setFirstInputValue(""); // Clear the first input value
    setSecondInputValue(""); // Reset second input
    setShowSecondInput(false); // Hide the second input
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    console.log('Bottom sheet opened');
  }, []);

  return (
    <SafeAreaView style={styles.headerContainer}>
      {/* Search and Filter Section */}
      <View style={styles.searchContainer}>
        <View>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={30} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal:13,}}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter City, Zip or School"
            placeholderTextColor="#999"
            value={firstInputValue}
            onChangeText={setFirstInputValue} // Update state for first input
            onFocus={() => setShowSecondInput(true)} // Show the second input on focus
          />
            {/* {firstInputValue.length > 0 && (
          <TouchableOpacity style={styles.clearIconContainer} onPress={clearFirstInput}>
            <Text style={styles.clearIcon}>×</Text>
          </TouchableOpacity>
        )} */}
        </View>
       <View>
       <TouchableOpacity style={styles.filterButton} onPress={handlePresentModalPress} >
            <Image
              source={require('../../assets/images/homesearch/icon/filtericon.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: '#3478F6',
              }}
            />
        </TouchableOpacity>
       </View>
        <CustomBottomsheetModel 
        bottomSheetRef={bottomSheetModalRef}>
          <FilterProperty/>
        </CustomBottomsheetModel>
      </View>
      {/* Display appended texts as chips */}

      {/* Second TextInput */}
      {showSecondInput && (
        <View>
        <TextInput
          // style={styles.searchInput}
          value={secondInputValue}
          onChangeText={setSecondInputValue} // Update state for second input
          onEndEditing={handleAppendText} // Append value when editing ends
          placeholder="Additional Search"
          placeholderTextColor="#999"
        />
      </View>
      )}

      {/* Navigation Tabs */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {headerMenu.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => setSelectedTab(tab.name)}
          >
            <Image
              source={tab.icon}
              style={[
                styles.tabIcon,
                { tintColor: selectedTab === tab.name ? '#000000' : '#6F6F6F' },
              ]}
            />
            <Text
              style={[styles.tabText, selectedTab === tab.name && styles.activeTabText]}
            >
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
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 17,
    paddingHorizontal:20,
  },
  menuButton: {
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    backgroundColor: '#3366CC',
    // borderWidth:1
  },
  searchInput: {
    //20+40+15+20+40+15= 150
    width: SCREEN_WIDTH - 150,
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    color: '#333',
  },
  clearIconContainer: {
    position: "absolute",
    right: 10,
    padding: 5,
  },
  clearIcon: {
    fontSize: 18,
    color: "#999",
  },
  filterButton: {
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
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
    width: 80, // Adjust to control how many tabs fit in view
    // marginHorizontal: 10,
  },
  tabText: {
    fontSize: 12,
    color: '#6F6F6F',
    textAlign: 'center',
    fontFamily:'interRegular'
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
  chipsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#333",
  },
  closeIcon: {
    fontSize: 18,
    color: "#333",
    marginLeft: 5,
  },
});
