import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions, Pressable, Image, Animated, Easing, TouchableOpacity, Linking, Keyboard, Platform, ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";
import { Link, router } from "expo-router";
import Buttons from "@/components/common/Buttons";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Media from "@/components/common/Media";
import PropertyListView from "@/app/HomeSearch/PropertyListView";
import ImageCarousel from "@/components/common/imageCarousel";
import { Checkbox } from "react-native-paper";
// import ImageCarousel from "@/components/common/imageCarousel";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type FormFields = {
  website?: string;
  Firstname?: string;
  Lastname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  interestedIn?: string;
  timeframe?: string;
  HowdidyouHearaboutus?: string;
  comments?: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const App = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);
  const bottomSheetPosition = useRef(new Animated.Value(0)).current;
  const [marginTop, setMarginTop] = useState(80);
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!isChecked);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [signUpdata, setSignUpdata] = useState<FormFields>({
    "website":'',
    "Firstname":'',
    "Lastname":'',
    "email":'',
    "phoneNumber":'',
    "password":'',
    "interestedIn":'',
    "timeframe":'',
    "HowdidyouHearaboutus":'',
    "comments":'',
  });

  const [errors, setErrors] = useState<FormErrors>({});

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
  const imageScale = bottomSheetPosition.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 0.9, 1],
    extrapolate: 'clamp',
  });

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

 // Validate a specific field
 const validateField = (field: keyof FormFields, value: string) => {
    let error = '';
      switch (field) {
        case 'website':
          if (!value) error = 'Website is required';
          break;
        case 'Firstname':
          if (!value) error = 'First Name is required';
          break;
        case 'Lastname':
          if (!value) error = 'Last Name is required';
          break;
        case 'email':
          if (!value) error = 'Email is required';
          else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
            error = 'Invalid email format';
          break;
        case 'phoneNumber':
          if (!value) error = 'Phone number is required';
          else if (!/^\d+$/.test(value)) error = 'Phone number must be numeric';
          break;
        case 'password':
          if (!value) error = 'password is required';
          break;
        case 'interestedIn':
          if (!value) error = 'Please select an option';
          break;
        case 'timeframe':
          if (!value) error = 'Please select an option';
          break;
        case 'HowdidyouHearaboutus':
          if (!value) error = 'Please select an option';
          break;
        case 'comments':
          if (!value) error = 'Comments is required';
          break;
        default:
          if (!value) error = `${field} is required`;
      }
  setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
};

const handleChange = (field: keyof FormFields, value: string) => {
  setSignUpdata((prevData) => ({ ...prevData, [field]: value }));
  validateField(field, value); // Validate on change
};

  // Validate the entire form
  const validateForm = () => {
    const newErrors: FormErrors = {};
    Object.keys(signUpdata).forEach((field) => {
      validateField(field as keyof FormFields, signUpdata[field as keyof FormFields] || '');
    });
    return Object.values(newErrors).every((error) => !error); // Return true if no errors
  };
  
  const handleSubmit = () => {
    // if (validateForm()) {
    //   alert('Form is valid! Submitting...');
    // } else {
    //   alert('Form contains errors!');
    // }
    router.push('/(tabs)/Tickets');
  };

  // render
  return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

          <View>
            <Image
              style={[styles.heroImage]}
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

          <View style={{width:'100%',backgroundColor:'#fff',marginTop:108,paddingTop:20}}>

            <View style={styles.inputSection}>

              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Website'} // Dynamically set label
                  value={signUpdata.website} // Access the value dynamically
                  //  mask=""
                  hint="Your agent's website, Example: taigharealty..."
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  containerStyles={styles.containerStyles}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  onChangeText={(value) => handleChange('website', value)} />
                {errors.website && <Text style={styles.error}>{errors.website}</Text>}
              </View>

              <View style={styles.inputContainer}>
                  <FloatingLabelInput
                    label={'First Name'} // Dynamically set label
                    value={signUpdata.Firstname} // Access the value dynamically
                    //  mask=""
                    hint={"First Name"}
                    staticLabel
                    hintTextColor={'#B1A8A8'}
                    containerStyles={styles.containerStyles}
                    customLabelStyles={{
                      colorFocused: '#3366CC',
                      colorBlurred: '#AFAFAF', // Color when input is not focused
                      fontSizeFocused: 20,
                    }}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                    onChangeText={(value) => handleChange('Firstname', value)} />
                    {errors.website && <Text style={styles.error}>{errors.Firstname}</Text>}
              </View>
                
              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Last Name'} // Dynamically set label
                  value={signUpdata.Lastname} // Access the value dynamically
                  //  mask=""
                  hint="Last Name"
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  containerStyles={styles.containerStyles}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                  onChangeText={(value) => handleChange('Lastname', value)} />
                  {errors.website && <Text style={styles.error}>{errors.Lastname}</Text>}
              </View>
              
              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Email'} // Dynamically set label
                  value={signUpdata.email} // Access the value dynamically
                  //  mask=""
                  hint="Email"
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  containerStyles={styles.containerStyles}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                  onChangeText={(value) => handleChange('email', value)} />
                {errors.website && <Text style={styles.error}>{errors.email}</Text>}
              </View>
              
              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Phone Number'} // Dynamically set label
                  value={signUpdata.phoneNumber} // Access the value dynamically
                  //  mask=""
                  hint="Phone Number"
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  containerStyles={styles.containerStyles}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                  onChangeText={(value) => handleChange('phoneNumber', value)} />
                  {errors.website && <Text style={styles.error}>{errors.phoneNumber}</Text>}
              </View>
                
              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Password'} // Dynamically set label
                  value={signUpdata.password} // Access the value dynamically
                  //  mask=""
                  hint="**********"
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  containerStyles={styles.containerStyles}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  labelStyles={styles.labelStyles}
                  inputStyles={styles.inputStyles}
                  onChangeText={(value) => handleChange('password', value)} />
                  {errors.website && <Text style={styles.error}>{errors.password}</Text>}
              </View>
            
              {/* <View style={styles.lastDropdownWrapper}>
                <Text style={[styles.dropdownLabel, isFocus && { color: '#3366cc', fontSize: 17 }]}>Interested In</Text>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#3366cc' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Interested In'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  } } />
                  {errors.website && <Text style={styles.error}>{errors.interestedIn}</Text>}
              </View> */}
              
              {/* <View style={styles.lastDropdownWrapper}>
                <Text style={[styles.dropdownLabel, isFocus && { color: '#3366cc', fontSize: 17 }]}>Timeframe</Text>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#3366cc' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Timeframe'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  } } />
                  {errors.website && <Text style={styles.error}>{errors.timeframe}</Text>}
              </View> */}
              
              {/* <View style={styles.lastDropdownWrapper}>
                <Text style={[styles.dropdownLabel, isFocus && { color: '#3366cc', fontSize: 17 }]}>How did you Hear about us?</Text>
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#3366cc' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'How did you Hear about us?'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  } } />
                  {errors.website && <Text style={styles.error}>{errors.HowdidyouHearaboutus}</Text>}
              </View> */}
              
              <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Comments'} // Dynamically set label
                  value={signUpdata.comments} // Access the value dynamically
                  //  mask=""
                  // hint="Comments"
                  staticLabel
                  hintTextColor={'#B1A8A8'}
                  multiline={true}
                  numberOfLines={4}
                  containerStyles={{
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    backgroundColor: '#fff',
                    borderColor: '#AFAFAF',
                    borderRadius: 5,
                    height: 80,
                    marginBottom: 20
                  }}
                  customLabelStyles={{
                    colorFocused: '#3366CC',
                    colorBlurred: '#AFAFAF', // Color when input is not focused
                    fontSizeFocused: 20,
                  }}
                  labelStyles={{
                    backgroundColor: '#fff',
                    paddingHorizontal: 5,
                    fontSize: 17
                  }}
                  inputStyles={{
                    color: '#6E6E6E',
                    paddingHorizontal: 10,
                  }}
                  onChangeText={(value) => handleChange('comments', value)} />
                  {errors.website && <Text style={styles.error}>{errors.comments}</Text>}
              </View>
            
              <View style={styles.permissionWrapper}>
                {/* <Pressable style={styles.checkboxWrapper} onPress={toggleCheckbox}>
                  <Checkbox 
                  style={styles.checkbox}
                  value={isChecked} 
                  color={isChecked ? '#3366cc' : ''}
                  onValueChange={setChecked} />
                    <Text style={styles.acceptText}>By clicking Accept to continue, I confirm that i have read the Terms of Service and Privacy Policy</Text>
                </Pressable>
                <Pressable style={[styles.checkboxWrapper,{marginBottom:0 }]} onPress={toggleCheckbox}>
                    <Checkbox
                     style={styles.checkbox}
                      value={isChecked} onValueChange={setChecked} />
                    <Text style={styles.acceptText}>Accept to receive email and text message communication from krishnarealty. You can opt-out from text messages by replying "STOP" to a message. Also, you can opt-in by sending "START" to a text message. Msg & Data rates may apply.</Text>
                </Pressable> */}
              </View>

              <Buttons
                title="Create Account"
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
              <Media />

              <View style={styles.redirectContainer}>
                <Text style={styles.redirectText}>Have an account?{'  '}
                    <Link style={styles.redirectLink} href={'/Login'}>Log In</Link>
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
    // borderWidth:1
  },
  curvedHeader: {
    position: 'absolute',
    top:-95,
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
    // borderWidth:1
    },

  inputSection:{
    marginHorizontal: 20,
    marginVertical: 20,
    // backgroundColor: 'white',
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
    width:'99%',
    alignItems:'center',
    justifyContent:'center'
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
  marginBottom: 20, // Reduced margin for the last dropdown
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

