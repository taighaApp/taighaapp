import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 

const data = [
  { type: 'Place', name: 'Port Townsend, WA, US', details: 'Region too far. Clear and run this search' },
  { type: 'Place', name: 'Portland, OR, US' },
  { type: 'School', name: 'Port Angeles Hi High School', details: 'Port Angeles' },
  { type: 'School', name: 'Port Townsend H High School', details: 'Port Townsend' },
  { type: 'School', name: 'Port Susan Mid Middle School', details: 'Camano Island' },
  { type: 'Address', name: 'NW Padgett RD (Residential - A)' },
  { type: 'Zip Code', name: '97224', details: 'Portland' },
  { type: 'Zip Code', name: '97524', details: 'EaglePoint' },
  { type: 'Zip Code', name: '97013', details: 'Canby' },
];

const getIcon = (type: any) => {
  switch (type) {
    case 'Place':
      return 'location-on';
    case 'School':
      return 'school';
    case 'Address':
      return 'home';
    case 'Zip Code':
      return 'location-on';
    default:
      return 'location-on';
  }
};

const HomeMapSearch = ({ toggleTag }:any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase()
    );
    setFilteredData(filtered);
  };

  const onItemPress = (item: any) => {
    toggleTag(item); // Add or remove the item using the `toggleTag` function
  };

  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      <MaterialIcons name={getIcon(item.type)} size={20} color="black" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        {item.details && <Text style={styles.itemDetails}>{item.details}</Text>}
      </View>
    </View>
  );

  const renderSectionHeader = (type:any) => (
    <Text style={styles.sectionHeader}>{type}</Text>
  );

  const groupedData = filteredData.reduce((result: Record<string, typeof data>, item) => {
    if (!result[item.type]) {
      result[item.type] = [];
    }
    result[item.type].push(item);
    return result;
  }, {});

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <View style={{borderWidth:5,}}>
        <Searchbar
          placeholder="Enter City, Zip or School"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
          placeholderTextColor="#AEAEAE"
          inputStyle={styles.searchbarInput}
        />
        <View style={styles.locationPlace}>
          <FlatList
            data={Object.keys(groupedData).flatMap((type) => [
              { type, header: true },
              ...groupedData[type],
            ])}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              item.header ? renderSectionHeader(item.type) : (
                <TouchableOpacity onPress={() => onItemPress(item)}>
                  {renderItem({ item })}
                </TouchableOpacity>
              )
            }
            style={styles.list}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({

  locationPlace: {
    borderWidth: 8,
    borderColor: '#EAEAEA',
    padding: 11,
    borderRadius: 8,
    height: 530,
  },
  searchbar: {
    borderRadius: 8,
    height: 90,
    margin: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  searchbarInput: {
    fontSize: 14,
    textAlign: 'center', 
  },
  list: {
    flexGrow: 1,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 10,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#000',
  },
  itemDetails: {
    fontSize: 12,
    color: '#888',
  },
});


export default HomeMapSearch
