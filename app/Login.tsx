import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions, Pressable, Image, Animated, Easing, TouchableOpacity, Linking, Keyboard, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { Dropdown } from "react-native-element-dropdown";
import Buttons from "@/components/common/Buttons";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Media from "@/components/common/Media";
import PropertyListView from "@/components/common/PropertyListView";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type Errors = {
  website?: string;
  email?: string;
  password?: string;
};

const App = () => {
const [website, setWebsite] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState<Errors>({});

const scrollY = useRef(new Animated.Value(0)).current;
const animatedScale = useRef(new Animated.Value(1)).current;

const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
const yOffset = event.nativeEvent.contentOffset.y;

  // Animate the scale based on scroll position
  Animated.timing(animatedScale, {
    toValue: yOffset > 0 ? Math.max(1 - yOffset / 300, 0.1) : 1,
    duration: 200, 
    useNativeDriver: true,
  }).start();
};


  const CurvedHeader = () => (
    <Svg
    width={SCREEN_WIDTH}
    height={150}
    viewBox={`0 0 ${SCREEN_WIDTH} 150`}
    style={styles.curvedHeader}
  >
    <Path
      d={`
        M0 150
        Q${SCREEN_WIDTH / 2} 0 ${SCREEN_WIDTH} 150
        L${SCREEN_WIDTH} 150
        L0 150
        Z
      `}
      fill="#fff"
    />
  </Svg>
  );



const validateInputs = () => {
  const newErrors:Errors = {};
  // Website validation
  if (!website) {
    newErrors.website = 'Website is required.';
  } else if (!/^https?:\/\/[\w.-]+\.\w{2,3}/.test(website)) {
    newErrors.website = 'Invalid website URL.';
  }

  // Email validation
  if (!email) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Invalid email format.';
  }

  // Password validation
  if (!password) {
    newErrors.password = 'Password is required.';
  } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters.';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Returns true if no errors
}


const handleSubmit = () => {
  if (validateInputs()) {
    console.log('Website:', website);
    console.log('Email:', email);
    console.log('Password:', password);
    // Proceed with form submission or API call
  }
  setWebsite('');
  setEmail('');
  setPassword('');
};


  // render
  return (
        <ScrollView style={styles.container} 
          showsVerticalScrollIndicator={false} 
          scrollEventThrottle={16}
          onScroll={handleScroll}
        >
          <View style={{height:SCREEN_HEIGHT-672}}>
            <Animated.Image
              style={[styles.heroImage, { transform: [{ scale: animatedScale }] }]}
              source={require('../assets/images/login-logo.png')}
            />
            <Image
              style={styles.buildingImage}
              source={require('../assets/images/building-skeleton.png')}
            />
             <View style={styles.headerContainer}>
                <CurvedHeader />
            </View>
          </View>
           
            <View style={{flex:1,height:SCREEN_HEIGHT-320,width:'100%',backgroundColor:'#fff',marginTop:109}}>
              <View style={styles.inputSection}>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                      label="Website"
                      value={website}
                      //  mask=""
                      hint="Your agent's website, Example: taigharealty..."
                      staticLabel
                      hintTextColor={'#B1A8A8'}
                      containerStyles={styles.containerStyles}
                      customLabelStyles={{
                        colorFocused: '#3366CC',
                        colorBlurred: '#AFAFAF',  // Color when input is not focused
                        fontSizeFocused: 20,
                      }}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                      onChangeText={setWebsite}
                    />
                    {errors.website && <Text style={styles.error}>{errors.website}</Text>}
                </View>

               <View style={styles.inputContainer}>
                    <FloatingLabelInput
                      label="Email"
                      value={email}
                      //  mask=""
                      hint="Email"
                      staticLabel
                      hintTextColor={'#B1A8A8'}
                      containerStyles={styles.containerStyles}
                      labelStyles={styles.labelStyles}
                      inputStyles={styles.inputStyles}
                      onChangeText={setEmail}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email}</Text>}
               </View>
               
                <View style={styles.inputContainer}>
                      <FloatingLabelInput
                        label="Password"
                        value={password}
                        //  mask=""
                        hint="**********"
                        staticLabel
                        hintTextColor={'#B1A8A8'}
                        containerStyles={styles.containerStyles}
                        customLabelStyles={{
                          colorFocused: '#3366CC',
                          colorBlurred: '#AFAFAF',  // Color when input is not focused
                          fontSizeFocused: 20,
                        }}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.inputStyles}
                        onChangeText={setPassword}
                      />
                      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                </View>

                <View style={{alignItems:'flex-end'}}>
                    <Link style={styles.forgetLink} target="_blank" href={"/"} >Forgot Password?</Link>
                </View>
                
                  <Buttons
                    title="Log In"
                    size="half"
                    backgroundColor="#3366cc"
                    textColor="#FFF"
                    marginBottom={0}
                    // borderColor="#3366cc"
                    fontSize={18}
                    isTag={false}
                    onPress={handleSubmit}
                  />
                <View style={{flexDirection: 'row', alignItems: 'center', margin:'auto',marginTop:20}}>
                  <View style={styles.horizontalLine} />
                      <Text style={styles.horizontalLineText}>Or Sign in with</Text>
                  <View style={styles.horizontalLine} />
                </View>
                {/* Media Component */}
                  <Media/>

                <View style={{width:'99%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.redirectText}>Don’t have an account?{' '}
                        <Link style={styles.redirectLink} href={'/Signup'}>Sign Up</Link>
                    </Text>
                </View>
                </View>
              </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3366cc' 
  },
  headerContainer: {
    top:126,
    height: 72,
    position: 'relative',
    zIndex: 1,
  },
  curvedHeader: {
    position: 'absolute',
    top:-94,
    height: 75,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  heroImage: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal:'auto',
    marginTop:80
  },
  buildingImage:{
    marginTop:70,
    width:'100%',
    height:400,
    objectFit:'cover', 
    position:'absolute',
    },
  inputSection:{
    marginHorizontal: 20,
    marginVertical: 19,
},
inputContainer:{
  marginBottom:20,
},
containerStyles:{
  borderWidth: 1,
  paddingHorizontal: 10,
  backgroundColor: '#fff',
  borderColor: '#AFAFAF',
  borderRadius: 5,
  height:47,
},
labelStyles:{
  backgroundColor: '#fff',
  paddingHorizontal: 5,
  fontSize:17,
  // left:20
},
inputStyles:{
  color: '#6E6E6E',
  paddingHorizontal: 10,
},
  redirectContainer: {
    marginHorizontal:'auto',
    marginBottom: 16,
    // borderWidth:1,
    width:'auto',
  },
redirectText: {
  color: '#6E6E6E',
  fontWeight: 'medium',
  fontSize: 15,
  fontFamily: 'LatoRegular',
},
redirectLink: {
  color: '#0245FF',
  fontSize: 15,
  fontFamily: 'LatoRegular',
},
forgetLink: {
  fontSize: 13,
  fontWeight: 'medium',
  alignItems: 'flex-end',
  color: '#0245FF',
},
dropdownLabel: {
  position: 'absolute',
  color:'#B1A8A8',
  backgroundColor: 'white',
  left: 20,
  top: -8,
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 17,
},
dropdown: {
  height: 47,
  borderColor: '#AFAFAF',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 8
},
placeholderStyle: {
  paddingLeft:8,
  fontSize: 16,
  color:'#B1A8A8'
},
selectedTextStyle: {
  paddingLeft:8,
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
lastDropdownWrapper: {
  marginBottom: 30, // Reduced margin for the last dropdown
},
permissionWrapper:{
  marginVertical:10,
},
 horizontalLine:{
  width:76,
  borderWidth:1,
  borderColor:'#C0C0C0',
 },
 horizontalLineText:{
   textAlign: 'center',
   width:'auto',
   marginHorizontal:25,
   fontSize:15,
   fontFamily:'LatoRegular',
   fontWeight:'medium'
  },
  checkboxWrapper:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
},
checkbox:{
    width: 19,
    height: 19,
    marginRight: 8,
    borderRadius:5,
    borderColor:'#AFAFAF',
    borderWidth:0.5,
    marginTop:3
},
acceptText:{
  fontSize:16,
  color:'#6E6E6E',
  flex:1,
  flexWrap:'wrap',
  fontFamily:'interRegular',
  fontWeight:'medium'
},
error: {
  color: 'red',
  fontSize: 12,
  // marginBottom: 10,
},
});

export default App;

