import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DashboardScreen() {
  const handleClick = () =>{
    router.push('/Home');
  }
  return (
    <View style={styles.screenContainer}>
      <Button title='test' onPress={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
