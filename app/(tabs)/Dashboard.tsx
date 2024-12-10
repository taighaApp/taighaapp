

import { View, Text, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React, { useRef } from 'react';
import { Link, useRouter } from 'expo-router';
import CustomBottomsheetModel from '@/src/components/common/CustomBottomsheetModel';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { FAB } from 'react-native-paper';

const Dashboard = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const router = useRouter(); // Hook called correctly inside the component body.

 const handlepress =()=>{router.push('/(tabs)/Dashboard')}
 
  return (
    <View style={styles.container}>
        <View>
        <Pressable onPress={handlepress}>
          <Text>Favorites</Text>
        </Pressable>
        {/* <CustomBottomsheetModel 
          bottomSheetRef={bottomSheetModalRef}
          snapPoints={['10%', '46%']}
          showHandleIndicator={true}
          > */}
            {/* <View style={{marginHorizontal:20,}}>
              <Text style={styles.searchText}>Lock in Your Preferences: Save This Search</Text>
  
                <View style={{borderBottomWidth:1,paddingBottom:25,borderColor:'#ECECEC',}}>
                  <Text style={styles.optionHeadings}>Name Your Search</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder='Name'
                  />
                </View>
  
                  <View style={styles.selectEmailContainer}>
                    <Text style={styles.optionHeadings}>Email Me</Text>
  
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
  
                  <View style={styles.saveFooter}>
                    <TouchableOpacity style={{backgroundColor:'#3366cc',alignItems:'center',justifyContent:'center',height:35,width:65,borderRadius:8}}>
                      <Text style={{color:'#fff',fontFamily:'LatoBold',fontSize:14,}}>Save</Text>
                    </TouchableOpacity>
                  </View> */}
  
        {/* </CustomBottomsheetModel> */}
      </View>


      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});

export default Dashboard;

