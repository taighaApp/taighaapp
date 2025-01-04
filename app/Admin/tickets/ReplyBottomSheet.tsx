import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useGlobalContext } from '@/hooks/context/GlobalContext';


const ReplyBottomSheet = () => {
const [show,setShow]= useState(false);
const [cc, setCc] = useState('');
const [template, setTemplate] = useState('');
const [property, setProperty] = useState('');
const [group, setGroup] = useState('');
const [staff, setStaff] = useState('');
const [priority, setPriority] = useState('');
const [status, setStatus] = useState('');
const [access, setAccess] = useState('');
const [taggleOptionshow, setToggleOptionShow] = useState(false);

const toggleOptionShow = () => {
    setToggleOptionShow((prev) => !prev);
};
  return (
        <View style={{margin:20,}}>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between', height:50,borderBottomWidth:1,borderColor:'#ECECEC'}}>
                <View style={{flexDirection:'row',height:30,}}>
                    <Text>To:</Text>
                    <Text style={{backgroundColor:'#D7E9FF',borderRadius:24,marginLeft:10,fontFamily:'rubicRegular',fontSize:15,letterSpacing:0.2,lineHeight:22,paddingHorizontal:15,paddingVertical:5,}}>Psdinesh@taigha.com</Text>
                </View>

                <TouchableOpacity
                onPress={toggleOptionShow}
                    style={{width:30,height:30,borderRadius:40,backgroundColor:'#F3F3F3',marginLeft:15,alignItems:'center',justifyContent:'center'}}>
                    <AntDesign
                        name={ taggleOptionshow ? "up" : "down"} 
                        size={15} 
                        color="black" />
                </TouchableOpacity>
              
            </View> 
            <View>

                {taggleOptionshow &&
            <View>
                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="CC"
                    value={cc}
                    //  mask=""
                    hint="CC"
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
                    onChangeText={setCc}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="template"
                    value={template}
                    //  mask=""
                    hint="template"
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
                    onChangeText={setTemplate}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Property"
                    value={property}
                    //  mask=""
                    hint="Property"
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
                    onChangeText={setProperty}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Group"
                    value={group}
                    //  mask=""
                    hint="Group"
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
                    onChangeText={setGroup}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Staff"
                    value={staff}
                    //  mask=""
                    hint="Staff"
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
                    onChangeText={setStaff}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Priority"
                    value={priority}
                    //  mask=""
                    hint="Priority"
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
                    onChangeText={setPriority}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Status"
                    value={status}
                    //  mask=""
                    hint="Status"
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
                    onChangeText={setStatus}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>

                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                    label="Access"
                    value={access}
                    //  mask=""
                    hint="Access"
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
                    onChangeText={setAccess}
                    />
                    {/* {errors.website && <Text style={styles.error}>{errors.website}</Text>} */}
                </View>
          
            </View>
            }
            {/* <View>
                <Text>Hello Dinesh,</Text>
                <Text>I hope this mail finds you well. I would like to  confirm the details for our upcoming work meeting, Thanks.</Text>
            </View> */}
            <View style={{marginTop:35,}}>
                <TextInput 
                style={{fontFamily:'rubikRegular',fontSize:17,letterSpacing:0.2,lineHeight:22,}}
                placeholderTextColor={'#000000'}
                placeholder='Type Here...'
                />
            </View>
            </View>

        </View>
  )
}

const styles = StyleSheet.create({
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
      inputContainer:{
        marginBottom:20,
      },
})
export default ReplyBottomSheet