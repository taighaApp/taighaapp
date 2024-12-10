import React, { useCallback, useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import CustomBottomsheetModel from '../common/CustomBottomsheetModel';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const DEFAULT_ZIP = '97013';

const searchData = [
  { type: 'Place', name: 'Port Townsend, WA, US', details: 'Region too far. Clear and run this search' },
  { type: 'Place', name: 'Portland, OR, US' },
  { type: 'School', name: 'Port Angeles Hi High School', details: 'Port Angeles' },
  { type: 'Zip Code', name: '97224', details: 'Portland' },
  { type: 'Zip Code', name: '97229', details: 'Portland' },
  { type: 'Zip Code', name: '97013', details: 'Canby' },
];

const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(searchData);
  const [selectedValues, setSelectedValues] = useState([DEFAULT_ZIP]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const handleFocus = useCallback(() => {
    Keyboard.dismiss();
    bottomSheetModalRef.current?.present();
    setIsBottomSheetOpen(true);
  }, []);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query); // This remains correct
    const filtered = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

    // Add this function to handle scroll position updates
    const updateScrollPosition = useCallback(() => {
      if (scrollViewRef.current) {
        // Use setTimeout to ensure the layout has updated
        setTimeout(() => {
          if (contentWidth > (Platform.OS === 'ios' ? 350 : 300)) { // Adjust these values based on your container width
            scrollViewRef.current?.scrollToEnd({ animated: true });
          } else {
            scrollViewRef.current?.scrollTo({ x: 0, animated: true });
          }
        }, 100);
      }
    }, [contentWidth]);


  const onItemPress = useCallback((item: { name: string; }) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!selectedValues.includes(item.name)) {
      const newValues = [...selectedValues, item.name];
      setSelectedValues(newValues);
      updateScrollPosition();
    }

    setSearchQuery('');
    setIsBottomSheetOpen(false);
    bottomSheetModalRef.current?.dismiss();
  }, [selectedValues, updateScrollPosition]);

  const removeValue = useCallback((value: string) => {
    if (value !== DEFAULT_ZIP) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setSelectedValues(prev => prev.filter(item => item !== value));
      updateScrollPosition();
    }
  }, [updateScrollPosition]);

  // Search result list
  const renderSearchItem = useCallback(({ item }:any) => (
    <TouchableOpacity 
      style={styles.searchItem} 
      onPress={() => onItemPress(item)}
      activeOpacity={0.7}
    >
      <MaterialIcons 
        name={item.type === 'School' ? 'school' : 'location-on'} 
        size={24} 
        color="#666"
      />
      <View style={styles.searchItemText}>
        <Text style={styles.itemName}>{item.name}</Text>
        {item.details && <Text style={styles.itemDetails}>{item.details}</Text>}
      </View>
    </TouchableOpacity>
  ), [onItemPress]);

  const snapPointsPlatformBased = Platform.select({
    ios: ['90%', '85%'],
    android: ['50%', '70%'],
  }) as (string | number)[];

  // Add this effect to handle keyboard
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        bottomSheetModalRef.current?.snapToIndex(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);



   // Add this handler for measuring content width
   const onContentSizeChange = useCallback((width: number) => {
    setContentWidth(width);
  }, []);
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={handleFocus}
        activeOpacity={0.9}
      >
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
          onContentSizeChange={onContentSizeChange}
        >
          <View style={styles.inputWrapper}>
            {selectedValues.map((value) => (
              <View key={value} style={styles.tag}>
                <Text style={styles.tagText}>{value}</Text>
                <TouchableOpacity 
                  onPress={() => removeValue(value)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <MaterialIcons 
                    name="close" 
                    size={16} 
                    color="#FFF"
                    style={styles.tagCloseIcon} 
                  />
                </TouchableOpacity>
              </View>
            ))}
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.searchInput,
                  selectedValues.length === 0 && styles.searchInputWithPlaceholder
                ]}
                placeholder={selectedValues.length === 1 ? "Enter City, Zip or School" : ""}
                placeholderTextColor="#AEAEAE"
                onFocus={handleFocus}
                showSoftInputOnFocus={false}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>

      <CustomBottomsheetModel 
        bottomSheetRef={bottomSheetModalRef} 
        snapPoints={snapPointsPlatformBased}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.bottomSheetContent}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={styles.bottomSheetSearchContainer}>
            <TextInput
              style={styles.bottomSheetSearchInput}
              placeholder="Enter City, Zip or School"
              value={searchQuery}
              onChangeText={onChangeSearch}
              autoFocus
              placeholderTextColor="#999"
            />
            <TouchableOpacity 
              onPress={() => setSearchQuery('')}
              style={styles.searchIcon}
            >
              <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredData}
            renderItem={ renderSearchItem }
            keyExtractor={(item, index) => index.toString()}
            style={styles.searchResults}
            keyboardShouldPersistTaps="handled"
          />
        </KeyboardAvoidingView>
      </CustomBottomsheetModel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal:13,
    // borderWidth:1,
  },
  searchContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    flexWrap: 'nowrap',
  },
  inputContainer: {
    flex: 1,
    minWidth: 50,
  },
  searchInput: {
    height: 40,
    fontSize: 14,
    color: '#AEAEAE',
    paddingHorizontal: 4,
    fontFamily:'interRegular'
  },
  searchInputWithPlaceholder: {
    minWidth: 200,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginVertical: 4,
  },
  tagText: {
    color: '#3366CC',
    fontSize: 14,
    marginRight: 4,
  },
  tagCloseIcon: {
    backgroundColor: '#3366cc',
    borderRadius: 50,
    padding: 2,
  },
  bottomSheetContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  bottomSheetSearchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  bottomSheetSearchInput: {
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingRight: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  searchResults: {
    flex: 1,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchItemText: {
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default GlobalSearch;