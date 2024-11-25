
import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions, Pressable, Image, Animated, Easing, TouchableOpacity, Linking, Keyboard, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetView } from "@gorhom/bottom-sheet";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
import { TextInput } from "react-native-paper";
import { FloatingLabelInput } from "react-native-floating-label-input";
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
        style={styles.bottomSheet}
        enableOverDrag={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior="restore"
        detached={true}
        handleIndicatorStyle={{backgroundColor:'#E2E2E2'}}
            // backdropComponent={renderBackdrop}
      >
            <BottomSheetView
              style={styles.bottomSheetView}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    <View style={styles.bottomSheetContainer}>
                            <Text style={styles.searchText}>Refine Your Search: Find the Perfect Property</Text>
                        <View style={{width:'100%'}}>
                            <Text>Price</Text>
                                <View style={{width:100,}}>
                                <FloatingLabelInput
                                    label="Enter min"
                                    // value={password}
                                    //  mask=""
                                    hint="**********"
                                    staticLabel
                                    hintTextColor={'#B1A8A8'}
                                    containerStyles={styles.containerStyles}
                                    customLabelStyles={{
                                    colorFocused: '#3366CC',
                                    colorBlurred: '#AFAFAF',  // Color when input is not focused
                                    fontSizeFocused: 20,
                                    }}
                                    labelStyles={styles.labelStyles}
                                    inputStyles={styles.inputStyles}
                                    // onChangeText={setPassword}
                                />
                                {/* {errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bottomSheetContainer:{
    alignItems:'center',
    marginHorizontal:15,
  },
  searchText: {
    color: '#6A6A6A',
    fontSize: 15,
    fontWeight:'light',
    marginBottom: 20,
    letterSpacing:1,
  },
  containerStyles:{
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: '#AFAFAF',
    borderRadius: 5,
    height:47,
  },
  labelStyles:{
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize:17,
    // left:20
  },
  inputStyles:{
    color: '#6E6E6E',
    paddingHorizontal: 10,
  },
});


export default CustomBottomSheet;