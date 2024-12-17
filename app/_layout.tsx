import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
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
    rubikRegular: require('../assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    rubikLight: require('../assets/fonts/Rubik/static/Rubik-Light.ttf'),
    rubikMedium: require('../assets/fonts/Rubik/static/Rubik-Medium.ttf'),
    rubikSemiBold: require('../assets/fonts/Rubik/static/Rubik-SemiBold.ttf'),
    rubikBold: require('../assets/fonts/Rubik/static/Rubik-Bold.ttf'),
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
    {/* <FunctionContext> */}

    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="/(tabs)" component={Tabs} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Drawer" component={DrawerLayout} /> 
    </Stack.Navigator>
    {/* </FunctionContext> */}
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}


 