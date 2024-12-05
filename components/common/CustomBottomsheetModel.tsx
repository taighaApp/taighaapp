



import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

const { height } = Dimensions.get('window');

interface Props {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  snapPoints: (string | number)[]; // Accept snapPoints as a prop
  showHandleIndicator?:boolean;
}

const CustomBottomsheetModel: React.FC<Props> = ({ children, bottomSheetRef, snapPoints, showHandleIndicator=true }) => {
  // Use height percentages as numeric values for more consistency
  // const snapPoints = useMemo(() => [0.1 * height, 0.5 * height, 0.9 * height], []);
  const defaultSnapPoints = useMemo(() => snapPoints || ['25%', '50%', '75%'], [snapPoints]);

  const handleDismiss = useCallback(() => {
    console.log('Dismiss button pressed');
  }, []);

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

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={defaultSnapPoints.length - 1}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      enableDismissOnClose={true}
      style={styles.bottomsheetModel}
      enableOverDrag={true}
      onDismiss={handleDismiss}
      handleIndicatorStyle={showHandleIndicator ? { backgroundColor: '#E2E2E2' } : { display:'none' }} // Conditional styling
      backdropComponent={renderBackdrop}
      handleComponent={showHandleIndicator ? undefined : () => null}
    >
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomsheetModel: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    // backgroundColor: '#ffffff',
    borderRadius: 20, // Ensure border radius is applied here
    overflow: 'hidden', // Ensures content respects border radius
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: '#ffffff',
    // borderTopLeftRadius: 10, // Reapply border radius if handleComponent is removed
    // borderTopRightRadius: 10,
  },

});

export default CustomBottomsheetModel;


