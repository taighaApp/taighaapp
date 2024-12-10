import { View,StyleSheet } from 'react-native'
import React from 'react'
import HomeSearchMap from '@/src/components/HomeSearch/HomeSearchMap';

function Search({route}:any) {
    return (
      <View style={styles.screenContainer}>
        <HomeSearchMap
          isActive={''}
          street={''}
          address={''}
          price={0}
          showCheckbox={false} images={''} 
        //   route={route}     
            />
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