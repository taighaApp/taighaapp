import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, Share, Alert, Dimensions,ScrollView } from "react-native";
import { FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
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
    { id: '6', image: require("../../assets/images/homesearch/icon/Homecardimage.png") },
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

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Favorite and Share Icons */}
        <View style={styles.iconContainer}>
          <Pressable
            style={styles.icon}
            // onPress={() => setIsFavorite((prev) => !prev)}
          >
            <FontAwesome
              name={isFavorite ? "heart" : "heart-o"}
              size={20}
              color={isFavorite ? "red" : "#555"}
            />
          </Pressable>
          <Pressable style={styles.icon} onPress={handleShare}>
            <Feather name="share-2" size={20} color="#555" />
          </Pressable>
        </View>

        {/* Image Slider */}
        <View style={styles.imageContainer}>
          <Carousel
            loop
            width={width}
            height={200}
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
              <Text style={styles.virtualTourText}>Virtual Tour</Text>
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

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',}}>
            <View>
            <Text style={styles.cardPropertyName}>6220 NW SKYLINE BLVD</Text>
            <Text style={styles.cardPropertyaddres}>Portland, OR 97229</Text>
            </View>
        
          <View>
            <Text>$6,000,000</Text>
          </View>
          
        </View>

        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: 350,
    height:290,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation:0,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    paddingTop: 20,
  },
  icon: {
    marginHorizontal: 8,
    backgroundColor: "rgba(233, 233, 233, 0.7)", // Light gray with 70% opacity
    padding: 6,
    borderRadius: 15,
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 181,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
    objectFit:'cover',
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
    flexDirection: 'row', // Align elements horizontally
  justifyContent: 'flex-start', // Align content to the left
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
  cardPropertyprice: {
fontSize:12,
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