import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ImageBackground ,FlatList,
    Animated,Pressable,Share, Alert,SafeAreaView,Modal,
    Easing} from "react-native";
import React, { useRef ,useState} from 'react';
import { List } from "react-native-paper";
import CustomBottomSheet from '../common/CustomBottomSheet';
import HomeAccessories from "./HomeAccessories";
// import { ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import HomeSearchCardViews from "./HomeSearchCardViews";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import PropertiesAccessories from "./PropertiesAccessories";
import HomeSearchMap from "./HomeSearchMap";
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window'); // Get screen width for slider


const PropertiesDetails = () => {
  const bottomSheetRef = useRef(null);

const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
const sectionRefs = useRef<{ [key: string]: React.RefObject<View> }>({});
// properties image 
const [modalVisible, setModalVisible] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(0);
const scaleAnimation = useRef(new Animated.Value(0)).current; // Initial scale value
  const flatListRef = useRef<FlatList>(null);

// const [expandedSections, setExpandedSections] = React.useState(new Set());
    const sections = [
        { title: "General Information", key: "general" },
        { title: "Residence Information", key: "residence" },
        { title: "Features And Utilities", key: "features" },
        { title: "Financial", key: "financial" },
        { title: "Comparable Information", key: "comparable" },
        { title: "Schools", key: "schools"},
        { title: "History", key: "history" },
      ];
    
      const sectionData = {
        general: [
          { id: '1', Label: "MLS#", value: "24395515" },
          { id: '2', Label: "Type", value: "SingleFamilyResidence" },
          { id: '3', Label: "Days on Market", value: "203 DOM" },
          { id: '4', Label: "Lot Size", value: "9.76 acres" },
          { id: '5', Label: "Baths", value: "0" },
          { id: '6', Label: "SqFt", value: "-" },
          { id: '7', Label: "Year built", value: "-" },
          { id: '8', Label: "County", value: "Multnomah" },
          { id: '9', Label: "Tax ID", value: "R324437" },
          { id: '10', Label: "Elem", value: "Forest Park" }, 
          { id: '11', Label: "Middle", value: "West Sylvan" }, 

        ],
        residence: [
          { id: '1', Label: "Upper Sqft", value: "0" },
          { id: '2', Label: "Main Sqft", value: "12345" },
          { id: '3', Label: "LowerSqft", value: "1254" },
          { id: '4', Label: "Total Sqft", value: "2365" },
          { id: '5', Label: "SFSrc", value: "Trio" },
          { id: '6', Label: "TotUp/Mn", value: "1478" },
          { id: '7', Label: "Fireplaces", value: "2/Gas" },
          { id: '8', Label: "Bdrms", value: "5" },
          { id: '9', Label: "Full Bath", value: "3" },
          { id: '10', Label: "Partial Bath", value: "3" },
        ],
        features: [
          { id: '1', Label: "Living", value: "Ceiling Fan, Fireplace, Hard woodFloors" },
          { id: '2', Label: "Kitchen", value: "BuiltinRange, Cooktop, Dis hwasher, FreeStanding Ref rigerator, Range Hood, Soli dSurfaceCountertop, Stain lessS" },
          { id: '3', Label: "Interior", value: "Ceiling Fan, Hardwood Floo rs, Laundry, WalltoWallCar pet, WasherDryer" },
          { id: '4', Label: "Exterior", value: "Deck, Fenced, Porch, Raised Beds, Yard" },
          { id: '5', Label: "Accessibility", value: "Walkin Shower" },
          { id: '6', Label: "Cool", value: "CentralAir" },
          { id: '7', Label: "Water", value: "Electricity" },
          { id: '8', Label: "Heat", value: "ForcedAir" },
          { id: '9', Label: "Sewer", value: "PublicSewer" },
          { id: '10', Label: "Hot Water", value: "Electricity" },
        ],
        financial: [
          { id: '1', Label: "PTax/Yr", value: "6758.04" },
          { id: '2', Label: "HOA", value: "0" },
          { id: '3', Label: "HOA Incl", value: "-" },
          { id: '4', Label: "HOA fee", value: "-/-" },
          { id: '5', Label: "Other Dues", value: "-" },
          { id: '6', Label: "Terms Considered", value: "Cash,Conventional,FHA" },
          { id: '7', Label: "List Date", value: "11-20-2024" },
          { id: '8', Label: "Rent(If Rented)", value: "-" },
          { id: '9', Label: "Bank Owned/REO", value: "No" },
          { id: '10', Label: "Short Sale", value: "No" },
        ],
        comparable: [
          { id: '1', Label: "Pending Date", value: "-" },
          { id: '2', Label: "DOM", value: "2 DOM" },
          { id: '3', Label: "CDOM", value: "3 DOM" },
          { id: '4', Label: "Sold date", value: "-" },
          { id: '5', Label: "Terms", value: "Cash,Conventional,FHA" },
          { id: '6', Label: "Original Price", value: "$699,727" },
          { id: '7', Label: "List Price", value: "$699,727" },
          { id: '8', Label: "Sold Price", value: "-" },
          { id: '9', Label: "Last Modified", value: "Nov 30,-0001 00:00" },
        ],
        schools: [
          { id: '1', Label: "Elementary:Terra Linda", value: "5/10 Ratings" },
          { id: '2', Label: "Middle:Tumwater", value: "N/A Ratings" },
          { id: '3', Label: "High:Sunset", value: "5/10 Ratings" },
        ],
        history: [], // You can keep custom logic for history if required.
      };

      const images = [
        require('../../../assets/images/PropertiesImage/property-image.png'),
        require('../../../assets/images/PropertiesImage/properties-inside.png'),
        // require('../../assets/images/PropertiesImage/homeimage.jpg'),
        require('../../../assets/images/PropertiesImage/property-image.png'),
        require('../../../assets/images/PropertiesImage/properties-inside.png'),
      ];

      const openModal = (index:any) => {
    setSelectedIndex(index);
    setModalVisible(true);

    // Start zoom-in animation
    Animated.timing(scaleAnimation, {
      toValue: 1, // Final scale
      duration: 300, // Animation duration
      easing: Easing.ease,
      useNativeDriver: true, // Use native animations
    }).start(() => {
      // Ensure FlatList scrolls immediately to the selected index
      flatListRef.current?.scrollToIndex({ index, animated: true });
    });
  };

    
  const closeModal = () => {
    // Start zoom-out animation
    Animated.timing(scaleAnimation, {
      toValue: 0, // Back to initial scale
      duration: 300, // Animation duration
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false); // Close the modal after animation
    });
  };  
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

  // Initialize refs for each section
  sections.forEach((section) => {
    if (!sectionRefs.current[section.key]) {
      sectionRefs.current[section.key] = React.createRef();
    }
  });
  
 
const toggleSection = (key:string) => {
  const updatedSections = new Set(expandedSections);
  if (updatedSections.has(key)) {
    updatedSections.delete(key); // Collapse the section
  } else {
    updatedSections.add(key); // Expand the section
  }
  setExpandedSections(updatedSections); // Update state
};


const renderSectionContent = (key: string) => {
  const data = sectionData[key];
  if (data && data.length > 0) {
    return (
      <View>
        {/* {data.map((item:any) => ( */}
        {data.map((item: any, index: number) => (
          <View key={item.id}
          style={[
            styles.infoRow,
            index === data.length - 1 && { borderBottomWidth: 0 }, // Remove border for the last item
          ]}>
            <Text style={styles.infoLabel}>{item.Label}</Text>
            <Text style={styles.infoValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    );
  }

  // Custom case for "history" or other sections
  if (key === "history") {
    return (
      <View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableText, styles.headerText, styles.dates]}>Dates</Text>
            <Text style={[styles.tableText, styles.headerText, styles.event]}>Event & Source</Text>
            <Text style={[styles.tableText, styles.headerText, styles.accordainprice]}>Price</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableText, styles.dates]}>10-23-2024</Text>
            <Text style={[styles.tableText, styles.event]}>Active (Price Changed) MLS #24395515</Text>
            <Text style={[styles.tableText, styles.accordainprice]}>$625,000</Text>
          </View>
        </View>
      </View>
    );
  }

  return null; // Default fallback for unsupported sections
};

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
        <View style={styles.container}>



        <SafeAreaView>
          {/* Favorite and Share Icons */}
          <View style={styles.iconContainer}>
            
            <View style={styles.iconback}>
              <Pressable style={styles.iconfav}>
                <Link href={'/HomeSearch'}>
                    {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
                    <Image style={{width:20,height:20}} source={require('../../../assets/images/PropertiesImage/properties-backarrow.png')}/>
                </Link>
              </Pressable>
            </View>

            <View style={{flexDirection:'row' , gap:10}}>
            <Pressable style={styles.iconfav}>
              <Image style={styles.mapMedia} source={require('../../../assets/images/PropertiesImage/properties-fav.png')}/>
            </Pressable>

            <Pressable style={styles.iconfav} onPress={handleShare}>
              {/* <Image style={styles.mapMedia} source={require('../../assets/images/PropertiesImage/properties-share-block.png')}/> */}
            </Pressable>
            </View>
 
          </View>

            {/* <ScrollView >
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/property-image.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-inside.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-showcase.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/property-image.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-inside.png')} />
            </ScrollView> */}

            <ScrollView>
              {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => openModal(index)}>
                  <Image style={styles.image} source={image} />
                </TouchableOpacity>
              ))}
              {modalVisible && (
                <Modal transparent={true} visible={modalVisible} animationType="none">
                <View style={styles.modalContainer}>
                  <Animated.View
                    style={[
                      styles.animatedModalContent,
                      { transform: [{ scale: scaleAnimation }] },
                    ]}
                  >
                    <FlatList
                      ref={flatListRef}
                      data={images}
                      keyExtractor={(item, index) => index.toString()}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      initialScrollIndex={selectedIndex}
                      getItemLayout={(data, index) => ({
                        length: width,
                        offset: width * index,
                        index,
                      })}
                      renderItem={({ item }) => (
                        <View style={styles.imageWrapper}>
                          <Image style={styles.modalImage} source={item} />
                        </View>
                      )}
                    />
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                      <Ionicons name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              </Modal>
              )}
            </ScrollView>
        </SafeAreaView>
        </View>

      <CustomBottomSheet>
        <ScrollView contentContainerStyle={styles.bottomContainer} showsVerticalScrollIndicator={false}>

        <Text style={styles.price}>$1,250,000</Text>

            <View style={{  flexDirection: 'row', alignItems: 'center', marginBottom:14}}>

                <View style={styles.Propertiescontent}>
                    <Text style={styles.address}>9007 NW BARTHOLOMEW DR</Text>
                    <Text style={styles.pincode}>Portland, OR, 97229</Text>
                </View>

                {/* <Link href={'/HomeSearch'}> */}
                  <View style={styles.MapContainer}>
                    <MapView
                      style={styles.maps}
                      initialRegion={{
                        latitude: 45.5122, 
                        longitude: -122.6587, 
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    >
                      <Marker
                        coordinate={{ latitude: 45.5122, longitude: -122.6587 }}
                        title="Portland"
                        description="This is a marker for Portland"
                      />
                    </MapView>
                  </View>
                {/* </Link> */}
            </View>
            {/* here insert the homeaccessories component */}
            
            <View>
              <PropertiesAccessories/>
              {/* <Proper/> */}
            </View>

            <View style={styles.homeaccessoriesline}></View>

            <View style={styles.landcontent}>
              <Text style={styles.landdetails}>Close-in Forest Park Fixer on 9.76 Acres. Two lots included in the sale, 4.67 and 5.09. 
                Major development opportunity, buyer to verify all potential uses. 
                Rare opportunity to own nearly 10 acres only 2 miles from downtown!</Text>
            </View>
            

            <View style={styles.landdetailsline}></View>
            
            {/* Profile Card Section */}
            <View style={styles.profileCard}>

            <ImageBackground
            style={styles.backgroundImage}
            source={require('../../../assets/images/PropertiesImage/properties-backgroundimage.png')} // Replace with your background image path
            >

            <View >
                <Image
                    style={styles.profileImage}
                    source={require('../../../assets/images/PropertiesImage/Krishna_image.png')} // Replace with the correct image path
                />
            </View>

            <View style={styles.middleSection}>
                <View>
                    <Text style={styles.profileName}>Krishna Regupathy</Text>
                    <Text style={styles.profileTitle}>Principal Broker</Text>
                    <View style={styles.profileTitleline}></View>
                </View>
                <View>
                    <Text style={styles.profileContact}>(503) 893-8874</Text>
                </View>

                <View>
                    <View style={styles.profileIcons}>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/images/facebook.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/images/gmail-icon.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper_linkedin}>
                        <Image
                            style={styles.linkedinicon}
                            source={require('../../../assets/images/linkedin.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/images/twitterx-icon.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                    </ImageBackground>
            </View>

            <View style={styles.profileCardline}></View>

            
            {/* Accordion Section */}
            <View>
            {sections.map((section) => (
                <View
                    key={section.key}
                    style={[
                        styles.accordionSection,
                    ]}
                    >                
                    <TouchableOpacity
                  style={[styles.accordionHeader,
                    { backgroundColor: expandedSections.has(section.key) ? '#3366CC' : '#F6F6F6' },
                  ]}
                  onPress={() => toggleSection(section.key)}
                >
                <Text
                    style={[
                        styles.accordionTitle,
                        { color: expandedSections.has(section.key) ? '#fff' : '#4C4C4C' },
                    ]}
                    >
                    {section.title}
                </Text>

                 {/* Render "add" or "remove" icon based on expanded state */}
                 <MaterialIcons
                    name={expandedSections.has(section.key) ? "remove" : "add"}
                    size={20}
                    color={expandedSections.has(section.key) ? "#fff" : "#007BFF"} // White for "remove", blue for "add"
                  />
                </TouchableOpacity>

                {expandedSections.has(section.key) && (
                  <View style={styles.accordionContent}>
                    {renderSectionContent(section.key)}
                  </View>
                )}
              </View>
            ))}
          </View>
          {/* accordain end */}
          <View style={styles.accordionline}></View>

            <View>
                <View > 
                    <Text style={styles.listingheader_text}>Listing courtesy of eXp Realty, LLC</Text>
                </View>

                <View style={styles.listingContent}>
                <Image source={require('../../../assets/images/homesearch/icon/rmls-logo.png')} style={styles.listingContent_image} />

                    <Text style={styles.listingContent_text}>{'         \t'}
                    The content relating to real estate for sale on this site comes in part from the IDX program of the RMLS of Portland, Oregon. 
                    Real Estate listings held by brokerage firms other than this firm are marked with the RMLS logo, and detailed information about these properties include the name of the listing's broker. 
                    Listing content is copyright © 2019 RMLS of Portland, Oregon. 
                    All information provided is deemed reliable but is not guaranteed and should be independently verified. 
                    Krishna Realty data last checked: Oct 24, 2024 21:04 | Listing last modified Oct 23, 2024 11:11. 
                    Some properties which appear for sale on this web site may subsequently have sold or may no longer be available.
                    </Text>
                </View>
            </View>
            <View style={styles.listingContent_line}></View>

            {/* similar properties */}
            <View>
                <Text style={styles.similar_header}>Similar Properties</Text>
            </View>

            {/* Home card view component here  */}
            <View>
                <HomeSearchCardViews/>
            </View>
        </ScrollView>
      </CustomBottomSheet>
    </View>
    </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({

  Propertiescontent:{
    flex: 1,
    display:'flex',
    justifyContent:'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 15,
    top:30,
  },
  iconback:{
    flexDirection: "row",
    zIndex: 1,
    width: "20%",
    alignItems:'center',

  },
  iconfav: {
    backgroundColor: "rgba(233, 233, 233, 0.7)",
    borderRadius: 15,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },
  mapMedia:{
    width:15,
    height:15,
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 3,
  },
  bottomContainer: {
    // padding: 15,

    marginHorizontal:20,
  },
  homeaccessoriesline:{
    borderBottomWidth:1,
    borderColor:'#ECECEC',
    marginTop:25,
  },
  maps:{
    flex: 0.5,
    width:110,
    height:60,
    alignItems:'center',
    borderWidth:1,

  },
  MapContainer:{
    borderWidth:1,
    borderRadius:10,
    overflow: 'hidden',
    shadowColor:'#8C8C8C',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 4,

  },
  price:{
    fontSize:25,
    fontWeight:500,
    // marginBottom:19,
  },
  address:{
    fontSize:15,
    fontWeight:500,
  },
  pincode:{
    color:'#6F6F6F',
    fontSize:15,
    fontWeight:500,
    // marginBottom:21,
  },
  landdetails:{
    fontSize:16,
    lineHeight:25,
    paddingTop:16,
    paddingBottom:17,
    textAlign:'justify',
    fontFamily:'interRegular',
    // maxWidth:320,
  },
  landcontent:{
    // alignItems:'center',
    // textAlign:'justify',
  },
  landdetailsline:{
    borderBottomWidth:1,
    borderColor:'#ECECEC',
  },
  profileCard: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // padding: 15,
    marginTop: 20,
    elevation: 5,
    shadowColor: '#8C8C8C',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    // borderWidth:1,
    height:130,
    width:'100%',
  },
  profileCardline:{
    borderBottomWidth:1,
    marginTop:26,
    marginBottom:24,
    borderColor:'#ECECEC',
  },
  middleSection:{
    paddingTop:15,
    paddingBottom:15,
    },
  backgroundImage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    // padding: 15,
    width:130,
    height:130,
    // borderWidth:1,
    objectFit:'cover',
    overflow:'hidden',
    

  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 50,
    marginRight: 15,
    marginLeft:21,
    borderWidth:3,
    borderColor:'#FFFFFF',
    // borderra
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileTitle: {
    fontSize: 14,
    color: '#6F6F6F',
    // marginTop: 2,
  },
  profileTitleline:{
    width:30,
    backgroundColor:'#3366CC',
    height:1.5,
    borderRadius:9,
  },
  profileContact: {
    fontSize: 14,
    marginTop: 10,
    marginBottom:10,
    fontWeight: 'medium',

  },
  profileIcons: {
    flexDirection:'row',    
  },
  iconWrapper: {
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    padding: 3,
    backgroundColor: "#fff",
    // width:20,
    // height:20,
  },
  icon: {
    width: 17,
    height: 17,
    // padding:6,
  },
  iconWrapper_linkedin:{
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    paddingHorizontal: 6,
    paddingVertical:5,
    backgroundColor: "#fff",
    // height:20,
    // width:24,
    },
  linkedinicon:{
    width: 9,
    height: 8,
    resizeMode:'cover',
    // borderWidth:1,
    padding:6,
  },

  accordionSection: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    // paddingBottom:10,
    // overflow:''
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal:15,
    borderTopRightRadius:4,
    borderTopLeftRadius:4,

    // borderWidth:1,
    // paddingLeft:15,
    // borderWidth:1,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight:'medium',
    fontFamily:'interMedium',
    color: "#4C4C4C",
    letterSpacing:.3,
  },
  accordionContent: {
    // paddingTop:5,
    // paddingHorizontal:10,
    backgroundColor: "#FBFBFB",
    borderWidth:1,
    borderColor:'#ECECEC',
    // borderRadius:4,
    borderBottomRightRadius:4,
    borderBottomLeftRadius:4,

  },
  infoRow: {
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems:'flex-start',
    // marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    // paddingBottom: 4,
    padding:10,
    // marginLeft:10,
    marginHorizontal:5,
  },
  infoLabel: {
    fontSize: 15,
    color: "#6F6F6F",
    fontWeight: "500",
    width:'40%',
    fontFamily:'interRegular',
    letterSpacing:.3,
    marginRight:10,

  },
  infoValue: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#00000",
    flex:1,
    flexWrap:'wrap',
    fontFamily:'interMedium',
    letterSpacing:.1,

  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e3a8a",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 5,
    marginHorizontal:10,
    marginVertical:10,
    },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
  tableText: {
    flex: 1,
    fontSize: 12,
    color: "#000",
    fontFamily:'interRegular',
  },
  headerText: {
    fontSize: 15,
    fontWeight: "medium",
  },
  dates: {
    flex: 1,
    textAlign: "left",
  },
  event: {
    flex: 3,
    textAlign: "left",
    paddingLeft: 10,
    maxWidth:150,
  },
  accordainprice: {
    flex: 1,
    textAlign: "right",
  },
  accordionline:{
    backgroundColor:'#ECECEC',
    width:'100%',
    height:1,
    marginTop:25,
    marginBottom:20,
  },
//   listingheader:{
//     alignItems:'center',
//     justifyContent:'center',
//       },
  listingheader_text:{
    fontSize: 16,
    // fontWeight:'regular',
    marginBottom:10,
    // borderWidth:1,
  },    
  listingContent:{
    alignItems:'center',
  },
  listingContent_image:{
    width:48,
    height:18,
    resizeMode:'contain',
    position:'absolute',
    top:5,
    left:0,
    
  },
  listingContent_text:{
    fontSize: 15,
    color:'#000000',
    fontFamily:'interRegular',
    // marginBottom:10,/
    // maxWidth:332,
    lineHeight:28,
    letterSpacing:1,
    // gap:10,
    // textAlign:'justify',
  },
  listingContent_line:{
    backgroundColor:'#ECECEC',
    width:'100%',
    height:1,
    marginTop:25,
    marginBottom:20,
  },
  similar_header:{
    fontSize:18,
    fontWeight:800,
    marginBottom:8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height:'100%',
    // borderWidth:1,
    borderColor:'#fff',
  },
  imageWrapper: {
    width, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:80,
  },
  animatedModalContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   width: 300,
  //   height: 200,
  //   margin: 10,
  //   resizeMode: 'cover',
  // },
  modalImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 30, // Adjust based on your modal's design
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000', // Dark background for the button
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5, // Add elevation for Android shadow
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default PropertiesDetails;
