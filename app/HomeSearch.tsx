import { Text, View ,StyleSheet, ImageBackground ,Pressable,Alert } from "react-native";

import TabLayout from "./(tabs)/_layout";
import HomeSearch from "@/components/HomeSearch/HomeSearch";
export default function Index(){
    return (
        <View style={styles.container}>
            <HomeSearch/>
            {/* <HomeSearchMap/> */}
            {/* <HomeSearchBottom/> */}
            <TabLayout/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    mapsearchconatiner:{
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'center',
    },
  });