import React, { useRef, useMemo } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// Type for the props, which includes `children`
interface CustomBottomSheetProps {
  children: React.ReactNode;
  initialIndex?: number;
  onIndexChange?: (index: number) => void; 
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({ children, initialIndex = 0, onIndexChange }) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['3%', '50%', '80%','90%'], []);
   // Handler for detecting index changes
   const handleSheetChange = (index: number) => {
    if (onIndexChange) {
      onIndexChange(index); // Trigger the callback if provided
    }
  };

  return (
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={initialIndex}
        onChange={handleSheetChange}
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
      >
      <BottomSheetView>
            {/* Render the children here */}
              {children}
      </BottomSheetView>
      </BottomSheet>
  );
};
const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    backgroundColor: 'white', // Ensure the background is visible
    borderTopLeftRadius: 20, // Apply radius to top-left corner
    borderTopRightRadius: 20, // Apply radius to top-right corner
    overflow: 'hidden', // Ensure content doesn't overflow the rounded corners
  },
});
export default CustomBottomSheet;


