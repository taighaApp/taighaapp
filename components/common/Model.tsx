//import React in our code
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

//import all the components we are going to use
import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Buttons from './Buttons';
import { RadioButton } from 'react-native-paper';

const HalfScreenModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState('option1'); // Default selected value


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true} // Make modal background transparent
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          {/* Semi-transparent background */}
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setShowModal(false)} // Close modal on backdrop press
          >
            <View style={styles.modal}>
            <View style={styles.indicator} />

              {/* Modal content */}
              <Text style={styles.searchText}>Lock in Your Preferences: Save This Search</Text>
              <View style={styles.nameInput}>
                <View style={styles.inputContainer}>
                <Text style={styles.emailmeText}>Name Your Search</Text>

                <FloatingLabelInput
                  label={'Name'} // Dynamically set label
                //   value={signUpdata.website} // Access the value dynamically
                  //  mask=""
                  hint="Name"
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
                //   onChangeText={(value) => handleChange('website', value)}
                   />
                {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
              </View>
                <View style={styles.horizontalLine} />
                    <View style={styles.selectEmailContainer}>
                        <Text style={styles.emailmeText}>Email Me</Text>
                        <View style={styles.selectEmail}>
                            <View style={{flexDirection:'row',width:'35%',backgroundColor:'#F7F7F7',padding:2.5,borderRadius:30,marginBottom:10,}}>
                                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                                        <View style={styles.radioItem}>
                                            <RadioButton.Android color='#AFAFAF' value="NoEmail" />
                                            <Text style={styles.radioText}>No Email</Text>
                                        </View>
                                </RadioButton.Group>
                            </View>

                            <View style={{flexDirection:'row', width:'35%', borderRadius:30,padding:2.5,backgroundColor:'rgba(51,102,204,0.12)'}}>
                                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                                    <View style={styles.radioItem}>
                                        <RadioButton.Android color='#3366CC' value="EmailDaily" />
                                        <Text>Email Daily</Text>
                                    </View>
                                </RadioButton.Group>
                            </View>
                        </View>
                        
                    
                    </View>
                </View>
              <View style={{
                width: '100%',
                height: 70,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                // Shadow for iOS
                shadowColor: '#000', // Darker shadow color for better visibility
                shadowOffset: { width: 0, height: 9 }, // Adjust height for more spread above
                shadowOpacity: 0.8, // Maximum opacity
                shadowRadius: 6, // Larger blur radius for better visibility
                // Shadow for Android
                elevation: 20, // Higher elevation for a more visible shadow
                position: 'relative',
                overflow: 'visible',
                }}
                >
                        <Buttons title='Save'/>
                    </View>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Button to open modal */}
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'transparent', 
    justifyContent: 'flex-end',
  },
  modal: {
    height: 'auto',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  indicator: {
    width: 40, // Width of the gray line
    height: 5,  // Thickness of the line
    backgroundColor: '#ccc', // Gray color
    borderRadius: 2.5, // Rounded edges
    marginBottom: 15, // Spacing between the line and modal content
  },
  searchText: {
    color: '#6A6A6A',
    fontSize: 15,
    fontWeight:'light',
    marginBottom: 20,
    letterSpacing:1,
  },
  nameInput:{
    paddingHorizontal:20,
    width:'100%',
    marginBottom:15,
  },
  inputContainer:{
    marginBottom:25,
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
  horizontalLine: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: '#ECECEC',
  },
  selectEmailContainer:{
    marginTop:20,
  },
  emailmeText:{
fontSize:17,
fontWeight:'semibold',
marginBottom:25,

  },
  selectEmail:{
    // marginTop:25,
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
title: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText:{
    color:'#00000',
    fontWeight:'semibold',
    fontSize:14,
  },

});

export default HalfScreenModal;
