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
import { Icon } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";
import { useNavigation } from "@react-navigation/native";
import PropertyView from "./PropertyView";

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
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [ModalOpen, setModalOpen] = useState(null);
  const [SheetModal, setSheetModal] = useState<any>(null);
  const data = [
    {
      Address: "1455 NW Overton St, Portland, OR 97209, USA",
      id: 1,
      bath: 3,
      bedroom: 5,
      squarefeet: 1181,
      year_built: 1965,
      activity_by: "Krishna Regupathy",
      property_type: "Townhouse",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "2314 NE extraton St, Portland, OR 97209, USA",
      id: 2,
      bath: 3,
      bedroom: 4,
      squarefeet: 1659,
      year_built: 1985,
      activity_by: "Krishna Regupathy",
      property_type: "Townhouse",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "456 Elm St, Shelbyville",
      id: 3,
      bath: 1,
      bedroom: 2,
      squarefeet: 932,
      year_built: 2003,
      activity_by: "Krishna Regupathy",
      property_type: "Multi-Family",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "404 Cedar St, Springfield",
      id: 4,
      bath: 3,
      bedroom: 5,
      squarefeet: 1493,
      year_built: 1963,
      activity_by: "Agent2",
      property_type: "Multi-Family",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "606 Chestnut St, Capital City",
      id: 5,
      bath: 2,
      bedroom: 4,
      squarefeet: 3028,
      year_built: 2003,
      activity_by: "Raja",
      property_type: "Single Family",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "404 Cedar St, Springfield",
      id: 6,
      bath: 4,
      bedroom: 3,
      squarefeet: 1697,
      year_built: 2003,
      activity_by: "Agent2",
      property_type: "Single Family",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "707 Ash St, Shelbyville",
      id: 7,
      bath: 3,
      bedroom: 5,
      squarefeet: 861,
      year_built: 2015,
      activity_by: "Agent1",
      property_type: "Townhouse",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "202 Pine St, North Haverbrook",
      id: 8,
      bath: 4,
      bedroom: 1,
      squarefeet: 3473,
      year_built: 1994,
      activity_by: "Raja",
      property_type: "Townhouse",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "789 Oak St, Capital City",
      id: 9,
      bath: 3,
      bedroom: 2,
      squarefeet: 2037,
      year_built: 1969,
      activity_by: "Krishna Regupathy",
      property_type: "Condo",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
    {
      Address: "404 Cedar St, Springfield",
      id: 10,
      bath: 3,
      bedroom: 2,
      squarefeet: 981,
      year_built: 1983,
      activity_by: "Agent1",
      property_type: "Condo",
      activityAt: "Oct 06, 2024 - 05:45 AM",
      propertyImage: require("../../../assets/images/dummyCardImage.png"),
    },
  ];

  // Function to open the modal for a specific card
  const openModal = (id: any) => {
    // alert('test')
    setModalOpen(id);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(null);
  };

  function handleView(item: DataType) {
    setSheetModal(item);
    Keyboard.dismiss();
    bottomSheetModalRef.current?.present();
  }

  const renderitem = ({ item }: { item: DataType }) => (
    <View>
      <TouchableOpacity
        style={
          item.id === ModalOpen
            ? [styles.propertyCard, styles.selectedPropertyCard]
            : styles.propertyCard
        }
        onPress={() => openModal(item.id)}
      >
        <View style={styles.cardtop}>
          <Image
            source={item.propertyImage}
            style={{
              width: 75,
              height: 75,
              borderRadius: 6,
              margin: "2.5%",
            }}
          />
          <View>
            <Text style={styles.cardAddressText}>{item.Address}</Text>
            <View style={styles.PropertyDetails}>
              <View style={styles.Propertybed}>
                <Image
                  source={require("../../../assets/images/homesearch/icon/bed-single-hotel.png")}
                  style={{ width: 14, height: 16 }}
                />
                <Text style={styles.bedqty}>{item.bedroom}</Text>
              </View>
              <View style={styles.Propertybath}>
                <Image
                  source={require("../../../assets/images/homesearch/icon/bath.png")}
                  style={{ width: 12, height: 14 }}
                />
                <Text style={styles.bathqty}>{item.bath}</Text>
              </View>
              <View style={styles.Propertyarea}>
                <Image
                  source={require("../../../assets/images/homesearch/icon/square-measument.png")}
                  style={{ width: 12, height: 14 }}
                />
                <Text style={styles.areaqty}>{item.squarefeet}</Text>
              </View>
              <View style={styles.Propertyarea}>
                <Image
                  source={require("../../../assets/images/admin/images/properties/Year.png")}
                  style={{ width: 12, height: 14 }}
                />
                <Text style={styles.areaqty}>{item.year_built}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: "row" }}
          >
            <View style={styles.propertyTypeCard}>
              <Text style={styles.propertyType}>Type:</Text>
              <Text style={styles.propertyTypeValue}>{item.property_type}</Text>
            </View>
            <View style={styles.propertyActivityByCard}>
              <Text style={styles.propertyAtivityBy}>Activity By:</Text>
              <Text style={styles.propertyAtivityByValue}>
                {item.activity_by}
              </Text>
            </View>
            <View style={styles.propertyActivityAtCard}>
              <Text style={styles.propertyAtivityAt}>Activity At:</Text>
              <Text style={styles.propertyAtivityAtValue}>
                {item.activityAt}
              </Text>
            </View>
          </ScrollView>
        </View>
        {ModalOpen === item.id && (
          <TouchableOpacity style={styles.ModalContainer} onPress={closeModal}>
            <View style={styles.Modal}>
              <TouchableOpacity style={styles.ModalNote} onPress={() => {}}>
                <Image
                  source={require("../../../assets/images/admin/images/properties/Note.png")}
                  style={{ width: 21, height: 21 }}
                />
                <Text style={styles.addnote}>Add Note</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ModalEdit}>
                <Image
                  source={require("../../../assets/images/admin/images/properties/Edit-white.png")}
                  style={{ width: 26, height: 26 }}
                />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ModalView}
                onPress={() => handleView(item)}
              >
                <Image
                  source={require("../../../assets/images/admin/images/properties/Eye.png")}
                  style={{ width: 28, height: 16 }}
                />
                <Text style={styles.view}>View</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <CustomBottomsheetModel
        snapPoints={["90%", "100%", "90%"]}
        initialIndex={1}
        bottomSheetRef={bottomSheetModalRef}
      >
        <PropertyView property={SheetModal} />
      </CustomBottomsheetModel>
    </View>
  );

  return (
    <View>
      <View style={{ margin: 10 }}>
        <TextInput
          style={styles.bottomSheetSearchInput}
          placeholder="Ticket Search"
          //   value={searchQuery}
          //   onChangeText={onChangeSearch}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          //   onPress={() => setSearchQuery("")}
          style={styles.searchIcon}
        >
          <Icon
            // name={searchQuery ? "close" : "search"}
            size={24}
            color="#666"
            source={undefined}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data} // Array of data
          keyExtractor={(item) => item.id.toString()} // Unique identifier for each item
          renderItem={renderitem} // How to render each item
        />
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
    width: 223,
    height: 65,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
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
    width: 26,
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
    width: 26,
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
    minWidth:'42.5%'
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
    minWidth:'35%'
  },
  propertyAtivityAtValue: {
    fontFamily: "rubikLight",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityByValue: {
    fontFamily: "rubikLight",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityAt: {
    fontFamily: "rubikRegular",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyAtivityBy: {
    fontFamily: "rubikRegular",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyTypeValue: {
    fontFamily: "rubikLight",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  cardBottom: {
    marginTop: 30,
    marginLeft: 5,
    flex: 1,
  },
  propertyType: {
    fontFamily: "rubikRegular",
    fontSize: 13,
    letterSpacing: 0.2,
    lineHeight: 22,
    color: "#000000",
  },
  propertyTypeCard: {
    // width: 93,
    height: 50,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 5,
    paddingLeft: 5,
    minWidth:'25%'
  },
  cardtop: {
    flex: 1,
    flexDirection: "row",
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
    width: "65%",
    height: 44,
    fontSize: 16,
    fontFamily: "interRegular",
    letterSpacing: 0.2,
    marginTop: 10,
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
    width: "90%",
    height: 160,
    borderWidth: 1,
    margin: "5%",
    borderRadius: 6,
    borderColor: "#EAEAEA",
    flex: 1,
    position: "relative",
    marginBottom:0,
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
});
