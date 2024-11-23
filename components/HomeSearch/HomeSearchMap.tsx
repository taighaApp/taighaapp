import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const properties = [
  { id: 1, price: "$999K", latitude: 45.523, longitude: -122.676 },
  { id: 2, price: "$732K", latitude: 45.531, longitude: -122.658 },
  { id: 3, price: "$1.09M", latitude: 45.528, longitude: -122.666 },
  { id: 4, price: "$600K", latitude: 45.512, longitude: -122.673 },
  { id: 5, price: "$6M", latitude: 45.515, longitude: -122.705 },
  { id: 6, price: "$10M", latitude: 45.508, longitude: -122.684 },
  { id: 7, price: "$2.10M", latitude: 45.493, longitude: -122.670 },
];

export default function HomeSearchMap() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.5152,
          longitude: -122.6784,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {properties.map((property) => (
          
          <Marker
            key={property.id}
            coordinate={{ latitude: property.latitude, longitude: property.longitude }}
            title={`Price: ${property.price}`}
          >
            <View style={styles.marker}>
              <Image style={{width:15,height:15,borderRadius:50,marginRight:5,}} source={require('../../assets/images/dummyCardImage.png')}/>
              <Text style={styles.priceText}>{property.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
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
  marker: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
 shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2, // For Android shadow
  },
  priceText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// export default function HomeSearchMap() {
//   const [hasPermission, setHasPermission] = useState(false);

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: "Location Permission",
//             message: "This app needs access to your location to show the map.",
//             buttonPositive: "OK",
//           }
//         );
//         setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
//       } else {
//         setHasPermission(true); // iOS permissions should already be handled in Info.plist
//       }
//     };

//     requestLocationPermission();
//   }, []);

//   if (!hasPermission) {
//     return Alert.alert(
//       "Permission Denied",
//       "Please grant location permissions to view the map."
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//           title="Marker Title"
//           description="Marker Description"
//         />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });
