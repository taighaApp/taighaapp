import React, { useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { setGlobalStyles } from "react-native-floating-label-input";
import Icon from "react-native-vector-icons/MaterialIcons";

// Set global styles for all FloatingLabelInput components
setGlobalStyles.labelStyles = {
  backgroundColor: "#fff",
  paddingHorizontal: 5,
  fontSize: 13,
  lineHeight: 22,
  letterSpacing: 0.2,
  marginLeft: -10,
  fontWeight: 600,
};
setGlobalStyles.containerStyles = {
  borderWidth: 1,
  backgroundColor: "#fff",
  borderColor: "#AFAFAF",
  borderRadius: 5,
  height: 47,
};
setGlobalStyles.inputStyles = {
  color: "#6E6E6E",
  paddingHorizontal: 10,
};

type PropertyProps = {
  property: {
    Address: string;
    id: number;
    bath: number;
    bedroom: number;
    squarefeet: number;
    year_built: number;
    activity_by: string;
    property_type: string;
    activityAt: string;
    propertyImage: any;
  };
};

type sectionType = {
  sections: {
    id: number;
    content: string;
  };
};

export default function PropertyView({ property }: PropertyProps) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [Formdata, setFormdata] = useState({
    Address: "",
    Unit: "",
    IntrestedIn: "",
    PropertyNikcName: "",
    PropertyType: "",
    HOAprovider: "",
    HOAname: "",
    HOAwebsite: "",
    HOAcontactinfo: "",
    MailboxLoaction: "",
    MailboxNumber: "",
    Utilityinfo: [],
  });
  const [value, setValue] = useState(Formdata.PropertyType); // Initial value from Formdata
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select an option");

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelect = (value: any) => {
    setSelectedValue(value);
    toggleModal();
  };
  const navigation = useNavigation();

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleSection = (id: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection((prevId) => (prevId === id ? null : id));
  };

  const sections = [
    { id: 1, title: "Edit Property Information" },
    { id: 2, title: "Edit Property Images" },
    { id: 3, title: "Edit Rental Information" },
    { id: 4, title: "Edit Maintenance Information" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.modaltop}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#6E6E6E"
          onPress={() => navigation.goBack()}
          style={styles.backbutton}
        />
        <Text style={styles.headerAddress}>{property.Address}</Text>
      </View>
      <View style={styles.editAccordianContainer}>
        {sections.map((section, index) => (
          <View key={index} style={styles.sections}>
            <View>
              <TouchableOpacity
                onPress={() => toggleSection(section.id)}
                activeOpacity={0.9}
                style={styles.editProperty}
              >
                <Text style={styles.Header}>{section.title}</Text>
                <MaterialIcons
                  name={expandedSection === section.id ? "remove" : "add"}
                  size={20}
                  color={"#3366CC"} // White for "remove", blue for "add"
                />
              </TouchableOpacity>
            </View>

            {expandedSection === section.id &&
              // <PropertyEditAccordion />
              (expandedSection === 1 ? (
                <View style={styles.propertyInfoContainer}>
                  <View>
                    <FloatingLabelInput
                      label="Address"
                      value={Formdata.Address}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      onChangeText={(text) => handleChanges("Address", text)}
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                  </View>
                  {/* Unit/Apt and Intrested in row */}
                  <View style={styles.unit_intrested}>
                    <FloatingLabelInput
                      label="Unit / Apt #"
                      value={Formdata.Unit}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      containerStyles={styles.containerStylesRight}
                      onChangeText={(text) => handleChanges("Unit", text)}
                    />

                    <TouchableOpacity
                      style={{ minWidth: "47.3%", margin: 0 }}
                      onPress={IntrestedInToggleModal}
                    >
                      <View pointerEvents="none">
                        <FloatingLabelInput
                          label="Intrested In"
                          value={Formdata.IntrestedIn}
                          staticLabel
                          customLabelStyles={{
                            colorFocused: "#000000",
                            colorBlurred: "#000000", // Color when input is not focused
                            fontSizeFocused: 14,
                          }}
                          rightComponent={
                            <TouchableOpacity>
                              <Entypo name="chevron-down" size={24} color="#EAEAEA" style={{paddingRight:'7%', paddingBottom:'1%'}} />
                            </TouchableOpacity>
                          }
                          editable={isEditable}
                        />
                      </View>
                    </TouchableOpacity>

                    <Modal
                      visible={IntrestedInModalVisible}
                      transparent
                      animationType="fade"
                      onRequestClose={IntrestedInToggleModal} // Required for Android
                    >
                      <TouchableOpacity
                        style={styles.modalContainer}
                        onPress={IntrestedInToggleModal}
                        activeOpacity={0.9}
                      >
                        <View style={styles.modalContent}>
                          <View style={styles.modalTitleContainer}>
                            <Text style={styles.modalTitle}>
                              Select Intrested In
                            </Text>
                          </View>
                          <FlatList
                            data={IntrestedIn}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                              <TouchableOpacity
                                style={[
                                  styles.option,
                                  Formdata.IntrestedIn === item && {
                                    backgroundColor: "#3366CC",
                                  },
                                ]}
                                onPress={() => {
                                  handleChanges("IntrestedIn", item, true);
                                  IntrestedInToggleModal(); // Close modal on selection
                                }}
                              >
                                <Text
                                  style={[
                                    styles.optionText,
                                    Formdata.IntrestedIn === item && {
                                      color: "#FFFFFF",
                                    },
                                  ]}
                                >
                                  {item}
                                </Text>
                              </TouchableOpacity>
                            )}
                            keyboardShouldPersistTaps="handled" // Ensures touches are handled properly
                            contentContainerStyle={{ padding: 20 }} // Apply padding directly
                            showsVerticalScrollIndicator={true}
                            persistentScrollbar={true}
                            initialNumToRender={10} // Number of items to render initially
                            maxToRenderPerBatch={10} // Number of items to render per batch
                            scrollIndicatorInsets={{ right: 1 }}
                          />
                        </View>
                      </TouchableOpacity>
                    </Modal>
                  </View>
                  {/* Property Nick name & Property Type */}
                  <View style={styles.unit_intrested}>
                    <View style={{width:'50%'}}>
                      <FloatingLabelInput
                        label="Property Nick Name"
                        value={Formdata.PropertyNikcName}
                        staticLabel
                        customLabelStyles={{
                          colorFocused: "#000000",
                          colorBlurred: "#000000", // Color when input is not focused
                          fontSizeFocused: 14,
                        }}
                        containerStyles={styles.containerStylesRight}
                        onChangeText={(text) =>
                          handleValueChange("PropertyNikcName", text)
                        }
                      />
                    </View>

                    <View style={{width:'50%'}}>
                      <FloatingLabelInput
                        label="Property Type"
                        value={Formdata.PropertyNikcName}
                        staticLabel
                        customLabelStyles={{
                          colorFocused: "#000000",
                          colorBlurred: "#000000", // Color when input is not focused
                          fontSizeFocused: 14,
                        }}
                        containerStyles={styles.containerStylesRight}
                        onChangeText={(text) =>
                          handleValueChange("PropertyType", text)
                        }
                        onPress={toggleModal}
                        editable={false}
                      />

                      <Modal
                        visible={isModalVisible}
                        transparent
                        animationType="slide"
                        onRequestClose={toggleModal}
                      >
                        <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                              Select an Option
                            </Text>
                            
                            <TouchableOpacity
                              style={styles.closeButton}
                              onPress={toggleModal}
                            >
                              <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                            <FlatList
                              data={options}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={({ item }) => (
                                <TouchableOpacity
                                  style={styles.option}
                                  onPress={() => handleSelect(item)}
                                >
                                  <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                              )}
                            />
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </View>
                  {/* HOA Provider and HOA Name */}
                  <View style={styles.unit_intrested}>
                    <FloatingLabelInput
                      label="HOA Provided ?"
                      value={Formdata.HOAprovider}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      containerStyles={styles.containerStylesRight}
                      onChangeText={(text) =>
                        handleChanges("HOAprovider", text)
                      }
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                    <FloatingLabelInput
                      label="HOA Name"
                      value={Formdata.HOAname}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      onChangeText={(text) => handleChanges("HOAname", text)}
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                  </View>
                  {/* HOA Website and HOA Contact info */}
                  <View style={styles.unit_intrested}>
                    <FloatingLabelInput
                      label="HOA website"
                      value={Formdata.HOAwebsite}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      containerStyles={styles.containerStylesRight}
                      onChangeText={(text) => handleChanges("HOAwebsite", text)}
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                    <FloatingLabelInput
                      label="HOA Contact info"
                      value={Formdata.HOAcontactinfo}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      onChangeText={(text) =>
                        handleChanges("HOAcontactinfo", text)
                      }
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                  </View>
                  {/* Mail box location and Number */}
                  <View style={styles.unit_intrested}>
                    <FloatingLabelInput
                      label="Mailbox Location"
                      value={Formdata.MailboxLoaction}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      containerStyles={styles.containerStylesRight}
                      onChangeText={(text) =>
                        handleChanges("MailboxLoaction", text)
                      }
                    />
                    {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                    <FloatingLabelInput
                      label="Mailbox Number"
                      value={Formdata.MailboxNumber}
                      staticLabel
                      customLabelStyles={{
                        colorFocused: "#000000",
                        colorBlurred: "#000000", // Color when input is not focused
                        fontSizeFocused: 14,
                      }}
                      onChangeText={(text) =>
                        handleChanges("MailboxNumber", text)
                      }
                    />
                  </View>
                </View>
              ) : expandedSection === 2 ? (
                <View>
                  <Text>Property Image</Text>
                </View>
              ) : expandedSection === 3 ? (
                <View>
                  <Text>Rental Information</Text>
                </View>
              ) : expandedSection === 4 ? (
                <View>
                  <Text>Maintenance Information</Text>
                </View>
              ) : (
                ""
              ))}
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-start",
  },

  // bottom sheet model header and button styles
  modaltop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    minHeight: "10%",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  headerAddress: {
    width: "85%",
    fontSize: 17,
    letterSpacing: 0.2,
    fontFamily: "rubikMedium",
    lineHeight: 22,
  },
  backbutton: {
    marginLeft: "2.5%",
  },

  // Accordion Header styles
  sections: {
    borderBottomWidth: 1,
    borderColor: "#EAEAEA",
  },
  editAccordianContainer: {
    margin: "5%",
    width: "90%",
    flex: 1,
    marginTop: 0,
    // borderTopWidth: 1,
    // borderColor: "#EAEAEA",
  },
  editProperty: {
    paddingBottom: "5%",
    paddingTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: "5%",
  },
  Header: {
    fontFamily: "rubikMedium",
    fontSize: 17,
  },

  // property infromation conatainer
  propertyInfoContainer: {
    marginBottom: "10%",
  },

  // Form input fiels styles
  unit_intrested: {
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
  },
  containerStylesRight: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#AFAFAF",
    borderRadius: 5,
    height: 47,
    marginRight: "5%",
  },

  // Dropdown style
  selector: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "80%",
  },
  selectorText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 16,
    alignItems: "center",
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
