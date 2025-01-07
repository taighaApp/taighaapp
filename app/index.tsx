import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout';

const index:React.FC =() => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
          <BottomSheetModalProvider>
            <RootLayout />
          </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default  index;