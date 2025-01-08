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
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { FAB, Searchbar } from "react-native-paper";
import CustomBottomSheet from "@/components/common/CustomBottomSheet";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";
import Index from "../Mails/Index";
import TicketDetails from "../tickets/TicketDetails";
import Header from "@/components/Admin/Header";
const { width, height: windowHeight } = Dimensions.get("window");
interface FlatListProps {
  id: number;
  name: string;
  time: string;
  heading: string;
  ticketId: string;
  content: string;
  profileImage: any;
  threadCount: number;
  replyImage: any;
  profileRead: boolean;
  readContent: boolean;
}

const Mails: React.FC<FlatListProps> = ({ route }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openHouseoption, setOpenHouseoption] = useState("Batch action");
  const [checked, setChecked] = useState(false);
  const [profileRead, setProfileRead] = useState(true);
  const [readContent, setReadContent] = useState(true);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const batchAction = [
    { id: 1, batchActionValue: "Favorite" },
    { id: 2, batchActionValue: "Request Tour" },
    { id: 3, batchActionValue: "Ask a Question" },
    { id: 4, batchActionValue: "Start Offer" },
  ];

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    console.log("Bottom sheet opened");
    setIsVisible(!isVisible);
  }, []);

  const handleDismiss = useCallback(() => {
    bottomSheetModalRef.current?.close();
    console.log("Dismiss button pressed");
  }, []);

  const onChange = () => setChecked(!checked);
  return (
    <LinearGradient
      colors={["#854BD0CC", "#3366CC"]}
      locations={[0, 0.5]}
      start={{ x: -0.3, y: 0.9 }}
      end={{ x: 2.2, y: 0.5 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bottomSheetContent}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        {/* ticket/header component*/}
        <Header />

        {/* ticket List component*/}

        <CustomBottomSheet
          snapPoints={["80%", "100%", "150%"]}
          initialIndex={0}
          style={{}}
        >
          <View style={{ marginHorizontal: 20, minHeight: windowHeight }}>
            <Index props={handlePresentModalPress} />
          </View>
        </CustomBottomSheet>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  bottomSheetContent: {
    flex: 1,
    // backgroundColor:'#3366CC',
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
});
export default Mails;
