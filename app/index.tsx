import { StyleSheet } from 'react-native';
import HomeSearch from './HomeSearch';

export default function HomeScreen() {
  return (
   <>
     {/* <Home/> */}
     <HomeSearch/>
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
