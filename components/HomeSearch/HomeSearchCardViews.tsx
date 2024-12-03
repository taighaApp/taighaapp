import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, Share, Alert, Dimensions,ScrollView } from "react-native";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import HomeAccessories from "./HomeAccessories";
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});
const { width } = Dimensions.get('window');
export default function PropertyCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // Image data for slider
  const imageData = [
    { id: '1', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
    { id: '2', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
    { id: '3', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
    { id: '4', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
    { id: '5', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
  ];
  // Function to handle sharing property details
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this property:\n" +
                 "6220 NW SKYLINE BLVD\n" +
                 "Portland, OR 97229\n" +
                 "$6,000,000\n" +
                 "5 Beds | 5 Baths | 6887 sqft",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          Alert.alert("Shared via", result.activityType);
        } else {
          Alert.alert("Success", "Property details shared!");
        }
      } else if (result.action === Share.dismissedAction) {
        Alert.alert("Cancelled", "Share was dismissed.");
      }
    } catch (error) {
      // Alert.alert("Error", error.message);
    }
  };

  const cardData = [
    {
      id:'1',
      VirtualTourLabel:'Virtual Tour',
      cardStreetName:'6220 NW SKYLINE BLVD',
      CardPropertyPrice:'$6,000,000',
      cardAddress:'Portland, OR 97229',
    },
    {
      id:'2',
      VirtualTourLabel:'Virtual Tour',
      cardStreetName:'6220 NW SKYLINE BLVD',
      CardPropertyPrice:'$6,000,000',
      cardAddress:'Portland, OR 97229',
    },
    {
      id:'3',
      VirtualTourLabel:'Virtual Tour',
      cardStreetName:'6220 NW SKYLINE BLVD',
      CardPropertyPrice:'$6,000,000',
      cardAddress:'Portland, OR 97229',
    },
  ];

  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.container}>
      {cardData.map((items)=>(

      
      <View key={items.id} style={styles.card}>
        {/* Favorite and Share Icons */}
        <View style={styles.iconContainer}>
          <Pressable style={styles.icon}>
            <Image style={styles.mapMedia} source={require('../../assets/images/PropertiesImage/properties-fav.png')}/>
          </Pressable>

          <Pressable style={styles.icon} onPress={handleShare}>
            <Image style={styles.mapMedia} source={require('../../assets/images/PropertiesImage/properties-share-block.png')}/>
          </Pressable>
        </View>
        {/* Image Slider */}
        <View style={[styles.imageContainer,{width: width-60}]}>
          <Carousel
          style={{borderRadius:5,}}
            loop
            width={width-60}
            autoPlay={false}
            data={imageData}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
          />
          {/* Virtual Tour Label */}
          <View style={styles.virtualTourBadge}>
            <View style={styles.virtualTourContent}>
              <Text style={styles.virtualTourText}>{items.VirtualTourLabel}</Text>
              <Image
                source={require("../../assets/images/homesearch/icon/360-degrees.png")} // Replace with your image path
                style={styles.virtualTourImage}
              />
            </View>
          </View>
          {/* Pagination Dots */}
          <View style={styles.pagination}>
            {imageData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
        {/* Property Details */}
        <View style={styles.detailsContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',marginBottom:10}}>
            <View>
              <Text style={styles.cardPropertyName}>{items.cardStreetName}</Text>
              <Text style={styles.cardPropertyaddres}>{items.cardAddress}</Text>
            </View>
          <View>
            <Text style={styles.cardPropertyPrice}>{items.CardPropertyPrice}</Text>
          </View>
        </View>
          {/* Home Accessories Component */}
          <HomeAccessories/>
        </View>
      </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: width - 40,
    height: 290,
    marginVertical: 10,
    marginHorizontal:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Balanced shadow offset
    shadowOpacity: 0.2,
    shadowRadius: 4, 
    elevation: 5,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    paddingTop: 15,
    right:15,
  },
  icon: {
    backgroundColor: "rgba(233, 233, 233, 0.7)",
    padding: 6,
    marginLeft:5,
    borderRadius: 50,
  },
  mapMedia:{
    width:15,
    height:15
  },
  imageContainer: {
    height: 180,
    borderRadius: 8,
    marginTop:10,
  },
  slide: {
    borderRadius:8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius:8,
    objectFit:'cover',
    overflow:'hidden',
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  virtualTourBadge: {
    width:73,
    height:20,
    position: "absolute",
    top: '85%',
    right: 10,
    backgroundColor: "rgba(51, 102, 204, 0.7)",
    borderRadius: 3,
   justifyContent: "center",
   alignItems: "center",
  },
  virtualTourContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  virtualTourText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "bold",
    marginRight: 4,
  },
  virtualTourImage: {
    width: 15,
    height: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  detailsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
  },
  detailscontent:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  cardPropertyName:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  cardPropertyaddres:{
    fontSize: 14,
    color: "#6A6A6A",
  },
  cardPropertyPrice:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  feature: {
    fontSize: 14,
    color: "#777",
    flexDirection: "row",
    alignItems: "center",
  },
});