import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import React, {
  Children,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CustomBottomsheetModel from "@/components/common/CustomBottomsheetModel";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomAccordionArrow from "@/components/common/Accordion/CustomAccordionArrow";
import CustomAccordion from "@/components/common/Accordion/CustomAccordion";
import { List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import ActivityHistory from "@/components/Admin/details/ActivityHistory";
import ReplyCard from "./ReplyCard";
import ContactList from "./ContactList";
import { router, usePathname } from "expo-router";
import { useNavigationState } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import TaskList from "./TaskList";

const { width, height } = Dimensions.get("window");

interface TicketData {
  id: string;
  customer: string;
  profileImage: string;
  ticketId: string;
  content: string;
  heading: string;
  threadCount: number;
  replyImage: string;
}
interface props {
  ticketDatas: any;
}

const TicketDetails: React.FC<props> = ({ ticketDatas }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [editableValues, setEditableValues] = useState<any>({});
  const [editing, setEditing] = useState<any>({});

  const content =
    "A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following A support ticket has been submitted for your property located at 9957 SW Scott Ct, Portland, OR 972. The following ";

  const ticketDetails = [
    {
      id: 1,
      type: "Customer",
      created: "Alejandra Granadino Nov 04 2024 at 11:04 AM",
      activity: "Loga Prasath 11/11/2024 10:17 AM",
      lastEmail: "Loga Prasath 11/11/2024 10:17 AM",
      property: "9957 SW Scott Ct, Portland, OR 97223, USA",
      priority: "High",
      group: "Work Order",
      staff: "Marisol Miranda",
      status: "Open",
      cC: "Krishna@gm.in",
      access: "Krishna@gm.in",
    },
    {
      id: 2,
      type: "Customer",
      created: "Alejandra Granadino Nov 04 2024 at 11:04 AM",
      activity: "Loga Prasath 11/11/2024 10:17 AM",
      lastEmail: "Loga Prasath 11/11/2024 10:17 AM",
      property: "9957 SW Scott Ct, Portland, OR 97223, USA",
      priority: "High",
      group: "Work Order",
      staff: "Marisol Miranda",
      status: "Open",
      cC: "Krishna@gm.in",
      access: "Krishna@gm.in",
    },
  ];

  const sections = [{ title: "Ticket Details" }];

  const sectionData = [
    { id: "1", title: "Type", value: "Customer" },
    {
      id: "2",
      title: "Created",
      value: "Alejandra GranadinoNov 04 2024 at 11:04 AM",
    },
    { id: "3", title: "Activity", value: "Loga Prasath11/11/2024 10:17 AM" },
    { id: "4", title: "Last Email", value: "Loga Prasath11/11/2024 10:17 AM" },
    {
      id: "5",
      title: "Property",
      value: "9957 SW Scott Ct, Portland, OR 97223, USA",
    },
    { id: "6", title: "Priority", value: "High" },
    { id: "7", title: "Group", value: "Work Order" },
    { id: "8", title: "Staff", value: "Marisol Miranda" },
    { id: "9", title: "Status", value: "Open" },
    { id: "10", title: "CC", value: "Krishna@gm.in" },
    { id: "11", title: "Access", value: "Krishna@gm.in" },
  ];

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFavClick = () => {
    setFavorites((prevFavorites) => !prevFavorites);
    setFavoritesCount((prevCount) => prevCount + 1);
  };

  const toggleSection = (key: string) => {
    const updatedSections = new Set(expandedSections);
    if (updatedSections.has(key)) {
      updatedSections.delete(key); // Collapse the section
    } else {
      updatedSections.add(key); // Expand the section
    }
    setExpandedSections(updatedSections); // Update state
  };

  const handleEdit = (item: any) => {
    setEditing((prev: any) => ({
      ...prev,
      [item.id]: !prev[item.id], // Toggle editing state for this item
    }));
  };

  const handleChange = (id: string, value: string) => {
    setEditableValues((prev: any) => ({
      ...prev,
      [id]: value, // Update value for this item
    }));
  };

  const renderSectionContent = (key: string) => {
    if (sectionData && sectionData.length > 0) {
      return (
        <View>
          {sectionData.map((item: any, index: number) => {
            const showEditIcon = [
              "Property",
              "Priority",
              "CC",
              "Access",
            ].includes(item.title);
            const isEditing = editing[item.id];
            return (
              <View
                key={item.id}
                style={[
                  styles.infoRow,
                  index === sectionData.length - 1 && { borderBottomWidth: 0 }, // Remove border for the last item
                ]}
              >
                <Text style={styles.infoLabel}>{item.title}</Text>

                {isEditing ? (
                  <TextInput
                    style={[
                      styles.infoValue,
                      {
                        borderWidth: 1,
                        borderColor: "#ddd",
                        paddingLeft: 10,
                        paddingRight: 35,
                        borderRadius: 5,
                        flex: 1,
                        flexWrap: "wrap",
                        width: "100%",
                      },
                    ]}
                    value={editableValues[item.id] ?? item.value} // Use editable value or default
                    onChangeText={(text) => handleChange(item.id, text)}
                    multiline={true}
                  />
                ) : (
                  <Text style={styles.infoValue}>
                    {editableValues[item.id] ?? item.value}
                  </Text>
                )}

                {showEditIcon && (
                  <TouchableOpacity
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: "#F8F6F6",
                      borderRadius: 6,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      right: 13,
                    }}
                    onPress={() => handleEdit(item)}
                  >
                    <Image
                      style={{ width: 21, height: 21 }}
                      source={require("../../../assets/images/admin/images/tickets/edit.png")}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      );
    }

    return null; // Default fallback for unsupported sections
  };

  const showSheet = (sheetRef: React.RefObject<BottomSheetModal>) => {
    secondSheetRef.current?.dismiss();
    thirdSheetRef.current?.dismiss();
    fourthSheetRef.current?.dismiss();
    sheetRef.current?.present();
  };

  const secondSheetRef = useRef<BottomSheetModal>(null);
  const thirdSheetRef = useRef<BottomSheetModal>(null);
  const fourthSheetRef = useRef<BottomSheetModal>(null);

  const activityHistoryClick = () => showSheet(secondSheetRef);
  const taskListClick = () => showSheet(thirdSheetRef);
  const contactListClick = () => showSheet(fourthSheetRef);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: width, marginVertical: 20 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: width - 40,
              margin: "auto",
              justifyContent: "space-between",
            }}
            onPress={handleFavClick}
          >
            {ticketDatas.map((ticket: any) => (
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  fontFamily: "rubikMedium",
                  fontSize: 17,
                  lineHeight: 22,
                  letterSpacing: 0.2,
                  width: "90%",
                }}
              >
                {ticket.ticketId} :{``} {ticket.role} : {``} {ticket.content}
              </Text>
            ))}

            {favorites ? (
              <Image
                style={styles.headerIcon}
                source={require("../../../assets/images/admin/images/tickets/favorites-1.png")}
              />
            ) : (
              <Image
                style={styles.headerIcon}
                source={require("../../../assets/images/admin/images/tickets/favorites.png")}
              />
            )}
            <Text>{favoritesCount}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#ECECEC",
            marginTop: 22,
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 }, // Shadow only at the bottom
            shadowOpacity: 0.3,
            shadowRadius: 4,
            // Shadow for Android
            elevation: 1,
          }}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text
            style={styles.descriptionText}
            numberOfLines={isExpanded ? undefined : 3}
            ellipsizeMode="tail"
          >
            {isExpanded ? (
              <>
                {content}
                <Text style={styles.readMore} onPress={toggleReadMore}>
                  Read Less
                </Text>
              </>
            ) : (
              <>
                {content.slice(0, 115)}
                <Text style={styles.readMore} onPress={toggleReadMore}>
                  Read More...
                </Text>
              </>
            )}
          </Text>
        </View>

        {/* Accordion Section */}
        <View
          style={{
            marginHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: "#ECECEC",
          }}
        >
          {sections.map((section) => (
            <View style={[styles.accordionSection]}>
              <TouchableOpacity
                style={[styles.accordionHeader, { backgroundColor: "#fff" }]}
                onPress={() => toggleSection(section.title)}
              >
                <Text style={[styles.accordionTitle, { color: "#000000" }]}>
                  {section.title}
                </Text>

                {/* Render "add" or "remove" icon based on expanded state */}
                <MaterialIcons
                  name={expandedSections.has(section.title) ? "remove" : "add"}
                  size={26}
                  color={"#3366cc"} // White for "remove", blue for "add"
                />
              </TouchableOpacity>

              {expandedSections.has(section.title) && (
                <View style={styles.accordionContent}>
                  {renderSectionContent(section.title)}
                </View>
              )}
            </View>
          ))}
        </View>
        {/* accordain end */}

        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between", // Space between left and right content
              alignItems: "center", // Vertically center items
              borderColor: "#EAEAEA",
            }}
            onPress={activityHistoryClick}
          >
            {/* Left Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 26, height: 26, marginRight: 10 }}
                source={require("../../../assets/images/admin/images/tickets/activity-history.png")}
              />
              <Text style={styles.accordionText}>Activity History</Text>
            </View>

            {/* Right-Aligned Image */}
            <Image
              style={{ width: 16, height: 16, objectFit: "contain" }}
              source={require("../../../assets/images/admin/images/tickets/right-arrow.png")}
            />
          </TouchableOpacity>

          {/* datails component */}
          <CustomBottomsheetModel
            snapPoints={["80%", "90%"]}
            initialIndex={0}
            bottomSheetRef={secondSheetRef}
            showHandleIndicator={true}
          >
            {/* component */}
            <ActivityHistory />
          </CustomBottomsheetModel>

          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between", // Space between left and right content
              alignItems: "center", // Vertically center items
              borderColor: "#EAEAEA",
            }}
            onPress={taskListClick}
          >
            {/* Left Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 26, height: 26, marginRight: 10 }}
                source={require("../../../assets/images/admin/images/tickets/task-square.png")}
              />
              <Text style={styles.accordionText}>Task List</Text>
            </View>

            {/* Right-Aligned Image */}
            <Image
              style={{ width: 16, height: 16, objectFit: "contain" }}
              source={require("../../../assets/images/admin/images/tickets/right-arrow.png")}
            />
          </TouchableOpacity>

          {/* datails component */}
          <CustomBottomsheetModel
            snapPoints={["80%", "100%", "150%"]}
            initialIndex={0}
            bottomSheetRef={thirdSheetRef}
            showHandleIndicator={true}
          >
            {/* component */}
            <TaskList />
          </CustomBottomsheetModel>

          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between", // Space between left and right content
              alignItems: "center", // Vertically center items
              borderColor: "#EAEAEA",
            }}
            onPress={contactListClick}
          >
            {/* Left Section */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 26, height: 26, marginRight: 10 }}
                source={require("../../../assets/images/admin/images/tickets/contact-book.png")}
              />
              <Text style={styles.accordionText}>Contact List</Text>
            </View>

            {/* Right-Aligned Image */}
            <Image
              style={{ width: 16, height: 16, objectFit: "contain" }}
              source={require("../../../assets/images/admin/images/tickets/right-arrow.png")}
            />
          </TouchableOpacity>

          {/* datails component */}
          <CustomBottomsheetModel
            snapPoints={["80%", "100%", "150%"]}
            initialIndex={0}
            bottomSheetRef={fourthSheetRef}
            showHandleIndicator={true}
          >
            {/* component */}
            <ContactList />
          </CustomBottomsheetModel>
        </View>
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
          <ReplyCard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
  },
  headerText: {
    fontFamily: "rubikMedium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.2,
    marginRight: 20,
  },
  headerIcon: {
    width: 21,
    height: 21,
    objectFit: "contain",
  },
  readMore: {
    fontFamily: "rubikLight",
    fontSize: 17,
    color: "#3366CC",
  },
  descriptionContainer: {
    marginVertical: 22,
    marginHorizontal: 22,
  },
  descriptionText: {
    fontFamily: "rubikLight",
    fontSize: 17,
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "#333",
    marginTop: 5,
  },
  descriptionTitle: {
    fontFamily: "interMedium",
    fontSize: 17,
    letterSpacing: 0.2,
  },
  detailsHeadingsWrapper: {},
  detailsHeading: {
    fontSize: 17,
    fontFamily: "rubikRegular",
    letterSpacing: 0.2,
    marginVertical: 10,
  },
  detailsValuesWrapper: {},
  detailsValues: {
    fontSize: 17,
    fontFamily: "rubikLight",
    letterSpacing: 0.2,
    marginVertical: 10,
  },
  accordionSection: {
    // marginBottom: 15,
    // backgroundColor: "#fff",
    // borderRadius: 5,
    // paddingBottom:10,
    // overflow:''
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    // borderBottomWidth:1,
    borderTopWidth: 1,
    borderColor: "#EAEAEA",
  },
  accordionTitle: {
    fontSize: 17,
    fontFamily: "interMedium",
    color: "#4C4C4C",
    letterSpacing: 0.2,
  },
  accordionContent: {
    // paddingTop:5,
    // paddingHorizontal:10,
    // borderWidth:1,
    borderColor: "#ECECEC",
    // borderRadius:4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
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
    fontFamily: "interRegular",
  },
  dates: {
    flex: 1,
    textAlign: "left",
  },
  event: {
    flex: 3,
    textAlign: "left",
    paddingLeft: 10,
    maxWidth: 150,
  },
  accordainprice: {
    flex: 1,
    textAlign: "right",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 8,
    // borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    // paddingBottom: 4,
    padding: 10,
    // marginLeft:10,
    marginHorizontal: 5,
  },
  infoLabel: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "500",
    width: "40%",
    fontFamily: "rubikRegular",
    letterSpacing: 0.2,
    marginRight: 10,
  },
  infoValue: {
    width: "100%",
    fontSize: 17,
    paddingVertical: 10,
    color: "#00000",
    flex: 1,
    flexWrap: "wrap",
    fontFamily: "rubikLight",
    letterSpacing: 0.2,
  },
  accordionText: {
    color: "#000000",
    fontFamily: "interMedium",
    fontSize: 17,
    letterSpacing: 0.2,
  },
});
export default TicketDetails;
