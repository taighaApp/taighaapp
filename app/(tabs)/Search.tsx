import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import HomeSearchMap from '@/components/HomeSearch/HomeSearchMap';
import Buttons from '@/components/common/Buttons';
import { router } from 'expo-router';

function Search({route}:any) {
  const handlecardView = ()=>{
    router.navigate('/Login');
  }

  const handleListView = ()=>{
    router.push('/HomeSearch/PropertyListView');
  }

    return (
      <View style={styles.screenContainer}>
        <View>
        <Buttons
                    title="Card View"
                    size="half"
                    backgroundColor="#3366cc"
                    textColor="#FFF"
                    marginBottom={0}
                    // borderColor="#3366cc"
                    fontSize={18}
                    isTag={false}
                    onPress={ handlecardView }
                  />
                      <Buttons
                    title="List View"
                    size="half"
                    backgroundColor="#3366cc"
                    textColor="#FFF"
                    marginBottom={0}
                    // borderColor="#3366cc"
                    fontSize={18}
                    isTag={false}
                    onPress={ handleListView }
                  />
        </View>
          <View>
            <Text>Maps Loading...</Text>
          </View>
        {/* <HomeSearchMap
          isActive={''}
          street={''}
          address={''}
          price={0}
          showCheckbox={false} images={''} 
        //   route={route}     
            /> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
      },
  })
export default Search