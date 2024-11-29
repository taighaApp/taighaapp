import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ImageBackground ,FlatList,
    Animated,Pressable,Share, Alert,SafeAreaView} from "react-native";
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


const PropertiesDetails = () => {
  const bottomSheetRef = useRef(null);

const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
const sectionRefs = useRef<{ [key: string]: React.RefObject<View> }>({});
  
    const sections = [
        { title: "General Information", key: "general" },
        { title: "Residence Information", key: "residence" },
        { title: "Features And Utilities", key: "features" },
        { title: "Financial", key: "financial" },
        { title: "Comparable Information", key: "comparable" },
        { title: "Schools", key: "schools"},
        { title: "History", key: "history" },
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

  // Initialize refs for each section
  sections.forEach((section) => {
    if (!sectionRefs.current[section.key]) {
      sectionRefs.current[section.key] = React.createRef();
    }
  });
  
  const toggleSection = (key: string) => {
    const newExpandedSections = new Set(expandedSections);
    
    if (newExpandedSections.has(key)) {
      newExpandedSections.delete(key);
    } else {
      newExpandedSections.add(key);
    }
    
    setExpandedSections(newExpandedSections);
  };

  const renderSectionContent = (key: string) => {
    switch(key) {
      case "general":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>MLS#</Text>
              <Text style={styles.infoValue}>24395515</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Type</Text>
              <Text style={styles.infoValue}>SingleFamilyResidence</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Days on Market</Text>
              <Text style={styles.infoValue}>203 DOM</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Beds</Text>
              <Text style={styles.infoValue}>0</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Lot Size</Text>
              <Text style={styles.infoValue}>9.76 acres</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Baths</Text>
              <Text style={styles.infoValue}>0</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>SqFt</Text>
              <Text style={styles.infoValue}>-</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Year built</Text>
              <Text style={styles.infoValue}>-</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>County</Text>
              <Text style={styles.infoValue}>Multnomah</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Tax ID</Text>
              <Text style={styles.infoValue}>R324437</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Elem</Text>
              <Text style={styles.infoValue}>Forest Park</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Middle</Text>
              <Text style={styles.infoValue}>West Sylvan</Text>
            </View>
          </View>
        );
      case "residence":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Residence Details</Text>
              <Text style={styles.infoValue}>More Information</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Residence Details</Text>
              <Text style={styles.infoValue}>More Information</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Residence Details</Text>
              <Text style={styles.infoValue}>More Information</Text>
            </View>
          </View>
        );
      case "features":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Features</Text>
              <Text style={styles.infoValue}>Property Features</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Features</Text>
              <Text style={styles.infoValue}>Property Features</Text>
            </View>
          </View>
        );
      case "financial":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Financial Details</Text>
              <Text style={styles.infoValue}>Pricing Information</Text>
            </View>
          </View>
        );
      case "comparable":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Comparable Properties</Text>
              <Text style={styles.infoValue}>Nearby Listings</Text>
            </View>
          </View>
        );
      case "schools":
        return (
          <View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Nearby Schools</Text>
              <Text style={styles.infoValue}>School District</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Nearby Schools</Text>
              <Text style={styles.infoValue}>School District</Text>
            </View>
          </View>
        );
      case "history":
        return (
          <View>
                {/* Table Section */}
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                    <Text style={[styles.tableText, styles.headerText, styles.dates]}>Dates</Text>
                    <Text style={[styles.tableText, styles.headerText, styles.event]}>Event & Source</Text>
                    <Text style={[styles.tableText, styles.headerText, styles.accordainprice]}>Price</Text>
                    </View>

                    {/* Row 1 */}
                    <View style={styles.tableRow}>
                    <Text style={[styles.tableText, styles.dates]}>10-23-2024</Text>
                    <Text style={[styles.tableText, styles.event]}>
                        Active (Price Changed) MLS #24395515
                    </Text>
                    <Text style={[styles.tableText, styles.accordainprice]}>$625,000</Text>
                    </View>

                    {/* Row 2 */}
                    <View style={styles.tableRow}>
                    <Text style={[styles.tableText, styles.dates]}>10-23-2024</Text>
                    <Text style={[styles.tableText, styles.event]}>
                        Active (Price Changed) MLS #24395515
                    </Text>
                    <Text style={[styles.tableText, styles.accordainprice]}>$625,000</Text>
                    </View>

                    {/* Row 3 */}
                    <View style={styles.tableRow}>
                    <Text style={[styles.tableText, styles.dates]}>10-23-2024</Text>
                    <Text style={[styles.tableText, styles.event]}>
                        Active (Price Changed) MLS #24395515
                    </Text>
                    <Text style={[styles.tableText, styles.accordainprice]}>$625,000</Text>
                    </View>

                    {/* Row 4 */}
                    <View style={styles.tableRow}>
                    <Text style={[styles.tableText, styles.dates]}>10-23-2024</Text>
                    <Text style={[styles.tableText, styles.event]}>
                        Active (Price Changed) MLS #24395515
                    </Text>
                    <Text style={[styles.tableText, styles.accordainprice]}>$625,000</Text>
                    </View>
                </View>
          </View>
        );
      default:
        return null;
    }
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
                {/* <Link href={'/HomeSearch'}> */}
                    {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
                    <Image style={{width:20,height:20}} source={require('../../assets/images/PropertiesImage/properties-backarrow.png')}/>
                {/* </Link> */}
              </Pressable>
            </View>

            <View style={{flexDirection:'row' , gap:10}}>
            <Pressable style={styles.iconfav}>
              <Image style={styles.mapMedia} source={require('../../assets/images/PropertiesImage/properties-fav.png')}/>
            </Pressable>

            <Pressable style={styles.iconfav} onPress={handleShare}>
              <Image style={styles.mapMedia} source={require('../../assets/images/PropertiesImage/properties-share.png')}/>
            </Pressable>
            </View>
 
          </View>


            <ScrollView >
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/property-image.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-inside.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-showcase.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/property-image.png')} />
                <Image style={styles.image} source={require('../../assets/images/PropertiesImage/properties-inside.png')} />
            </ScrollView>
        </SafeAreaView>
        </View>



        

      <CustomBottomSheet>
        <ScrollView contentContainerStyle={styles.bottomContainer} showsVerticalScrollIndicator={false}>

        <Text style={styles.price}>$1,250,000</Text>

            <View style={{  flexDirection: 'row', alignItems: 'center', marginBottom:14, }}>

                <View style={styles.Propertiescontent}>
                    <Text style={styles.address}>9007 NW BARTHOLOMEW DR</Text>
                    <Text style={styles.pincode}>Portland, OR, 97229</Text>
                </View>
                <View style={styles.maps}>
                    <Text>Maps</Text>
                </View>
            </View>
            {/* here insert the homeaccessories component */}
            
            <View>
              <HomeAccessories/>
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
            source={require('../../assets/images/PropertiesImage/properties-backgroundimage.png')} // Replace with your background image path
            >

            <View >
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/images/PropertiesImage/Krishna_image.png')} // Replace with the correct image path
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
                            source={require('../../assets/images/facebook.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/images/gmail-icon.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.linkedinicon}
                            source={require('../../assets/images/linkedin.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconWrapper}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/images/twitterx-icon.png')}
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
                        { backgroundColor: expandedSections.has(section.key) ? '#3366CC' : '#F6F6F6' },
                    ]}
                    >                
                    <TouchableOpacity
                  style={styles.accordionHeader}
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

                {!expandedSections.has(section.key) && (
                <MaterialIcons
                    name="add"
                    size={24}
                    color="#007BFF"
                />
                )}
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
                    
                    <Text style={styles.listingContent_text}>
                    <Image source={require('../../assets/images/homesearch/icon/rmls-logo.png')} style={styles.listingContent_image} />
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
    padding: 20,
  },
  homeaccessoriesline:{
    borderBottomWidth:1,
    borderColor:'#ECECEC',
    marginTop:25,
  },
  maps:{
    borderWidth:1,
    flex: 0.5,
    // width:100,
    height:50,
    borderRadius:5,
    alignItems:'center',
  },
  price:{
    fontSize:25,
    fontWeight:500,
    marginBottom:19,
  },
  address:{
    fontSize:15,
    fontWeight:500,
  },
  pincode:{
    color:'#6F6F6F',
    fontSize:15,
    // marginBottom:21,
  },
  landdetails:{
    fontSize:16,
    lineHeight:25,
    paddingTop:16,
    paddingBottom:17,
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
    elevation: 3,
    shadowColor: '#000',
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
    // borderRadius: 10,
    // padding: 15,
    width:140,
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
    marginLeft:30,
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
    height:1,
  },
  profileContact: {
    fontSize: 14,
    marginTop: 10,
    marginBottom:10,
    fontWeight: 'bold',

  },
  profileIcons: {
    flexDirection:'row',    
  },
  iconWrapper: {
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    padding: 6,
    backgroundColor: "#fff",
  },
  icon: {
    width: 24,
    height: 24,
  },
  linkedinicon:{
    width: 24,
    height: 21,
    resizeMode:'cover',
  },

  accordionSection: {
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal:15,
    // paddingLeft:15,
    // borderWidth:1,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: "#333",

  },
  accordionContent: {
    padding: 16,
    backgroundColor: "#FBFBFB",
    borderWidth:1,
    borderColor:'#ECECEC',
    borderRadius:4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems:'flex-start',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    // paddingBottom: 4,
    padding:10,
  },
  infoLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
    width:'42%',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    flex:1,
    flexWrap:'wrap',
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e3a8a",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    padding: 10,
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableText: {
    flex: 1,
    fontSize: 12,
    color: "#000",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
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
  },
  listingContent_text:{
    fontSize: 15,
    fontWeight:'regular',
    marginBottom:10,
    // maxWidth:332,
    lineHeight:28,
    letterSpacing:1,
    
    // gap:10,
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
});

export default PropertiesDetails;
