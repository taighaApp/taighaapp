import { View, Text, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Media = () => {
//functions
  const handlePressApple = () => Linking.openURL('https://www.apple.com');
  const handlePressGoogle = () => Linking.openURL('https://www.google.com');
  const handlePressFb = () => Linking.openURL('https://www.facebook.com');
  
  return (
            <View style={styles.mediaContainer}>
                <View style={styles.imageWrapper}>
                    <TouchableOpacity onPress={handlePressApple}>
                        <Image
                        style={styles.mediaImage}  source={require('../../assets/images/apple.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageWrapper}>
                    <TouchableOpacity onPress={handlePressGoogle}>
                        <Image
                        style={styles.mediaImage}  source={require('../../assets/images/google.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageWrapper}>
                    <TouchableOpacity onPress={handlePressFb}>
                        <Image
                        style={styles.mediaImage}  source={require('../../assets/images/facebook.png')}/>
                    </TouchableOpacity>
                </View>
        </View>
  )
}

const styles = StyleSheet.create({
    mediaContainer: {
        width: 145,
        margin: 'auto',
        marginVertical: 23,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      imageWrapper: {
        width: 37,
        height: 37,
        padding: 10,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      mediaImage: {
        width: 18,
        height: 18,
      },
})
export default Media;