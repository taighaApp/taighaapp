import React, { useRef, useMemo, useState, forwardRef } from "react";
import { StyleSheet, Dimensions, Platform, ScrollView, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";

const { height: windowHeight } = Dimensions.get("window");
// Type for the props, which includes `children`
interface CustomBottomSheetProps {
  children: React.ReactNode;
  initialIndex?: number;
  snapPoints?: (string | number)[];
  onIndexChange?: (index: number) => void; 
  useBackdrop?: boolean;
  style:any;
  showHandleIndicator?:boolean;
  borderRadius?: number;
    // shadowColor:string;
  // shadowOpacity:Number;
  // elevation:Number;
  // shadowOffset:any;

}

const CustomBottomSheet = forwardRef<BottomSheet, CustomBottomSheetProps>(({
  children, 
  initialIndex = 0, 
  onIndexChange,
  snapPoints = ['25%', '50%',windowHeight, windowHeight+300],
  showHandleIndicator ,
  borderRadius = 0,
  useBackdrop, 
  style,
}, ref) => {
  // hooks
  const [currentBorderRadius, setCurrentBorderRadius] = useState(borderRadius);
  const [showHandleIndicatorTop, setShowHandleIndicatorTop] = useState(showHandleIndicator);

   // Handler for detecting index changes
   const handleSheetChange = (index: number) => {
    if (onIndexChange) {
      onIndexChange(index); // Trigger the callback if provided
    }
     // Set border radius to 0 when at the last snap point
     const isLastSnapPoint = index === snapPoints.length - 1;
     setCurrentBorderRadius(isLastSnapPoint && showHandleIndicatorTop ? 30 : borderRadius);
     setShowHandleIndicatorTop(isLastSnapPoint ? true:false);
  };

  return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={initialIndex}
        onChange={handleSheetChange}
        style={[styles.bottomSheet, style,{ borderTopLeftRadius: currentBorderRadius, borderTopRightRadius: currentBorderRadius }]}//shadowColor, shadowOpacity, elevation, shadowOffset
        enableOverDrag={false}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
        keyboardBlurBehavior="restore"
        detached={true}
        // handleIndicatorStyle={{backgroundColor:'#E2E2E2'}}
        handleIndicatorStyle={showHandleIndicator || showHandleIndicatorTop ? { backgroundColor: '#E2E2E2' } : { display:'none' }} // Conditional styling
        backdropComponent={
          useBackdrop
            ? (backdropProps) => (
                <BottomSheetBackdrop
                  {...backdropProps}
                  enableTouchThrough={true}
                />
              )
            : undefined // No backdrop for this page
        }
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
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: '#fffff',
    overflow: 'hidden',
    elevation: 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
export default CustomBottomSheet;

