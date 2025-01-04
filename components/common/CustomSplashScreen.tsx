
import React, { useEffect, useRef,useState } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function   () {
  const [isLoading, setIsLoading] = useState(true);
  const animationProgress = useRef(new Animated.Value(1)).current;
  
    useEffect(() => {
      SplashScreen.preventAutoHideAsync();
      
      const timer = setTimeout(() => {
      Animated.timing(animationProgress, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
        SplashScreen.hideAsync();
     });
    },1000)
    return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/Aguado.gif')}
            style={styles.gif}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>A True All-In-One Real Estate Platform</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3366cc',
    },
    gif: {
      width: '100%',
      height: '100%',
    },
    logoText:{
      marginBottom:55,
      color:'#fff',
      fontSize:20,
      fontWeight:'semibold',
      fontFamily:'LatoRegular'
  },
});