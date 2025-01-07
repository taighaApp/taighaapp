import { View, StyleSheet, Dimensions } from "react-native";
import CustomBottomSheet from "@/components/common/CustomBottomSheet";
import Header from "../../../components/Admin/Header";
import Index from "./Index";
import { LinearGradient } from "expo-linear-gradient";
const { height: windowHeight } = Dimensions.get("window");

export default function Properties({ route }: { route: any }) {
  // const screen =
  const  screen  = route.params;
  console.warn("screen => ", screen); // For debugging, remove in production
  return (
     <LinearGradient
          colors={["#854BD0CC", "#3366CC"]}
          locations={[0, 0.5]}
          start={{ x: -0.3, y: 0.9 }}
          end={{ x: 2.2, y: 0.5 }}
          style={styles.propertyContainer}
        >
      {/* Header Component */}
      <Header />
      {/* Bottom Sheet with dynamic snap points */}
      <CustomBottomSheet 
        snapPoints={["80%", "100%", "150%"]} 
        initialIndex={0}
        borderRadius={30}
        style={{}}>
        <View>
          <Index />
        </View>
      </CustomBottomSheet>
   </LinearGradient>
  );
}
const styles = StyleSheet.create({
  propertyContainer: {
    flex: 1,
  },
});