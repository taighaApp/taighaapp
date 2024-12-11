import React, { version } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const iconPaths: any = {
  dashboard: require("../../assets/images/SideMenu/dashboard.png"),
  seller: require("../../assets/images/SideMenu/seller.png"),
  buyer: require("../../assets/images/SideMenu/buyer.png"),
  investors: require("../../assets/images/SideMenu/investors.png"),
  rent: require("../../assets/images/SideMenu/forrent.png"),
  PM: require("../../assets/images/SideMenu/PM.png"),
  WWD: require("../../assets/images/SideMenu/WWD.png"),
  owner: require("../../assets/images/SideMenu/owner.png"),
  tenant: require("../../assets/images/SideMenu/tenant.png"),
  profile: require("../../assets/images/SideMenu/profile.png"),
  about: require("../../assets/images/SideMenu/about.png"),
  contact: require("../../assets/images/SideMenu/contact.png"),
  privacy: require("../../assets/images/SideMenu/privacy.png"),
  term: require("../../assets/images/SideMenu/term.png"),
};

const CustomDrawerItem = ({
  label,
  onPress,
  icon,
  iconheight,
  iconwidth,
}: any) => {
  return (
    <TouchableOpacity style={styles.customDrawerItem} onPress={onPress}>
      <View style={styles.sidemenulist}>
        <Image
          source={iconPaths[icon]}
          style={{ height: iconheight, width: iconwidth }}
        />
        <Text style={styles.drawerLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function CustomDrawer(props: any) {
  const version = '1.0';
  return (
    <LinearGradient
      colors={["#854BD0CC", "#3366cc"]}
      locations={[0, 0.5]}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 2, y: 0.5 }}
      style={styles.gradientContainer}
    >
      <View style={styles.sideMenuLogobackground}>
        <Image
          style={styles.sideMenuLogoImage}
          source={require("../../assets/images/SideMenu/Side-Menu-Logo.png")}
        />
      </View>
      {/* Add ScrollView here */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profilecard}>
          <View style={styles.profileContentWrapper}>
            <View style={styles.profilecardimgbg}>
              <Image
                source={require("../../assets/images/PropertiesImage/Krishna_image.png")}
                style={styles.profilecardimg}
              />
            </View>
            <View style={styles.profiledetail}>
              <Text style={styles.nameText}>Krishna Regupathy</Text>
              <Text style={styles.emailText}>krishna@taigha.com</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image
              source={require("../../assets/images/SideMenu/signout.png")}
              style={styles.signouticon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.customDrawerContent}>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Dashboard"
              icon="dashboard"
              iconwidth="22"
              iconheight="23"
              onPress={() => props.navigation.navigate("Dashboard")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Seller"
              icon="seller"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Seller")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Buyer"
              icon="buyer"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Buyer")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Investors"
              icon="investors"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Investors")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Rent"
              icon="rent"
              iconheight="24"
              iconwidth="24"
              onPress={() => props.navigation.navigate("Rent")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Property Management"
              icon="PM"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Property Management")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <View style={styles.submenu}>
              <CustomDrawerItem
                label="What we do"
                icon="WWD"
                iconheight="24"
                iconwidth="24"
                onPress={() => props.navigation.navigate("What we do")}
                style={styles.submenu}
              />
            </View>
          </View>
          <View style={styles.drawerItemWrapper}>
            <View style={styles.submenu}>
              <CustomDrawerItem
                label="Owners"
                icon="owner"
                iconheight="23"
                iconwidth="16"
                onPress={() => props.navigation.navigate("Owners")}
              />
            </View>
          </View>
          <View style={styles.drawerItemWrapper}>
            <View style={styles.submenu}>
              <CustomDrawerItem
                label="Tenants"
                icon="tenant"
                iconheight="23"
                iconwidth="23"
                onPress={() => props.navigation.navigate("Tenants")}
              />
            </View>
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Profile"
              icon="profile"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Profile")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="About Us"
              icon="about"
              iconheight="27"
              iconwidth="27"
              onPress={() => props.navigation.navigate("About Us")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Contact Us"
              icon="contact"
              iconheight="22"
              iconwidth="22"
              onPress={() => props.navigation.navigate("Contact Us")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Privacy Policy"
              icon="privacy"
              iconheight="25"
              iconwidth="25"
              onPress={() => props.navigation.navigate("Privacy Policy")}
            />
          </View>
          <View style={styles.drawerItemWrapper}>
            <CustomDrawerItem
              label="Terms of Service"
              icon="term"
              iconheight="23"
              iconwidth="23"
              onPress={() => props.navigation.navigate("Terms of Service")}
            />
          </View>
        </View>
        <View>
          <Image
            style={styles.buildingSkeleton}
            source={require("../../assets/images/SideMenu/buildingSkeleton.png")}
          />
          <View style={styles.versionwrapper}>
            <Text style={styles.version}>V {version}</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  sideMenuLogobackground: {
    height: 160,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  sideMenuLogoImage: {
    height: 52,
    width: '55%',
    resizeMode: "contain", // Ensures the image maintains aspect ratio
  },
  customDrawerItem: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  drawerItemWrapper: {
    height: 64,
    width: '92%',
    paddingLeft: 7.5,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "10 black",
  },
  dashboardicon: {
    width: 22,
    height: 23,
  },
  drawerLabel: {
    fontSize: 19,
    fontFamily: "rubikRegular",
    color: "#FFFFFF",
    paddingLeft: 10,
  },
  sidemenulist: {
    width: 295,
    height: 64,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  customDrawerContent: {
    paddingLeft: 20,
  },
  profilecard: {
    width: 299,
    height: 72,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    margin: 10,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Positions the signout icon properly
    paddingHorizontal: 10, // Adds some space on the left and right of the card
  },
  profileContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilecardimgbg: {
    height: 54,
    width: 54,
    borderRadius: 27, // Ensure it's a perfect circle
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  profilecardimg: {
    height: 52,
    width: 52,
    borderRadius: 26, // Ensures the image is also circular
  },
  profiledetail: {
    marginLeft: 10, // Space between the image and text
  },
  nameText: {
    fontFamily: "rubikRegular",
    fontSize: 17,
    color: "#FFFFFF",
    marginBottom: 3,
  },
  emailText: {
    fontFamily: "rubikRegular",
    fontSize: 14,
    color: "#FFFFFF",
  },
  signouticon: {
    height: 38,
    width: 38,
  },
  submenu: {
    marginLeft: 20,
  },
  buildingSkeleton: {
    height: 153,
    width: "100%",
  },
  versionwrapper:{
    width:'100%',
    height:18,
    justifyContent:'center',
    alignItems:'center',
    
  },
  version:{
    fontFamily:'rubikLight',
    fontSize:15,
    color:'#FFFFFF',
    bottom:30
  }
});
