
import React, { useRef, useMemo, useCallback } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Type for the props, which includes `children`
interface CustomBottomSheetProps {
  children: React.ReactNode; 
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  snapPoints: (string | number)[]; // Accept snapPoints as a prop
  showHandleIndicator?:boolean;
  index:Number;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({ children, bottomSheetRef, snapPoints, showHandleIndicator=true, index }) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  // variables
  const defaultSnapPoints = useMemo(() => snapPoints || ['25%', '50%', '75%'], [snapPoints]);
  
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1} // Hides backdrop when fully closed
        appearsOnIndex={1} // Shows backdrop starting from second snap point
      />
    ),
    []
  );
  const handleSheetChange = useCallback(
    (index: any) => {
      if (index >= 0 && index < snapPoints.length) {
        console.log(`Sheet changed to index: ${index}`);
      }else{
        bottomSheetRef.current?.snapToIndex(2);
      }
    },
    [defaultSnapPoints, bottomSheetRef]
  );

  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
      ref={sheetRef}
      index={defaultSnapPoints.length -  1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        // style={styles.bottomSheet}
        enableOverDrag={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior="restore"
        detached={true}
        backdropComponent={renderBackdrop}
        handleComponent={showHandleIndicator ? undefined : () => null}
        handleIndicatorStyle={{backgroundColor:'#E2E2E2'}}
      >
            <BottomSheetView>
                  {/* Render the children here */}
                    {children}
            </BottomSheetView>
      </BottomSheet>
    // </GestureHandlerRootView>
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

  bottomSheet: {
    flex: 1,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    borderRadius: 50,
    zIndex:9999
  },
  bottomSheetView: {
    flex: 1,
    backgroundColor: 'white',
    // minHeight: SCREEN_HEIGHT * 0.3,
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
  },
  inputStyles:{
    color: '#6E6E6E',
    paddingHorizontal: 10,
  },
});


export default CustomBottomSheet;