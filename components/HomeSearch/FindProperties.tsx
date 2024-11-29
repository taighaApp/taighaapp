

import { View, Text, StyleSheet, TextInput, Dimensions, Pressable, Image, Button, Modal, TouchableOpacity, Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CustomBottomsheetModel from '../common/CustomBottomsheetModel'
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../common/Buttons';
import BatchActionModel from './BatchActionModel';
import { Checkbox } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Svg, { Circle, Path } from 'react-native-svg';

const {height:SCREEN_HEIGHT,width:SCREEN_WIDTH} = Dimensions.get('window');

const FindProperties = () => {
  const [number, onChangeNumber] = React.useState('');
  const [isChecked, setChecked] = useState(false);
  const [isStatusChecked, setStatusChecked] = useState(false);
  const [bedSelectedItem, setBedSelectedItem] = useState(null); // Track selected item
  const [bathselectedItem, setBathSelectedItem] = useState(null); // Track selected item
  const [selectedType, setSelectedType] = useState(null);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [openHouseoption, setOpenHouseoption] = useState('Select');
  const [priceSelectedOption, setPriceSelectedOption] = useState('Select');
  const [isVisible, setIsVisible] = useState(false);
  const [VirtualTour, setVirtualTour] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [minPrice, setMinPrice] = useState(50000); // Starting at $50K
  const [maxPrice, setMaxPrice] = useState(10000000); // Ending at $10M
  const [schools, setSchools] = useState(["Adams", "Bridgeport", "Beach Elem", "Shoultes Elem"]);
  const [inputText, setInputText] = useState('');
  const scalePoints = [50000, 2000000, 4000000, 6000000, 8000000, 10000000];
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);


   // checkbox labels
  //status
  const statusChecboxLabels = [
    { label: "Active" },
    { label: "Bumpable buyer" },
    { label: "Pending" },
    { label: "Short Sale Pending" },
    { label: "Off Market" },
    { label: "Sold" },
  ];

    // Manage the state for all checkboxes
    const [checkedState, setCheckedState] = useState(
      Array(statusChecboxLabels.length).fill(false)
    );
  
    const statusHandleToggle = (index:any) => {    
      const statusUpdatedState = checkedState.map((item, idx) =>
        idx === index ? !item : item
      );
      setCheckedState(statusUpdatedState);
    };

     //fav And Feature
  const fovAndFeatureLabels = [
    { label: "Favorites" },
    { label: "Featured Listings" },
  ];

  const [fovAndFeature, setFovAndFeature] = useState(
    Array(fovAndFeatureLabels.length).fill(false)
  );

  const favAndFeatureHandleToggle = (index:any) => {    
    const favAndFeatureUpdatedState = fovAndFeature.map((item, idx) =>
      idx === index ? !item : item
    );
    setFovAndFeature(favAndFeatureUpdatedState);
  };
  //new And modify
  const newOrModifyLabel = [
    { label: "New Listings Last 24 Hours" },
    { label: "Listings Modified Last 24 Hours" },
  ];

  const [newOrModify, setNewOrModify] = useState(
    Array(newOrModifyLabel.length).fill(false)
  );

  const newOrModifyHandleToggle = (index:any) => {    
    const newOrModifyUpdatedState = newOrModify.map((item, idx) =>
      idx === index ? !item : item
    );
    setNewOrModify(newOrModifyUpdatedState);
  };

   //property Catagry
   const propertyCatagryLabel = [
    { label: "Residential" },
    { label: "MultiFamily" },
    { label: "Land" },
    { label: "Commercial Sale" },
  ];

  const [propertyCatagry, setPropertyCatagry] = useState(
    Array(propertyCatagryLabel.length).fill(false)
  );

  const propertyCatagryHandleToggle = (index:any) => {    
    const propertyCatagryUpdatedState = propertyCatagry.map((item, idx) =>
      idx === index ? !item : item
    );
    setPropertyCatagry(propertyCatagryUpdatedState);
  };


  const handleSelect = () => {
    setIsVisible(!isVisible);
  };
  const VirtualTourPress =()=>{
    setVirtualTour(true);
  }

  const handleBedPress = (item:any) => {
    setBedSelectedItem(item);
  };
  const handleBathPress = (item:any) => {
    setBathSelectedItem(item); 
  };

  const bedOptions = ['Any', '1+', '2+', '3+', '4+', '5+']; 
  const bathOptions = ['Any', '1+', '2+', '3+', '4+', '5+']; 

  const types = [
    { 
      id: 1,
      label: 'House', 
      image: require('../../assets/images/homesearch/icon/house.png'),
      selectedImage: require('../../assets/images/homesearch/icon/house-white.png') 
    },
    { 
      id: 2, 
      label: 'Townhomes', 
      image: require('../../assets/images/homesearch/icon/townhomes.png'),
      selectedImage: require('../../assets/images/homesearch/icon/townhomes-white.png') 
    },
    { 
      id: 3, 
      label: 'Condos', 
      image: require('../../assets/images/homesearch/icon/Condos.png'), 
      selectedImage: require('../../assets/images/homesearch/icon/house-white.png'),
    },
    { 
      id: 4, 
      label: 'Multi-family', 
      image: require('../../assets/images/homesearch/icon/multi-family.png'),
      selectedImage: require('../../assets/images/homesearch/icon/house-white.png') 
    },
    { 
      id: 5, 
      label: 'Land', 
      image: require('../../assets/images/homesearch/icon/land.png'),
      selectedImage: require('../../assets/images/homesearch/icon/house-white.png') 
    },
    { 
      id: 6, 
      label: 'Commercial', 
      image: require('../../assets/images/homesearch/icon/Commercial.png'),
      selectedImage: require('../../assets/images/homesearch/icon/house-white.png') 
    },
  ];

  const handlePress = (id:any) => {
    setSelectedType(id);
  };
  
  const clearHandlePress = (id:any) => {
alert('clear')
  };
  const seeHomesPress = (id:any) => {
    alert('see 100 Homes')
  };

  const handleScroll = (event:any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowButtons(offsetY > 50);
  };

  const handleSliderChange = (values:any) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const formatPoint = (value:any) => {
    if (value >= 1000000) {
      return `${value / 1000000}M`;
    } else if (value >= 1000) {
      return `${value / 1000}K`;
    }
    return value.toString();
  };

  const handleInputChange = (value: string, type: string) => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    if (type === "min") {
      if (numericValue < 50000 || numericValue > maxPrice) {
        Alert.alert("Invalid Input", "Minimum value must be between $50K and the maximum value.");
        return;
      }
      setMinPrice(numericValue);
    } else if (type === "max") {
      if (numericValue > 10000000 || numericValue < minPrice) {
        Alert.alert("Invalid Input", "Maximum value must be between the minimum value and $10M.");
        return;
      }
      setMaxPrice(numericValue);
    }
  };

  const addSchool = () => {
    if (inputText.trim() && !schools.includes(inputText.trim())) {
      setSchools([...schools, inputText.trim()]);
      setInputText('');
    }
  };
  const removeSchool = (school: string) => {
    setSchools(schools.filter((s) => s !== school));
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    alert(SCREEN_HEIGHT);
  }, []);


  return (
    // <KeyboardAvoidingView >
<View style={styles.container}>
<ScrollView>
<Button 
      title="Open Bottom Sheet" 
      onPress={handlePresentModalPress} 
          />
        {/* Your scrollable content */}
        {[...Array(80)].map((_, index) => (
          <Text key={index}>psd</Text>
        ))}
      </ScrollView>

      <CustomBottomsheetModel bottomSheetRef={bottomSheetModalRef}>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',width:'100%',margin:'auto',paddingBottom:20}}>
              <Text style={styles.headerText}>Refine Your Search: Find the Perfect Property</Text>
            </View>
          <ScrollView>
            <View style={{marginHorizontal:20,}}>
            <View style={styles.optionWrapper}>
                <Text style={styles.optionHeadings}>Price</Text>
                  <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',}}>
                          <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter min"
                            placeholderTextColor='#AEAEAE'
                            value={`${minPrice}`}
                            onChangeText={(value) => handleInputChange(value, "min")}
                          />
                          <Text style={styles.toText}>to</Text>
                          <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter max"
                            placeholderTextColor='#AEAEAE'
                            value={`${maxPrice}`}
                            onChangeText={(value) => handleInputChange(value, "max")}
                          />
                  </View>
                  <MultiSlider
                    containerStyle={{height:40,}}
                    values={[minPrice, maxPrice]}
                    sliderLength={SCREEN_WIDTH - 40}
                    onValuesChange={handleSliderChange}
                    min={50000}
                    max={10000000}
                    step={50000}
                    selectedStyle={{ backgroundColor: "#3366cc",height:4 }}
                    markerStyle={{ backgroundColor: "#3366cc",width:30,height:30,borderRadius:50 }}
                    unselectedStyle={{height:4}}
                  />
                    <View style={styles.scaleContainer}>
                      {scalePoints.map((point) => (
                        <Text
                          key={point}
                          style={[
                            styles.scaleText,
                            (point === minPrice || point === maxPrice) && styles.highlightedText,
                          ]}
                        >
                          ${formatPoint(point)}
                        </Text>
                      ))}
                    </View>
            </View>
            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Beds</Text>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingBottom:25,}}>
                  {bedOptions.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => handleBedPress(item)}
                      style={[
                        styles.textContainer,
                        bedSelectedItem === item ? styles.selected : styles.unselected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.text,
                          bedSelectedItem === item ? styles.selectedText : styles.unselectedText,
                        ]}
                      >
                        {item}
                      </Text>
                    </Pressable>
                 ))}
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Baths</Text>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingBottom:25,}}>
                  {bathOptions.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() => handleBathPress(item)}
                      style={[
                        styles.textContainer,
                        bathselectedItem === item ? styles.selected : styles.unselected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.text,
                          bathselectedItem === item ? styles.selectedText : styles.unselectedText,
                        ]}
                      >
                        {item}
                      </Text>
                    </Pressable>
                 ))}
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Property Class</Text>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',columnGap:50,rowGap:15,paddingBottom:25,}}>
              {types.map((type) => (
                <View key={type.id} style={styles.item}>
                  <TouchableOpacity
                    onPress={() => handlePress(type.id)}
                    style={[
                      styles.pressable,
                      selectedType === type.id && styles.selectedPressable,
                    ]}
                  >
                    <Image style={styles.image} source={selectedType === type.id ? type.selectedImage : type.image} />
                  </TouchableOpacity>
                  <Text style={[styles.label, selectedType === type.id && styles.selectedLabel]}>
                    {type.label}
                  </Text>
                </View>
              ))}
     
              </View>
            </View>
            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Squere Feet</Text>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingBottom:25,}}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Min Sqft"
                  keyboardType="numeric"
                />
                <Text>to</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Max Sqft "
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Lot Size</Text>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingBottom:25,}}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Min Sqft"
                  keyboardType="numeric"
                />
                <Text>to</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Min Sqft "
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Street Name</Text>
              <View style={{width:'100%',paddingBottom:25,}}>
                <TextInput
                  style={styles.inputFullWidth}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Enter Street Name"
                  placeholderTextColor='#AEAEAE'
                />
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <Text style={styles.optionHeadings}>Status</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap',rowGap:20,columnGap:10,paddingBottom:25 }}>
                  {statusChecboxLabels.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[{
                        flexDirection: 'row',
                        alignItems: 'center', 
                         backgroundColor: '',
                        borderRadius: 40,
                        padding:5,
                      },{ backgroundColor: checkedState[index] ? 'rgba(51,102,204,0.12)': '#F7F7F7'}]}
                      onPress={() => statusHandleToggle(index)}
                    >
                      {checkedState[index] ? (
                        <Image
                          source={require('../../assets/images/homesearch/icon/checked.png')}
                          style={styles.checkedImage}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/homesearch/icon/unCheck.png')}
                          style={styles.checkedImage}
                        />
                      )}
                      <Text style={styles.checkboxText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
            </View>

            <View style={styles.optionWrapper}>
                <Text style={styles.optionHeadings}>Open House</Text>
                  <View style={{paddingBottom:25,}}>
                    <Pressable style={styles.dropdownButton} onPress={ handleSelect }>
                    <Text style={styles.buttonText}>{openHouseoption}</Text>
                    <Text style={styles.arrow}>▼</Text>
                  </Pressable>

                  {/* Half-Screen Modal */}
                  <BatchActionModel isVisible={isVisible} onClose={() => setIsVisible(false)} >
                    <Text style={{borderWidth:1}}>This Weekend</Text>
                    <Text style={{borderWidth:1}}>Any time</Text>
                    </BatchActionModel>
                  </View>
              </View>

              <View style={[styles.optionWrapper,{paddingBottom:25}]}>
                <Text style={styles.optionHeadings}>See It Before You Visit</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                    style={[{
                      flexDirection: 'row',
                      alignItems: 'center', 
                      borderRadius: 40,
                      padding:5,
                    },{ backgroundColor: VirtualTour ? 'rgba(51,102,204,0.12)': '#F7F7F7' }]}
                    onPress={VirtualTourPress}
                    >

                    {VirtualTour ? (
                        <Image
                          source={require('../../assets/images/homesearch/icon/checked.png')}
                          style={styles.checkedImage}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/homesearch/icon/unCheck.png')}
                          style={styles.checkedImage}
                        />
                      )}
                      <Text style={styles.checkboxText}>Virtual Tour</Text>
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                <Text style={styles.optionHeadings}>Price Change</Text>
                <View style={{paddingBottom:25}}>
                  <Pressable style={styles.dropdownButton} onPress={ handleSelect }>
                    <Text style={styles.buttonText}>{priceSelectedOption}</Text>
                    <Text style={styles.arrow}>▼</Text>
                  </Pressable>
                  {/* Half-Screen Modal */}
                  <BatchActionModel isVisible={isVisible} onClose={() => setIsVisible(false)} >
                    <Text>Last day</Text>
                    <Text>Last 30 days</Text>
                    <Text>More then 30 day</Text>
                    </BatchActionModel>
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Year</Text>
                    <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingBottom:25,}}>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Min Year"
                        keyboardType="numeric"
                      />
                      <Text>to</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Max Year"
                        keyboardType="numeric"
                      />
                    </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Levels</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Levels"
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Neighborhood (Legal)</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Neighborhood"
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Elementary School</Text>
                  <View style={{borderWidth:1,borderColor:'#EAEAEA',borderRadius:5,paddingHorizontal:15,paddingVertical:5}}>
                    <View style={styles.tagContainer}>
                            {schools.map((school, index) => (
                              <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{school}</Text>
                                <TouchableOpacity onPress={() => removeSchool(school)}>
                                    <View>
                                        <Text style={styles.removeButton}>
                                        <MaterialIcons name="cancel" size={24} color="#3366CC" />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                              </View>
                            ))}
                      </View>
                        <TextInput
                          style={styles.searchInput}
                          placeholder="Add more Elementary School..."
                          value={inputText}
                          onChangeText={setInputText}
                          onSubmitEditing={addSchool}
                        />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Middle School</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter Middle School"
                      placeholderTextColor='#AEAEAE'
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>High School</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter High School"
                      placeholderTextColor='#AEAEAE'
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Key Words</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter Key Words"
                      placeholderTextColor='#AEAEAE'
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Listing Agent</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter Listing Agent"
                      placeholderTextColor='#AEAEAE'
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Listing Office</Text>
                  <View style={styles.checkboxContainer}>
                    <TextInput
                      style={styles.inputFullWidth}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="Enter Listing Office"
                      placeholderTextColor='#AEAEAE'
                    />
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>Favorite & Featured</Text>
                  <View style={styles.checkboxContainer}>
                  {fovAndFeatureLabels.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[{
                        flexDirection: 'row',
                        alignItems: 'center', 
                        borderRadius: 40,
                        padding:5,
                      },{ backgroundColor: fovAndFeature[index]?'rgba(51,102,204,0.12)': '#F7F7F7'}]}
                      onPress={() => favAndFeatureHandleToggle(index)}
                    >
                      {fovAndFeature[index] ? (
                        <Image
                          source={require('../../assets/images/homesearch/icon/checked.png')}
                          style={styles.checkedImage}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/homesearch/icon/unCheck.png')}
                          style={styles.checkedImage}
                        />
                      )}
                      <Text style={styles.checkboxText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                  </View>
              </View>

              <View style={styles.optionWrapper}>
                  <Text style={styles.optionHeadings}>New or Modified</Text>
                  <View style={styles.checkboxContainer}>
                  {newOrModifyLabel.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[{
                        flexDirection: 'row',
                        alignItems: 'center', 
                        borderRadius: 40,
                        padding:5,
                      },{ backgroundColor: newOrModify[index]?'rgba(51,102,204,0.12)': '#F7F7F7'}]}
                      onPress={() => newOrModifyHandleToggle(index)}
                    >
                      {newOrModify[index] ? (
                        <Image
                          source={require('../../assets/images/homesearch/icon/checked.png')}
                          style={styles.checkedImage}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/homesearch/icon/unCheck.png')}
                          style={styles.checkedImage}
                        />
                      )}
                      <Text style={styles.checkboxText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                  </View>
              </View>
              <View style={[styles.optionWrapper,{marginBottom:200,}]}>
                  <Text style={styles.optionHeadings}>Property Category</Text>
                  <View style={styles.checkboxContainer}>
                  {propertyCatagryLabel.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[{
                        flexDirection: 'row',
                        alignItems: 'center', 
                        backgroundColor: '#F7F7F7',
                        borderRadius: 40,
                        padding:5,
                      },{ backgroundColor: propertyCatagry[index]?'rgba(51,102,204,0.12)': '#F7F7F7'}]}
                      onPress={() => propertyCatagryHandleToggle(index)}
                    >
                      {propertyCatagry[index] ? (
                        <Image
                          source={require('../../assets/images/homesearch/icon/checked.png')}
                          style={styles.checkedImage}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/homesearch/icon/unCheck.png')}
                          style={styles.checkedImage}
                        />
                      )}
                      <Text style={styles.checkboxText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                     
                  </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
                    <Buttons
                      title="Clear"
                      size="half"
                      // borderRadius={8}
                      backgroundColor="#fff"
                      textColor="#3366cc"
                      borderColor="#3366cc"
                      marginTop={10}
                  // marginBottom={0}
                      fontSize={21}
                      isTag={true}
                      onPress={clearHandlePress}
                  />
                  <Buttons
                  title="See 100 Homes"
                  size="half"
                  backgroundColor="#3366cc"
                  textColor="#FFF"
                  marginTop={10}
                  // borderColor="#3366cc"
                  fontSize={18}
                  isTag={false}
                  onPress={seeHomesPress}
                />
          </View>
        </CustomBottomsheetModel>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerText:{
    color: '#6A6A6A',
    fontSize: 15,
    letterSpacing:1,
    fontWeight:'light',
    fontFamily:'Lato-Regular',//lato light
  },
  optionWrapper:{
    marginBottom:20,
    borderBottomWidth:1,
    borderColor:'#ECECEC'
  },
  optionHeadings:{
    marginBottom:20,
    color:'#000000',
    fontSize:17,
    fontWeight:'semibold',
    fontFamily:'LatoSemiBold'
  },
  checkedImage:{
    width: 20,
    height: 20,
    marginRight: 8, // Add spacing between image and text
    objectFit:'fill'
  },
  checkboxText:{ 
    fontSize: 14, 
    color: '#00000',
    marginRight:10, 
    fontFamily:'LatoSemiBold',
    fontWeight:'semibold' 
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 5,
    // borderColor: '#007BFF',
    // borderWidth: 1,
  },
  tagText: {
    fontSize: 14,
    color: '#000000',
    marginRight: 8,
    fontWeight:'semibold',
  },
  removeButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput:{
 // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 20,
    padding: 12,
    fontSize: 14,
    // backgroundColor: '#F9F9F9',
    color: '#333',
  },
  checkboxContainer:{
    flexDirection:'row',
    width:'100%',
    flexWrap:'wrap',
    columnGap:10,
    rowGap:15,
    paddingBottom:25,
  },
  dropdownButton: {
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
  inputFullWidth:{
    borderWidth:1,
    width:'100%',
    borderColor:'#EAEAEA',
    borderRadius:5,
    paddingLeft:15,
    fontFamily:'interMedium',
    fontWeight:'medium'
  },
  item: {
    alignItems: 'center',
    marginBottom: 10,
  },
  pressable: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E0E0E0',
    backgroundColor: '#F7F7F7',
  },
  selectedPressable: {
    backgroundColor: '#3366CC',
    borderColor: '#3366CC',
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  label: {
    color: '#6F6F6F',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily:'LatoSemiBold'
  },
  selectedLabel: {
    color: '#3366CC',
    fontWeight: 'bold',
    fontFamily:'LatoSemiBold'
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unselected: {
    backgroundColor: '#F7F7F7',
  },
  selected: {
    backgroundColor: '#3366CC',
  },
text: {
    fontSize: 14,
    fontWeight:'semibold',
    fontFamily:'LatoSemiBold'
  },
  unselectedText: {
    color: '#000000', // Default text color
  },
  selectedText: {
    color: '#FFFFFF', // Text color for selected
  },
  input: {
    width: 130,
    borderColor:'#EAEAEA',
    borderRadius:5,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  scaleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth:1
    marginBottom:25,
  },
  highlightedText: {
    color: "#3366cc", // Highlighted color
    fontWeight: "bold",
  },
  scaleText: {
    fontSize: 12,
    color: "#6F6F6F",
    fontFamily:'LatoBold',
    fontWeight:'bold',
  },
  toText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT-150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal:20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 5, // Adds shadow for elevation on Android
  },

});
export default FindProperties