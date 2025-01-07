import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Login from './Login';
import Tabs from './(tabs)/_layout';
import Signup from './Signup';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerLayout from './drawer/_layout';
import Home from './Home';
import Seller from './drawer/Seller';
import Dashboard from './(tabs)/Dashboard';
import CustomSplashScreen from '@/components/common/CustomSplashScreen';
import { GlobalProvider } from '@/hooks/context/GlobalContext';
import AdminNavigator from './Admin/_layoyt';
import Properties from './Admin/Properties/Properties';
import Documents from './Admin/Documents/Documents';
import Tasks from './Admin/Tasks/Tasks';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);

  const [loaded] = useFonts({
    LatoRegular: require('../assets/fonts/Lato/Lato-Regular.ttf'),
    LatoSemiBold: require('../assets/fonts/Lato/Lato-SemiBold.ttf'),
    LatoLight: require('../assets/fonts/Lato/Lato-Light.ttf'),
    LatoBold: require('../assets/fonts/Lato/Lato-Bold.ttf'),
    interRegular: require('../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    interMedium: require('../assets/fonts/Inter/static/Inter_18pt-Medium.ttf'),
    interBold: require('../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
    rubikRegular: require('../assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    rubikLight: require('../assets/fonts/Rubik/static/Rubik-Light.ttf'),
    rubikMedium: require('../assets/fonts/Rubik/static/Rubik-Medium.ttf'),
    rubikSemiBold: require('../assets/fonts/Rubik/static/Rubik-SemiBold.ttf'),
    rubikBold: require('../assets/fonts/Rubik/static/Rubik-Bold.ttf'),
  });

  useEffect( () => {
    const timer = setTimeout(async () => {
      setShowSplash(false);
      await SplashScreen.hideAsync();
      loaded;
    }, 1000);
    return () => clearTimeout(timer);
  }, [loaded]);

 
  if (showSplash) {
    return <CustomSplashScreen />;
 }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <GlobalProvider>
    <StatusBar style="auto" />
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={ Home } />
    <Stack.Screen name="Login" component={ Login } />
    <Stack.Screen name="/(tabs)" component={ Tabs } />
    <Stack.Screen name="Signup" component={ Signup } />
    <Stack.Screen name="Admin" component={ AdminNavigator } />
    <Stack.Screen name="Properties" component={ Properties }/>
    <Stack.Screen name="Documents" component={ Documents }/>
    <Stack.Screen name="Tasks" component={ Tasks }/>
    <Stack.Screen name="Drawer" component={ DrawerLayout } /> 

    </Stack.Navigator>
    </GlobalProvider>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


 