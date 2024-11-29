
import React, { useRef, useMemo } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Type for the props, which includes `children`
interface CustomBottomSheetProps {
  children: React.ReactNode; // This allows you to pass any React element as children
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({ children }) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['10%','80%','100%'], []);
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
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={0}
        // onChange={handleSheetChange}
        // handleComponent={null}
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
        handleIndicatorStyle={{backgroundColor:'#E2E2E2'}}
            // backdropComponent={renderBackdrop}
      >
            <BottomSheetView>
                  {/* Render the children here */}
                    {children}
            </BottomSheetView>
      </BottomSheet>
    // </GestureHandlerRootView>
  );
};

export default CustomBottomSheet;