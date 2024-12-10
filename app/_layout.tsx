import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Login from './Login';
import Tabs from './(tabs)/_layout';
import Signup from './Signup';
import { createStackNavigator } from '@react-navigation/stack';

import NotFoundScreen from './+not-found';
import Index from './index';
import DrawerLayout from './drawer/_layout';
import Home from './Home';
import Seller from './drawer/Seller';
import Dashboard from './(tabs)/Dashboard';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    LatoRegular: require('../assets/fonts/Lato/Lato-Regular.ttf'),
    LatoSemiBold: require('../assets/fonts/Lato/Lato-SemiBold.ttf'),
    LatoLight: require('../assets/fonts/Lato/Lato-Light.ttf'),
    LatoBold: require('../assets/fonts/Lato/Lato-Bold.ttf'),
    interRegular: require('../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    interMedium: require('../assets/fonts/Inter/static/Inter_18pt-Medium.ttf'),
    interBold: require('../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="/(tabs)" component={Tabs} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="+not-found" component={NotFoundScreen} />
    <Stack.Screen name="Drawer" component={DrawerLayout} /> 
    </Stack.Navigator>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


 