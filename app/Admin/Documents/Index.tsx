import React, { useCallback, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { Icon } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from "react-native-gesture-handler";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
// import PropertyView from "./PropertyView";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";

type DataType = {
  Address: string;
  id: number;
  bath: number;
  bedroom: number;
  squarefeet: number;
  year_built: number;
  activity_by: string;
  property_type: string;
  activityAt: string;
  propertyImage: ImageSourcePropType | undefined;
};

export default function Index() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState(data);
    
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [ModalOpen, setModalOpen] = useState(null);
  const data = [
    {
      id: '1',
      title: 'HOA Insurance',
      assigned: 'Customer Uploaded',
      dueDate: 'Oct 07 2024 at 04:18 AM - Anu Customer',
      status: 'Not Complete',
      updated: 'Oct 11 2024 01:37 AM - Jon',
      customer: '142 Mystic Ave, Medford, MA 02155, USA',
    },
    {
      id: '2',
      title: 'Landlord Insurance',
      assigned: 'Customer Uploaded',
      dueDate: 'Oct 07 2024 at 04:18 AM - Anu Customer',
      status: 'Not Complete',
      updated: 'Oct 11 2024 01:37 AM - Jon',
      customer: '123 William St, New York, NY 10038, USA',
    },
    
  ];

  const onChangeSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to open the modal for a specific card
  const openModal = (id: any) => {
    // alert('test')
    setModalOpen(id);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(null);
  };

  function handleView() {
    Keyboard.dismiss();
    bottomSheetModalRef.current?.present();
  }


  return (
    <View>

        {/* Search Input */}
              <View style={{marginBottom:30,}}>
                <TextInput
                  style={styles.bottomSheetSearchInput}
                  placeholder="Documents Search"
                  value={searchQuery}
                  onChangeText={onChangeSearch}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity onPress={() => setSearchQuery("")} style={styles.searchIcon}>
                  <Icon name={searchQuery ? 'close' : 'search'} size={24} color="#666" />
                </TouchableOpacity>
              </View>
      <View>
        <FlatList
          data={data} // Array of data
          keyExtractor={(item) => item.id.toString()} // Unique identifier for each item
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={
                  item.id === ModalOpen
                    ? [styles.propertyCard, styles.selectedPropertyCard]
                    : styles.propertyCard
                }
                onPress={() => openModal(item.id)}
              >
                  
                  <View style={{paddingHorizontal:15,paddingVertical:15}}>
                    <Text style={styles.cardAddressText}>{item.title}</Text>
                    <View style={styles.row}>
                    <Image
                      source={require('../../../assets/images/admin/images/Documents/house_icon.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.customerText}>{item.customer}</Text>
                  </View>
                  </View>

                <View style={styles.cardBottom}>
                  

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flexDirection: "row" }}
                  >
                    <View style={styles.documentDetailsBox}>
                      <Text style={styles.detailsLabel}>Document Group:</Text>
                      <Text style={styles.detailsValue}>
                        {item.assigned}
                      </Text>
                    </View>
                    <View style={styles.documentDetailsBox}>
                      <Text style={styles.detailsLabel}>Created:</Text>
                      <Text style={styles.detailsValue}>
                        {item.dueDate}
                      </Text>
                    </View>
                    <View style={styles.documentDetailsBox}>
                      <Text style={styles.detailsLabel}>Updated:</Text>
                      <Text style={styles.detailsValue}>
                        {item.updated}
                      </Text>
                    </View>
                    </ScrollView>
                 
                </View>

                {ModalOpen === item.id && (
                  <TouchableOpacity
                    style={styles.ModalContainer}
                    onPress={closeModal}
                  >
                    <View style={styles.Modal}>
                       
                      <TouchableOpacity
                        style={styles.ModalView}
                        onPress={() => {
                          handleView();
                        }}
                      >
                        <Image
                          source={require("../../../assets/images/admin/images/Documents/view_icon.png")}
                          style={{ width: 32, height: 32 }}
                        />
                        <Text style={styles.view}>View</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.ModalNote}
                        onPress={() => {}}
                      >
                        <Image
                          source={require("../../../assets/images/admin/images/Documents/download_icon.png")}
                          style={{ width: 32, height: 32 }}
                        />
                        <Text style={styles.addnote}>Download</Text>
                      </TouchableOpacity>

                    </View>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            </View>
          )} // How to render each item
        />
      </View>
      <View>
        {/* <CustomBottomsheetModel
          snapPoints={["80%", "100%", "150%"]}
          initialIndex={0}
          bottomSheetRef={bottomSheetModalRef}
        >
          <View>
            <PropertyView />
          </View>
        </CustomBottomsheetModel> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedPropertyCard: {
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  ModalContainer: {
    width: "100%",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 6,
    position: "absolute",
  },
  Modal: {
    backgroundColor: "#000000",
    width: 175,
    height: 65,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  view: {
    fontSize: 11,
    color: "#FFFFFF",
    fontFamily: "rubikRegular",
  },
  addnote: {
    fontSize: 11,
    color: "#FFFFFF",
    fontFamily: "rubikRegular",
  },
  edit: {
    fontSize: 11,
    color: "#FFFFFF",
    fontFamily: "rubikRegular",
  },
  ModalView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 35,
    height: 48,
  },
  ModalEdit: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 26,
    height: 48,
  },
  ModalNote: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 51,
    height: 48,
  },
  propertyActivityAtCard: {
    // width: 166,
    height: 50,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "baseline",
    paddingLeft: 5,
    marginRight: 5,
  },
  propertyActivityByCard: {
    // width: 134,
    height: 50,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 5,
    paddingLeft: 5,
  },
  propertyAtivityAtValue: {
    fontFamily: "rubikLight",
    fontSize: 13,
    letterSpacing: 1.5,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityByValue: {
    fontFamily: "rubikLight",
    fontSize: 13,
    letterSpacing: 2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityAt: {
    fontFamily: "rubikRegular",
    fontSize: 13,
    letterSpacing: 2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityBy: {
    fontFamily: "interRegular",
    fontSize: 13,
    letterSpacing: 0.7,
    lineHeight: 22,
    color: "#000000",
  },
  detailsValue: {
    fontFamily: "interRegular",
    fontSize: 13,
    lineHeight: 22,
    color: "#000000",
  },
  cardBottom: {
    // marginTop: 30,
    // marginLeft: 5,
    marginHorizontal:10,
    flex: 1,
  },
  detailsLabel: {
    fontFamily: "rubikRegular",
    fontSize: 13,
    letterSpacing: 2,
    lineHeight: 22,
    color: "#000000",
  },
  documentDetailsBox: {
    height: 50,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 5,
    paddingHorizontal:10,
    paddingVertical:10,
  },

  PropertyDetails: {
    width: 250,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Propertyarea: {
    width: 68,
    height: 25,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Propertybed: {
    width: 43,
    height: 25,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Propertybath: {
    width: 43,
    height: 25,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  areaqty: {
    color: "#8C8C8C",
    fontSize: 15,
    fontFamily: "LatoRegular",
  },
  bedqty: {
    color: "#8C8C8C",
    fontSize: 15,
    fontFamily: "LatoRegular",
  },
  bathqty: {
    color: "#8C8C8C",
    fontSize: 15,
    fontFamily: "LatoRegular",
  },
  cardAddressText: {
    fontSize: 16,
    fontFamily: "interRegular",
    letterSpacing: 2,
    marginBottom:15,
  },
  row: { 
    flexDirection: 'row', 
  },
  icon: { 
    width: 16, 
    height: 16, 
    marginRight: 10 
  },
  customerText: { 
    fontSize: 14, 
    color: '#000' ,
    fontFamily:'interRegular',
  },


  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomSheetSearchInput: {
    height: 40,
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingLeft: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  propertyCard: {
    height: 150,
    borderWidth: 1,
    marginBottom:20,
    borderRadius: 6,
    borderColor: "#EAEAEA",
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
});