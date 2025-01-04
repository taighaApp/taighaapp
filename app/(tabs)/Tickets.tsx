import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
  LayoutAnimation,
  Button,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { FAB, Searchbar } from "react-native-paper";
import CustomBottomSheet from "@/components/common/CustomBottomSheet";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";
import Header from "@/app/Admin/tickets/Header";
import TicketDetails from "@/app/Admin/tickets/TicketDetails";
import { useGlobalContext } from "@/hooks/context/GlobalContext";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { router } from "expo-router";

const { width, height: windowHeight } = Dimensions.get("window");

const Tickets: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openHouseoption, setOpenHouseoption] = useState("Batch action");
  const [checked, setChecked] = useState(false);
  const [profileRead, setProfileRead] = useState(true);
  const [readContent, setReadContent] = useState(true);
  const firstSheetRef = useRef<BottomSheetModal>(null);
  const secondSheetRef = useRef<BottomSheetModal>(null);
  const { bottomSheetShow,setBottomSheetShow } = useGlobalContext();

const [searchQuery, setSearchQuery] = useState<string>('');
const swipeRefs = useRef<Record<string, Swipeable | null>>({});
const [selectedItemId, setSelectedItemId] = useState<any[]>([]);


  const batchAction = [
    { id: 1, batchActionValue: "Favorite" },
    { id: 2, batchActionValue: "Request Tour" },
    { id: 3, batchActionValue: "Ask a Question" },
    { id: 4, batchActionValue: "Start Offer" },
  ];

  const onChange = () => setChecked(!checked);

    const autoHideSwaptext = (item:any)=>{
          // Automatically close the swipeable item after 1 second
          setTimeout(() => {
              const swipeable = swipeRefs.current[item?.id];
              if (swipeable) {
                  swipeable.close();
              }
          }, 100);
    }
  
      const [ticketDetailsSheetVisible, setTicketDetailsSheetVisible] = useState(false);
  
      
      const openSecondSheet = (item:any) => {
        setSelectedItemId([item]);  
        setTicketDetailsSheetVisible(true);
        if (secondSheetRef.current?.snapToIndex) {
          secondSheetRef.current?.snapToIndex(1);
        }
      };
    


        // Handle swipe left
        const handleSwipeLeft = (item:any) => {
          if (!item) return;   
          autoHideSwaptext(item.id); 
      };
  
      // Render right swipe action
      const renderLeftActions = () => (
      <View style={[styles.actionContainer, styles.rightAction]}>
          <Text style={styles.actionText}>Swipe Right</Text>
      </View>
      );
  
      // Render right swipe action
      const renderRightActions = () => (
      <View style={[styles.actionContainer, styles.rightAction]}>
          <Text style={styles.actionText}>Swipe to Details Page</Text>
      </View>
      );
    
            //  tickets data
        const ticketData = [
          {
            id: 1,
            name: "Krishna Regupathy",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C24056",
            role: 'Customer',
            content: "9957 SW Scott Ct, Portland, OR - Work Order - Home Winterizing and water bill Home Winterizing and water bill Home Winterizing and water bill Home Winterizing and water bill",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 2,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 2,
            name: "ps Dinesh",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00002",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-2.jpg'),
            threadCount: 6,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:false,
            readContent:false,
          },
          {
            id: 3,
            name: "R Raja",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00003",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-3.jpg'),
            threadCount: 8,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 4,
            name: "Shyam",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00004",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 10,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:false,
            readContent:false,
          },
          {
            id: 5,
            name: "Ranjith",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00005",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 6,
            name: "ayyanraj",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00006",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 7,
            name: "Sabari",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00007",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 8,
            name: "Santhosh",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00008",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 9,
            name: "Logesh",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C00009",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
          {
            id: 10,
            name: "Krishna Regupathy",
            time: "12:04 PM",
            heading: "Dear Test Customer, this will ticket...",
            ticketId: "C000010",
            role: 'Customer',
            content: "198 NE, Form Ironcreek Terrace, Hill ... ",
            profileImage: require('../../assets/images/dummy-1.jpg'),
            threadCount: 12,
            replyImage: require('../../assets/images/admin/images/tickets/email-reply.png'),
            profileRead:true,
            readContent:true,
          },
        ];
      
        const [filteredData, setFilteredData] = useState(ticketData);
      
        const onChangeSearch = (text:string)=>{
          setSearchQuery(text);
      
          if (text.trim() === "") {
            setFilteredData(ticketData); // Reset to original data if search is cleared
          } else {
            const filtered = ticketData.filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase()) // Case-insensitive search
            );
            setFilteredData(filtered);
          }
        }

      // Handle swipe right
      const handleSwipeRight = (item:any) => {
        if (!item) return; 
        autoHideSwaptext(item);
        openSecondSheet(item);
      };

        const SearchHeader = () => (
          <View style={{marginHorizontal:20,}}>
            <TextInput
              style={styles.bottomSheetSearchInput}
              placeholder="Ticket Search"
              value={searchQuery}
              onChangeText={onChangeSearch}
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
              style={styles.searchIcon}
            >
              <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
            </TouchableOpacity>
          </View>
        );
      
        const renderTicketItem = ({ item }: { item: any }) => (
          <View style={{flex:1}}>
          <Swipeable
          key={item.id}
          ref={(ref) => {
            if (ref) swipeRefs.current[item.id] = ref;
          }} // Save ref for each item
          renderLeftActions={renderLeftActions} // Right swipe action
          renderRightActions={renderRightActions} // Right swipe action
          onSwipeableLeftOpen={() => handleSwipeLeft(item)} // Triggered when swiped right
          onSwipeableRightOpen={() => handleSwipeRight(item)} // Triggered when swiped right
      >
        <TouchableOpacity key={item.id} onPress={() => openSecondSheet(item)}>
            <View style={{marginTop:25,}}>
            <View style={{flexDirection:'row',margin:'auto',}}>
            <View style={{width:50,height:50,borderRadius:50,}}>
                <Image style={{width:'100%',height:'100%',borderRadius:50,}} source={item.profileImage} />
            </View>
      
            <View style={{flexDirection:'column',justifyContent:'space-between',width: width-110,marginLeft:15,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={[styles.profileNameBase, item.profileRead ? styles.profileNameRead : styles.profileNameUnread]}>{item.name}</Text>
                <Text style={[styles.timeNameBase,item.readContent? styles.timeRead : styles.timeUnRead]}>{item.time}</Text>
                </View>
      
                <View>
                <Text style={[styles.readContentBase,item.readContent? styles.rearData: styles.unRearData ]} numberOfLines={1}>
                    {item.heading}
                </Text>
                </View>
      
                <Text numberOfLines={2} style={{width:'80%',}}>
                    <Text style={{fontFamily:'rubikLight',color:'#767676',fontSize:16,lineHeight:19,letterSpacing:0.2}}>{item.ticketId}{` `}:</Text>
                    <Text style={{fontFamily:'rubikLight',fontSize:16,lineHeight:19,letterSpacing:0.2}}>{` `}{item.role}{` `}: </Text>
                    <Text style={{fontFamily:'rubikLight',fontSize:16,lineHeight:19,letterSpacing:0.2,color:'#242424'}}>
                    {item.content}
                    </Text>
                </Text>
      
                <View style={{ flexDirection:'row',position:'absolute',right:0,bottom:0 }}>
                <Text style={styles.emailCount}>({item.threadCount})</Text>
                <Image style={{width:20,height:20,}} source={item.replyImage}/>
                </View>
            </View>
        </View>
        <View style={{borderColor:'#ECECEC',borderWidth:1,marginTop:20,marginLeft:85,width:width-110}}/>
        </View>
        </TouchableOpacity>
        </Swipeable>
      
      </View>
        );
      
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bottomSheetContent}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      {/* ticket/header component*/}
      <Header />

      <CustomBottomSheet
        style={styles.WithBottomSheetShadow}
        snapPoints={["80%", "100%"]}
        initialIndex={0}
        ref={firstSheetRef}
        borderRadius={30}
      >
      {filteredData.length > 0 ? (
          <FlatList
              nestedScrollEnabled={true}
              ListHeaderComponent={SearchHeader}
              data={filteredData} // Use the filtered data for dynamic search
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderTicketItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
          />
      ) : (
          <Text>No data found...</Text>
      )}
      </CustomBottomSheet>

      {ticketDetailsSheetVisible && (
            <CustomBottomSheet
              style={styles.WithBottomSheetShadow}
              snapPoints={[ "50%", "90%", "100%"]}
              initialIndex={1}
              ref={secondSheetRef}
              showHandleIndicator={true}
              useBackdrop={true}
              borderRadius={30}
              onIndexChange={(index) => {
                if(index === 0){
                  secondSheetRef.current?.close();
                  setBottomSheetShow(true);
                }}}
            >
              <TicketDetails ticketDatas={selectedItemId}  />
            </CustomBottomSheet>
      ) }

      {/* fixed create button */}
      <FAB
        style={styles.fab}
        onPress={() => console.log("Pressed")}
        icon={() => (
          <Image
            style={{ width: 17, height: 17, margin: "auto" }}
            source={require("../../assets/images/admin/images/tickets/gradiant-plus.png")} // Replace with your image
          />
        )}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
    backgroundColor: "#3366CC",
  },
  container: {
    flex: 1,
    borderWidth: 1,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: "#ffff",
    height: 30,
    paddingHorizontal: 7,
    borderRadius: 3,
    borderColor: "#EAEAEA",
    // paddingVertical: 8,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: 5,
    borderColor: "#AFAFAF",
    borderWidth: 0.5,
  },
  dropdownButton: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  WithBottomSheetShadow:{ 
    shadowColor: "#000000", 
    shadowOpacity: 0.2, 
    elevation: 10, 
    shadowOffset: { width: 0, height: 8 },
    backgroundColor:'white'
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
  },
  searchbar: {
    borderRadius: 8,
    height: 40,
    margin: 6,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  searchbarInput: {
    fontSize: 14,
    textAlign: "center",
  },

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  bottomSheetSearchContainer: {
    position: "relative",
    marginBottom: 16,
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  rightAction: {
    backgroundColor: "#4CAF50",
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileNameBase:{
    fontSize:17,
  },
  profileNameUnread:{
    fontFamily:'rubikMedium',
  },
  profileNameRead:{
    fontFamily:'rubikRegular',
  },
  timeNameBase:{
    fontFamily:'rubikLight',
    fontSize:13,
    letterSpacing:0.2
  },
  timeRead:{
    color:'#000000',
  },
  timeUnRead:{
    color:'#3366CC',
  },
  readContentBase:{
    fontSize:17,
    letterSpacing:0.2,
    paddingBottom:5,
  },
  rearData:{
    fontFamily:'rubikLight',
  },
  unRearData:{
    fontFamily:'rubikMedium',
  },
  emailCount:{
    right:25,
    fontFamily:'rubikMedium',
  },
  bottomSheetSearchInput: {
    height: 40,
    paddingVertical:'auto',
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingLeft: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  searchResults: {
    flex: 1,
  },
});
export default Tickets;

// propertyListView card;

//   <ScrollView style={{flex:1,paddingHorizontal:20,}}>
//   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
//    <View style={[styles.checkboxWrapper,{marginBottom:0 }]}>
//       <Pressable
//         role="checkbox"
//         aria-checked={checked}
//         style={styles.checkbox}
//         onPress={onChange}>
//         {checked && <Image style={{width:20,height:20}} source={require('../../assets/images/homesearch/icon/checked-box.png')}/>}
//       </Pressable>
//       <Text>Selected</Text>
//    </View>

//       <View style={{marginBottom:10,}}>
//         <Pressable style={styles.dropdownButton} onPress={ handlePresentModalPress }>
//           <Text style={styles.buttonText}>{openHouseoption}</Text>
//           <AntDesign name="down" size={17} color="black" />
//       </Pressable>
//       {/* Half-Screen Modal */}

//     <CustomBottomsheetModel
//     bottomSheetRef={bottomSheetModalRef}
//     snapPoints={['10%', '37%']}
//     showHandleIndicator={false}
//     >
//       <View style={{}}>
//         <View style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',paddingVertical:15,}}>
//             <Text style={{color:'#fff',fontSize:16,}}>Batch Actions</Text>
//         </View>
//         <View>
//             {batchAction.map((item)=>(
//               <View key={item.id} style={{borderBottomWidth:1,borderColor:'#ECECEC'}}>
//                 <Text style={{color:'#AEAEAE',padding:15,fontSize:16}}>{item.batchActionValue}</Text>
//               </View>
//             ))}
//         </View>
//           <View style={{flexDirection:'row',alignItems:'center',height:60}}>
//            <TouchableOpacity style={{width:'50%'}} onPress={handleDismiss}>
//             <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Cancel</Text>
//             </TouchableOpacity>
//             <View style={{borderWidth:1,height:20,borderColor:'#ECECEC'}}/>
//            <TouchableOpacity style={{borderRightWidth:1,width:'50%'}} onPress={handleDismiss}>
//             <Text style={{color:'#3366cc',fontSize:16,textAlign:'center'}}>Ok</Text>
//             </TouchableOpacity>
//           </View>
//   </View>
//   </CustomBottomsheetModel>
//    </View>
//   </View>
//   <PropertyListView route={route}/>
//   {/* <PropertiesDetails/> */}
// </ScrollView>
