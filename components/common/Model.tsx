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
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const HalfScreenModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setChecked] = useState(false);

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
              <Text style={styles.text}>Lock in Your Preferences: Save This Search</Text>
              <View style={{width:'100%'}}>
                {/* <Text>Name Your Search</Text> */}
                <View style={styles.inputContainer}>
                <FloatingLabelInput
                  label={'Name Your Search'} // Dynamically set label
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
<View>
    <Text>Email Me</Text>
    <View>
        <View style={{flexDirection:'row',width:'40%',backgroundColor:'#F7F7F7',borderRadius:30,padding:5,marginBottom:10,}}>
            <Checkbox 
            style={styles.checkbox}
            value={isChecked} 
            color={isChecked ? '#3366cc' : ''}
            onValueChange={setChecked} 
            />
            <Text>No Email</Text>
        </View>

        <View style={{flexDirection:'row', width:'40%', borderRadius:30,padding:5,backgroundColor:'rgba(51,102,204,0.12)'}}>
            <Checkbox 
            style={styles.checkbox}
            value={isChecked} 
            color={isChecked ? '#3366cc' : ''}
            onValueChange={setChecked} 
            />
            <Text>Email Daily</Text>
        </View>
    </View>
   
</View>
                
              </View>
              <Button
                title="Close Modal"
                onPress={() => {
                  setShowModal(false);
                }}
              />
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
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  indicator: {
    width: 40, // Width of the gray line
    height: 5,  // Thickness of the line
    backgroundColor: '#ccc', // Gray color
    borderRadius: 2.5, // Rounded edges
    marginBottom: 15, // Spacing between the line and modal content
  },
  text: {
    color: '#333',
    fontSize: 18,
    marginBottom: 20,
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
  horizontalLine:{
    width:76,
    borderWidth:1,
    borderColor:'#C0C0C0',
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
});

export default HalfScreenModal;
