import { Image, StyleSheet,Text, Platform } from 'react-native';

import Home from '../app/Home'
import HomeSearch from './HomeSearch';
import Model from '@/components/common/Model';

export default function HomeScreen() {
  return (
   <>
     {/* <Home/> */}
     {/* <HomeSearch/> */}
     <Model/>
   </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
