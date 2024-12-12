import React, { useRef, useMemo } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView, View } from "react-native";
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";

const { height: windowHeight } = Dimensions.get("window");
// Type for the props, which includes `children`
interface CustomBottomSheetProps {
  children: React.ReactNode;
  initialIndex?: number;
  snapPoints?: (string | number)[];
  onIndexChange?: (index: number) => void; 
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({ children, initialIndex = 0, onIndexChange, snapPoints = ['25%', '50%', windowHeight+300], }) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
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
      <BottomSheetScrollView style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={true}
      >
              {/* Render the children here */}
                {children}
      </BottomSheetScrollView>
      </BottomSheet>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
export default CustomBottomSheet;


