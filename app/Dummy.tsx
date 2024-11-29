import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { Children, useMemo, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomBottomSheet from '@/components/common/CustomBottomSheet';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Dummypage from '@/components/common/Dummypage';

const Dummy = () => {
    return (
    <SafeAreaView style={{ flex: 1 }}>
     <Dummypage/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flexGrow: 1,
  },
  mainContent: {
    padding: 16,
  },
  textItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  bottomSheetContent: {
    flex:1
  },
  bottomSheetText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Dummy;
