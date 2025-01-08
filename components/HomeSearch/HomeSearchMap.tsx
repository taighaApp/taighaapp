

import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import MapCard from './MapCard';

const { width, height } = Dimensions.get('window');

interface Property {
  id: number;
  price: string;
  latitude: number;
  longitude: number;
  street: string;
  address: string;
  isActive: boolean;
  images: string[];
}
// Interface for PropertyListView data
interface PropertyListData {
  id: string;
  isActiveText: string;
  propertyPrice: string;
  propertyStreet: string;
  propertyAddress: string;
  isActive: boolean;
  images: string[];
}

// Props interface for the component
interface HomeSearchMapProps {
  isActive: string;
  street: string;
  address: string;
  price: number;
  showCheckbox:boolean;
  images: string;
}

const properties = [
  { 
    id: 1, 
    price: "$999K", 
    latitude: 45.523, 
    longitude: -122.676,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummy-1.jpg')],
    isActive: true
  },
  { 
    id: 2, 
    price: "$732K", 
    latitude: 45.531, 
    longitude: -122.658,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummy-2.jpg')],
    isActive: true
  },
  { 
    id: 3, 
    price: "$1.09M", 
    latitude: 45.528, 
    longitude: -122.666,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummy-3.jpg')],
    isActive: true
  },
  { 
    id: 4, 
    price: "$600K", 
    latitude: 45.512, 
    longitude: -122.673,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummyCardImage.png')],
    isActive: true
  },
  { 
    id: 5, 
    price: "$6M", 
    latitude: 45.515, 
    longitude: -122.705,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummyCardImage.png')],
    isActive: true
  },
  { 
    id: 6, 
    price: "$10M", 
    latitude: 45.508, 
    longitude: -122.684,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummyCardImage.png')],
    isActive: true
  },
  { 
    id: 7, 
    price: "$2.10M", 
    latitude: 45.493, 
    longitude: -122.670,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummyCardImage.png')],
    isActive: true
  },
  { 
    id: 8, 
    price: "$6,000,000", 
    latitude: 45.523, 
    longitude: -122.676,
    street: '6220 NW SKYLINE BLVD',
    address: 'Portland, OR 97229',
    images: [require('../../assets/images/dummyCardImage.png')],
    isActive: true
  },

];

 const HomeSearchMap:React.FC<HomeSearchMapProps> = ({ isActive, street, address, price, showCheckbox, images }) =>{
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleMarkerPress = (property:any) => {  
    setSelectedProperty(property);    
  };

  const transformToListData = (property: Property): PropertyListData => {
    return {
      id: property.id.toString(),
      isActiveText: property.isActive ? 'Active' : '',
      propertyPrice: property.price,
      propertyStreet: property.street,
      propertyAddress: property.address,
      isActive: property.isActive,
      images: property.images,
    };
  };

  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        region={{
          latitude: properties[0]?.latitude || 45.5152,
          longitude: properties[0]?.longitude || -122.6784,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {properties.map((property) => (          
          <Marker
            key={property.id}
            coordinate={{ 
              latitude: property.latitude, 
              longitude: property.longitude 
            }}
            onPress={() => handleMarkerPress(property)}
          >
            <View style={styles.markerContainer}>
              <View style={styles.marker}>
              {property.images.map((image, index) => (
                <Image key={index}
                  style={styles.markerImage} 
                  source={image}
                />
              ))}
                <Text style={styles.priceText}>{property.price}</Text>
              </View>
            </View>
          </Marker>
        ))}
      </MapView> */}
      
      {selectedProperty && (        
        <View style={styles.propertyListWrapper}>
          <MapCard 
          
           listData={[
            {
              id: selectedProperty.id.toString(),
              isActiveText: selectedProperty.isActive ? 'Active' : '',
              propertyPrice: selectedProperty.price,
              propertyStreet: selectedProperty.street,
              propertyAddress: selectedProperty.address,
              isActive: selectedProperty.isActive,
              images: selectedProperty.images,
            },
          ]}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  marker: {
    minWidth: 100, // Add minimum width to ensure content fits
    width: 'auto', // Allow marker to grow based on content
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  markerImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3498db',
    marginRight: 5,
  },
  priceText: {
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: 14,
    flexShrink: 0,
  },
  propertyListWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
});

export default HomeSearchMap;
