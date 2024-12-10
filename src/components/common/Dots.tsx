import {StyleSheet, View,  Image, Text, Dimensions, Button, Pressable, ScrollView, Linking, Animated} from 'react-native';
import React, { useEffect, useState, useRef } from "react";



interface CustomComponentProps {
    pageType: 'Home' | 'Login' | 'Signup' ; // Specify the allowed string values
}

 const Dots = ({ pageType }: CustomComponentProps)=>{
    const [translateYAnim] = useState(new Animated.Value(0)); // Vertical movement animation
    const [fadeAnim] = useState(new Animated.Value(0)); // Opacity animation
    const [radiusAnim] = useState(new Animated.Value(20)); // Initial radius size of 20


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000, // Fade in duration
                    useNativeDriver: false,
                }),
                Animated.delay(1000),
            Animated.parallel([
                Animated.timing(translateYAnim, {
                    toValue: -50,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(fadeAnim, {
                    toValue:  0, // Reset back to original position
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(radiusAnim, {
                    toValue:  10, // Reset back to original position
                    duration: 1000,
                    useNativeDriver: false,
                }),
        ]),
                        Animated.parallel([
                    Animated.timing(translateYAnim, {
                        toValue: 0, // Reset to original position
                        duration: 0,
                        useNativeDriver: false,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 0, // Reset to fully visible
                        duration: 0,
                        useNativeDriver: false,
                    }),
                    Animated.timing(radiusAnim, {
                        toValue: 20, // Reset radius to 20
                        duration: 0,
                        useNativeDriver: false,
                    }),
                ]),
        ])
        ).start();
    }, []);




    return(
        <View style={pageType === 'Home' ? styles.dotWrapperHome : styles.dotWrapper}>
        <Animated.View
            style={[pageType === 'Home' ? styles.topLeftDots: styles.dotbottomLeftBig ,{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
                // width: radiusAnim,
                // height: radiusAnim,
                // borderRadius: radiusAnim,
            }]}
        >
        </Animated.View>
        <Animated.View
            style={[pageType === 'Home' ? styles.bottomLeftDots: styles.dotTopLeftSmall,{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
                // width: radiusAnim,
                // height: radiusAnim,
                // borderRadius: radiusAnim,
            }]}
        >
        </Animated.View>
        <Animated.View
            style={[pageType === 'Home' ? styles.topRightDots : styles.dotTopRightSmall,{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
                // width: radiusAnim,
                // height: radiusAnim,
                // borderRadius: radiusAnim,
            }]}
        >
        </Animated.View>
        <Animated.View
            style={[pageType === 'Home' ? styles.bottomRightDots : styles.dotBottomRightSmall,{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
                // width: radiusAnim,
                // height: radiusAnim,
                // borderRadius: radiusAnim,
            }]}
        >
        </Animated.View>
         
        </View>
    )
}
export default Dots;

const styles = StyleSheet.create({
    dotWrapper:{
        position:'absolute',
        top:104,
        // zIndex:9,
        width:300,
        height:125,
        right:35,
        // borderWidth:1
       },
       dotWrapperHome:{
        position:'absolute',
        bottom:300,
        zIndex:9,
        width:300,
        height:125,
        right:20,
        // borderWidth:1
       },
       dotTopLeftSmall:{
        width:5,
        height:5,
        backgroundColor:'#1F56C5',
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft:54.5
       },
       dotbottomLeftBig:{
        width:10,
        height:10,
        backgroundColor:'#1F56C5',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft:189,
        marginTop:8
       },
       dotTopRightSmall:{
        width:20,
        height:20,
        backgroundColor:'#1F56C5',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop:77
       },
       dotBottomRightSmall:{
        width:10,
        height:10,
        backgroundColor:'#1F56C5',
        borderRadius: 5,
        overflow: 'hidden',
        marginTop:-10,
        marginLeft:295
       },
       bottomLeftDots:{
        width:20,
        height:20,
        backgroundColor:'#1F56C5',
        borderRadius:10,
        top:95.5
       },
       topRightDots:{
        width:10,
        height:10,
        backgroundColor:'#1F56C5',
        borderRadius:5,
        top: -11,
        left:189
       },
       topLeftDots:{
        width:5,
        height:5,
        backgroundColor:'#1F56C5',
        borderRadius:10,
        top:5,
        left:55,
       },
       bottomRightDots:{
        width:10,
        height:10,
        backgroundColor:'#1F56C5',
        borderRadius:5,
        top:115,
        left:288
       }
})