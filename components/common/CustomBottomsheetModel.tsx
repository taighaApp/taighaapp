

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import {  BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
}

const CustomBottomsheetModel: React.FC<Props> = ({ children, bottomSheetRef }) => {
  const snapPoints = useMemo(() => ['7%','50%', '90%'], []);

  const handleSheetChange = useCallback(
    (index: any) => {
      if (index >= 0 && index < snapPoints.length) {
        console.log(`Sheet changed to index: ${index}`);
      }else{
        bottomSheetRef.current?.snapToIndex(2);
      }
    },
    [snapPoints]
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef} // Attach the ref here
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      enableDismissOnClose={false}
      enableOverDrag={false}
      enableContentPanningGesture={true}
      handleIndicatorStyle={{ backgroundColor: '#E2E2E2' }}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomBottomsheetModel;

