
import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions, Pressable, Image, Animated, Easing, TouchableOpacity, Linking, Keyboard, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetView } from "@gorhom/bottom-sheet";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CustomBottomSheet = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['10%', '50%','100%'], []);
  // render

//   const renderBackdrop = useCallback(
//     (props_: BottomSheetBackdropProps) => (
//       <BottomSheetBackdrop
//         {...props_}
//         pressBehavior="close"
//         opacity={0.5}
//         disappearsOnIndex={-1}
//       />
//     ),
//     []
// )

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={0}
        // onChange={handleSheetChange}
        // handleComponent={null}
        // backgroundStyle={styles.bottomSheetBackground}
        style={styles.bottomSheet}
        enableOverDrag={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enableDynamicSizing={false}
        // enablePanDownToClose={false}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior="restore"
        detached={true}
            // backdropComponent={renderBackdrop}
      >
            <BottomSheetView
              style={styles.bottomSheetView}
            >
              <ScrollView contentContainerStyle={{ flexGrow: 1}}>
<Text>psd</Text>
</ScrollView>
            </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3366CC'
  },
  animContainer:{
    flex: 1,
  },
  form:{
    marginHorizontal:20,
  },
//   bottomSheetBackground: {
//     backgroundColor: '#fffff',
//   },
  bottomSheet: {
    flex: 1,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    borderRadius: 50,
    // borderWidth:4,
    // height:SCREEN_HEIGHT,
    zIndex:9999
  },
  bottomSheetView: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: SCREEN_HEIGHT * 0.3,
  },
});


export default CustomBottomSheet;