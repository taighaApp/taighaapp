import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/common/CustomBottomSheet";
import { useGlobalContext } from "@/hooks/context/GlobalContext";
import ReplyBottomSheet from "./ReplyBottomSheet";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

type ItemProps = {
  id: number;
  mailId: string;
  avatar: ImageSourcePropType | { uri: string } | null; // Allow null
  userName: string;
  comingTime: string;
  favImage: any;
  extraContent: {
    greeting: string;
    subject: string;
    body: string;
  };
  cc: {
    mailids: Set<string>;
  };
  color: (() => string) | null;
};

const ViewMore: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCC, setVisibleCC] = useState(null);
  const firstBottomSheetRef = useRef<BottomSheet>(null);
  const listRef = useRef<FlatList>(null);
  const compressRef = useRef<View>(null);
  const [compressButtonPosition, setCompressButtonPosition] = useState(0);
  const { isAboveThreshold, setIsAboveThreshold } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const secondSheetRef = useRef<BottomSheetModal>(null);
  const firstSheetRef = useRef<BottomSheetModal>(null);
  const [disableScroll, setDisableScroll] = useState(false);

  // background color added function
  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const mailsData: ItemProps[] = [
    {
      id: 1,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 2,
      mailId: "Psdinesh@gmail.com",
      avatar: null,
      color: getRandomColor,
      userName: "Dinesh Chidambaram",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 3,
      mailId: "Psdinesh@gmail.com",
      avatar: null,
      color: getRandomColor,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 4,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 5,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 6,
      mailId: "Psdinesh@gmail.com",
      avatar: null,
      color: getRandomColor,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 7,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 8,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 9,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 10,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 11,
      mailId: "Psdinesh@gmail.com",
      avatar: null,
      color: getRandomColor,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 12,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 13,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
    {
      id: 14,
      mailId: "Psdinesh@gmail.com",
      avatar: require("../../../assets/images/homesearch/icon/Krishna.png"),
      color: null,
      userName: "Krishna Regupathy",
      comingTime: "12:04 PM",
      favImage: require("../../../assets/images/admin/images/tickets/favorites.png"),
      extraContent: {
        greeting: "hello",
        subject: "I hope you're doing well.",
        body: "I wanted to check in and ask if you've had a chance to forward the bills that need to be charged back. Your assistance with this would be greatly appreciated.Additionally, please note that Jess is currently out of the office and will be returning on December 2nd. If you need anything urgent during her absence, feel free to reach out to me, and I’ll be happy to assist.",
      },
      cc: {
        mailids: new Set([
          "dhanvianusuya@gmail.com",
          "deethyaav@gmail.com",
          "revinthnataraj97@yopmail.com",
          "staff3@krishnarealty.com",
          "staff2@krishnarealty.com",
          "deepika@krishnarealty.com",
          "diana@krishnarealty.com",
          "janani@krishnarealty.com",
          "jazmin@krishnarealty.com",
          "jess@krishnarealty.com",
          "kate@krishnarealty.com",
          "staff4@krishnarealty.com",
          "krishna@krishnarealty.com",
          "staff5@krishnarealty.com",
          "mohan@krishnarealty.com",
          "pm@krishnarealty.com",
          "staff@krishnarealty.com",
        ]),
      },
    },
  ];

  // default show last id
  const [expandedItemId, setExpandedItemId] = useState<number | null>(
    mailsData[mailsData.length - 2]?.id || null // Default to the last item's id
  );

  // Show only the first and last items when collapsed
  const visibleData = isOpen
    ? mailsData
    : [mailsData[0], mailsData[mailsData.length - 1]];

  const hiddenCount = mailsData.length - 2; // Count of hidden items

  const handleClickMail = (item: number) => {
    console.log(item);
    setExpandedItemId((prev) => (prev === item ? null : item));
  };

  //toggle expand
  const expandClick = () => {
    if (!isOpen) {
      // Scroll to top when expanding
      listRef.current?.scrollToOffset({
        offset: compressButtonPosition,
        animated: true,
      });
    }
    setIsOpen((prevState) => !prevState);
  };

  const toggleCC = (id: any) => {
    setVisibleCC((prevId) => (prevId === id ? null : id));
  };

  const handleClick = (index: any) => {
    setIndex(index);
    setIsAboveThreshold(index >= 1);
  };

  const navigation = useNavigation();

  console.log(visibleData);

  const psd = () => {
    secondSheetRef.current?.snapToIndex(0);
  };

  const renderItems = ({ item }: { item: ItemProps }) => {
    const firstLetter = item.userName.charAt(0).toUpperCase();
    const backgroundColor = item.avatar
      ? "#FFFFFF"
      : item.color
      ? item.color()
      : "#CCCCCC"; // Fallback color
    // console.log("Rendered item:", item.id);
    const isExpanded = item.id === expandedItemId;
    const isCCVisible = visibleCC === item.id;
    return (
      <View>
        {/* mailAccordion */}
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            width: width - 40,
            marginHorizontal: "auto",
            // borderWidth:1,
          }}
        >
          {item.avatar ? (
            <Image style={{ width: 50, height: 50 }} source={item.avatar} />
          ) : (
            <View style={[styles.placeholderAvatar, { backgroundColor }]}>
              <Text style={styles.initial}>{firstLetter}</Text>
            </View>
          )}

          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              width: width - 100,
              borderBottomWidth: !isOpen ? 0 : 1,
              borderColor: "#ECECEC",
              paddingBottom: !isOpen ? 0 : 20,
              zIndex: 1,
            }}
          >
            <TouchableOpacity
              disabled={item.id === 1 && !isOpen ? true : false}
              onPress={() => handleClickMail(item.id)}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontFamily: "rubikRegular",
                  fontSize: 17,
                  color: "#000000",
                }}
              >
                {item.userName}
              </Text>
              <Text>{item.comingTime}</Text>
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
              <Text
                numberOfLines={isExpanded ? undefined : 1}
                ellipsizeMode="tail"
                style={{
                  width: width - 110,
                  fontFamily: "rubikLight",
                  fontSize: 17,
                  letterSpacing: 0.2,
                }}
              >
                {/* <View> */}
                {isExpanded ? (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => toggleCC(item.id)}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "rubikLight",
                        fontSize: 17,
                        letterSpacing: 0.2,
                      }}
                    >
                      {item.mailId}
                      {`   `}
                    </Text>

                    <View
                      style={{
                        backgroundColor: "#F3F3F3",
                        width: 20,
                        height: 20,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign
                        style={{ justifyContent: "center" }}
                        name={visibleCC ? "up" : "down"}
                        size={15}
                        color="black"
                      />
                    </View>

                    {isCCVisible && (
                      <View
                        key={item.id}
                        style={{
                          position: "relative",
                          right: 220,
                          top: 10,
                          backgroundColor: "#F7F7F7",
                          borderRadius: 4,
                          padding: 10,
                          flexDirection: "column",
                          width: "98%",
                          marginTop: 15,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "rubikRegular",
                            fontSize: 13,
                            lineHeight: 22,
                            letterSpacing: 0.2,
                            marginBottom: 5,
                          }}
                        >
                          Date:{" "}
                          <Text
                            style={{
                              fontFamily: "rubikLight",
                              fontSize: 13,
                              lineHeight: 22,
                              letterSpacing: 0.2,
                            }}
                          >
                            11/21/2024 12:04 PM
                          </Text>
                        </Text>
                        <Text
                          style={{
                            fontFamily: "rubikRegular",
                            fontSize: 13,
                            lineHeight: 22,
                            letterSpacing: 0.2,
                            marginBottom: 5,
                          }}
                        >
                          Notified:{" "}
                          <Text
                            style={{
                              fontFamily: "rubikLight",
                              fontSize: 13,
                              lineHeight: 22,
                              letterSpacing: 0.2,
                            }}
                          >
                            20 People
                          </Text>
                        </Text>
                        {[...item.cc.mailids].map((email, index) => (
                          <Text
                            key={index}
                            style={{
                              fontFamily: "rubikLight",
                              fontSize: 14,
                              letterSpacing: 0.2,
                              lineHeight: 22,
                            }}
                          >
                            {email}
                          </Text>
                        ))}
                      </View>
                    )}
                  </TouchableOpacity>
                ) : (
                  <Text>{item.extraContent.subject}</Text>
                )}
                {/* </View> */}
              </Text>
              <Image
                style={{
                  width: 17,
                  height: 17,
                  position: "absolute",
                  right: 0,
                }}
                source={item.favImage}
              />
            </View>
          </View>
        </View>
        {item.id === 1 && !isOpen && (
          <TouchableOpacity
            ref={compressRef}
            style={[styles.mailCompress, { height: 100 }]}
            onPress={() => setIsOpen(!isOpen)}
          >
            <View style={styles.line} />
            <View style={styles.line} />

            <View style={styles.compressCountWrapper}>
              <Text style={styles.compressCount}>
                {isOpen ? "Hide" : hiddenCount}
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <View
          style={{
            marginBottom: !isOpen ? 0 : 20,
            width: width - 40,
            marginHorizontal: "auto",
          }}
        >
          {expandedItemId === item.id && (
            <View style={styles.expandedContent}>
              <View>
                <Text
                  style={{
                    fontFamily: "rubikLight",
                    fontSize: 17,
                    lineHeight: 22,
                    marginBottom: 20,
                  }}
                >
                  {item.extraContent.greeting}
                </Text>
                <Text
                  style={{
                    fontFamily: "rubikLight",
                    fontSize: 17,
                    lineHeight: 22,
                    marginBottom: 20,
                  }}
                >
                  {item.extraContent.subject}
                </Text>
                <Text
                  style={{
                    fontFamily: "rubikLight",
                    fontSize: 17,
                    lineHeight: 22,
                  }}
                >
                  {item.extraContent.body}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={styles.fixedHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.mailAvatar}
                source={require("../../../assets/images/admin/images/tickets/back-arrow.png")}
              />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.content}>
              C24056 : Customer : 9957 SW S...C24056 : Customer : 9957 SW S...
            </Text>
            <TouchableOpacity onPress={expandClick}>
              <Image
                style={styles.expand}
                source={require("../../../assets/images/admin/images/tickets/expand-arrow.png")}
              />
            </TouchableOpacity>
          </View>

      {/* Mails List */}
      <CustomBottomSheet
        style={styles.WithBottomSheetShadow}
        snapPoints={["95%"]}
        initialIndex={0}
        ref={firstSheetRef}
      >
        <FlatList
          // ref={listRef}
          data={visibleData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItems}
          initialNumToRender={15}
          maxToRenderPerBatch={10}
          ListEmptyComponent={<Text>No Items</Text>}
          // keyboardDismissMode='on-drag'
          contentContainerStyle={{
            flexGrow: 1,
            zIndex: 2,
            marginTop: Platform.OS === "ios" ? 40 : 20,
            backgroundColor: "#fffff",
            paddingBottom: 200,
          }}
        />
      </CustomBottomSheet>
      {/*ReplyBottomSheet */}
      <CustomBottomSheet
        ref={firstBottomSheetRef}
        initialIndex={0}
        snapPoints={["20%", "75%", "90%"]}
        showHandleIndicator={true}
        onIndexChange={handleClick}
        borderRadius={30}
        style={[styles.boxShadow]}
      >
        <ReplyBottomSheet />
        {isAboveThreshold && (
          <View
            style={{
              marginHorizontal: 20,
              position: "absolute",
              bottom: index === 1 ? height - 600 : 70,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../assets/images/admin/images/tickets/attachment.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: "#3366cc",
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 24, height: 24, marginLeft: 5 }}
                  source={require("../../../assets/images/admin/images/tickets/send-image.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </CustomBottomSheet>
      {/* datails component */}
      <View style={{ flex: 1 }}>
        <CustomBottomsheetModel
          snapPoints={["80%", "100%", "150%"]}
          initialIndex={0}
          bottomSheetRef={secondSheetRef}
          showHandleIndicator={true}
        >
          <ReplyBottomSheet />
        </CustomBottomsheetModel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  fixedHeader: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation:8,
    height:'9%',
    borderBottomColor: "#ddd",
    zIndex: 2, // Ensures it stays above FlatList content
  },
  mailAvatar: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },
  content: {
    fontFamily: "rubikMedium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.2,
    width: width - 130,
  },
  expand: {
    width: 18,
    height: 18,
    objectFit: "contain",
    marginHorizontal: 10,
  },
  mailCompress: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },
  line: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    marginBottom: 3,
  },
  compressCountWrapper: {
    borderWidth: 1,
    borderColor: "#D4D4D4",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 20,
    backgroundColor: "#FFFFFF",
  },
  compressCount: {
    fontFamily: "rubikRegular",
    fontSize: 17,
    letterSpacing: 0.2,
  },
  expandedContent: {
    marginTop: 10,
  },
  boxShadow: {
    elevation: 10,
    zIndex: 1,
  },
  WithBottomSheetShadow: {
    // shadowColor: "#000000",
    // shadowOpacity: 0.2,
    // elevation: 10,
    // shadowOffset: { width: 0, height: 8 },
    backgroundColor: "#fffff",
  },
  initial: {
    fontSize: 30,
    color: "#000000",
    fontFamily: "rubikRegular",
    // letterSpacing:0.2,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth:1,
  },
});
export default ViewMore;
