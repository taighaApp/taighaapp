

import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {  BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

interface Props {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
}

const CustomBottomsheetModel: React.FC<Props> = ({ children, bottomSheetRef }) => {
  const snapPoints = useMemo(() => ['7%','50%', '90%'], []);

  const handleDismiss = useCallback(() => {
    // console.log('Dismiss button pressed');
  }, []);
  
  // const handleSheetChange = useCallback(
  //   (index: any) => {
  //     if (index >= 0 && index < snapPoints.length) {
  //       console.log(`Sheet changed to index: ${index}`);
  //     }else{
  //       bottomSheetRef.current?.snapToIndex(2);
  //     }
  //   },
  //   [snapPoints]
  // );

  return (
    <BottomSheetModal
      ref={bottomSheetRef} // Attach the ref here
      index={2}
      snapPoints={snapPoints}
      // onChange={handleSheetChange}
      enableDismissOnClose={true}
      style={styles.bottomsheetModel}
      enableOverDrag={false}
      onDismiss={handleDismiss}
      enableContentPanningGesture={true}
      handleIndicatorStyle={{ backgroundColor: '#E2E2E2' }}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};
const styles = StyleSheet.create({
  bottomsheetModel:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20, 
    backgroundColor: '#fffff', 
    borderRadius: 10, 
  }
})

export default CustomBottomsheetModel;

