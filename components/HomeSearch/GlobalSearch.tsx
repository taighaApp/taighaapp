import React, { useCallback, useRef, useState } from 'react';
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

  const onItemPress = useCallback((item: { name: string; }) => {
    // Immediately update the selected values
    if (!selectedValues.includes(item.name)) {
      const newValues = [...selectedValues, item.name];
      setSelectedValues(newValues);
      
      // Scroll to end after a short delay to ensure the new tag is rendered
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }

    // Clear search and close bottom sheet
    setSearchQuery('');
    setIsBottomSheetOpen(false);
    bottomSheetModalRef.current?.dismiss();
  }, [selectedValues]);

  const removeValue = useCallback((value: string) => {
    if (value !== DEFAULT_ZIP) {
      setSelectedValues(prev => prev.filter(item => item !== value));
    }
  }, []);

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
                placeholder={selectedValues.length === 0 ? "Enter City, Zip or School" : ""}
                placeholderTextColor="#999"
                onFocus={handleFocus}
                showSoftInputOnFocus={false}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>

      <CustomBottomsheetModel 
        bottomSheetRef={bottomSheetModalRef} 
        snapPoints={["50%", "70%"]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.bottomSheetContent}
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
    paddingHorizontal: 16,
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
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 4,
  },
  searchInputWithPlaceholder: {
    minWidth: 200,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B88FF',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginVertical: 4,
  },
  tagText: {
    color: '#FFF',
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