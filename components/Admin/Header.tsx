import {
  View,
  Text,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const Header = () => {
  const route = useRoute();
  const scrollRef = useRef<ScrollView>(null);
  const [filterChose, setFilterChose] = useState(1);

  const handleIndexChange = (index: number) => {
    console.log("BottomSheet Index Changed:", index);
  };

  const handleFilterClick = (id: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFilterChose(id);
  };

  const scrollToLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: 0, animated: true }); // Scroll to the leftmost position
    }
  };

  const getFilterData = (): {
    id: number;
    FilterName: string;
    filterImage: any;
  }[] => {
    switch (route.name) {
      case "Tickets":
        return [
          {
            id: 1,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/up-arrow-com.png"),
          },
          {
            id: 2,
            FilterName: "Sort By Email",
            filterImage: require("../../assets/images/admin/images/tickets/mail.png"),
          },
          {
            id: 3,
            FilterName: "Closed",
            filterImage: require("../../assets/images/admin/images/tickets/lock.png"),
          },
          {
            id: 4,
            FilterName: "Sort By Activity",
            filterImage: require("../../assets/images/admin/images/tickets/clock-activity--com-2.png"),
          },
          {
            id: 5,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/email-reply.png"),
          },
          {
            id: 6,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/email-reply.png"),
          },
          {
            id: 7,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/email-reply.png"),
          },
          {
            id: 7,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/email-reply.png"),
          },
          {
            id: 8,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/tickets/email-reply.png"),
          },
        ];
      case "Tasks":
        return [
          {
            id: 1,
            FilterName: "All",
            filterImage: require("../../assets/images/admin/images/Tasks/all_list_icon.png"),
          },
          {
            id: 2,
            FilterName: "Completed",
            filterImage: require("../../assets/images/admin/images/Tasks/completed_icon.png"),
          },
          {
            id: 3,
            FilterName: "Not Compeleted",
            filterImage: require("../../assets/images/admin/images/Tasks/not_completed_icon.png"),
          },
        ];
      case "Mails":
        return [
          {
            id: 1,
            FilterName: "Showstopper",
            filterImage: require("../../assets/images/admin/images/Mails/Showstopper_icon.png"),
          },
          {
            id: 2,
            FilterName: "All Mails",
            filterImage: require("../../assets/images/admin/images/Mails/Allmails_icon.png"),
          },
          {
            id: 3,
            FilterName: "Undelivered Emails",
            filterImage: require("../../assets/images/admin/images/Mails/Undelivered_icon.png"),
          },
        ];
      case "Properties":
        return [
          {
            id: 1,
            FilterName: "All",
            filterImage: require("../../assets/images/admin/images/properties/all.webp"),
          },
          {
            id: 2,
            FilterName: "Commercial",
            filterImage: require("../../assets/images/homesearch/icon/commercial-white.png"),
          },
          {
            id: 3,
            FilterName: "Condo",
            filterImage: require("../../assets/images/homesearch/icon/condo-white.webp"),
          },
          {
            id: 4,
            FilterName: "Multi-family",
            filterImage: require("../../assets/images/homesearch/icon/multi-family-white.webp"),
          },
        ];
      default:
        return [];
    }
  };

  const filterData = getFilterData();

  // don't remove the below state

  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <Image
            style={styles.searchImage}
            source={require("../../assets/images/admin/images/tickets/search.png")}
          />
        </View>
        <View>
          <Text style={styles.ticket}>{route.name} {``}({0})</Text>
        </View>
        <View style={styles.ticketFilter}>
          <Image
            style={styles.filterImage}
            source={require("../../assets/images/admin/images/tickets/filter-white.png")}
          />
        </View>
      </View>
      {/* ticket filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25, height: 35 }}
        ref={scrollRef}
        contentOffset={{ x: 0, y: 0 }}
      >
        {filterData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterContainer,
              {
                backgroundColor:
                  filterChose === item.id ? "#fff" : "#rgba(255,255,255,0.4)",
              },
              { marginLeft: item.id === 1 ? 20 : 0 },
            ]}
            onPress={() => handleFilterClick(item.id)}
          >
            <Image
              style={{
                width: 15,
                height: 13,
                objectFit: "contain",
                tintColor: filterChose === item.id ? "#3366cc" : "#fff",
              }}
              source={item.filterImage}
            />
            <Text
              style={[
                {
                  fontFamily: "rubikMedium",
                  fontSize: 15,
                  paddingLeft: 5,
                  color: filterChose === item.id ? "#3366cc" : "#fff",
                },
              ]}
            >
              {item.FilterName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
    marginRight: 10,
    paddingHorizontal: 15,
  },
  headerContainer: {
    marginTop: 40,
    width: width,
  },
  searchContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    width: width - 40,
    margin: "auto",
    justifyContent: "space-between",
  },
  search: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#rgba(234,234,234,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  searchImage: {
    width: 22,
    height: 22,
  },
  ticket: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "rubikLight",
  },
  ticketFilter: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E5CB8",
    borderRadius: 8,
  },
  filterImage: {
    width: 22,
    height: 22,
    objectFit: "contain",
  },
});

export default Header;
