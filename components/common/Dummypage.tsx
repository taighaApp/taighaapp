import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import CustomBottomSheet from './CustomBottomSheet';

const Dummypage = () => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Your scrollable content */}
        {[...Array(50)].map((_, index) => (
          <Text key={index} style={styles.text}>psd</Text>
        ))}
      </ScrollView>
      {/* Bottom Sheet */}
      <CustomBottomSheet>
        <Text>psd</Text>
      </CustomBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Add padding to prevent content from being hidden behind bottom sheet
  },
  text: {
    padding: 8,
  },
});

export default Dummypage;