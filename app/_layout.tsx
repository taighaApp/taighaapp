import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PropertiesDetails from './Propertiesdetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Admin/Dashboard';
import Tabs from './(tabs)/_layout';
const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// Prevent the splash screen from auto-hiding before asset loading is complete.
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
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          
           <Drawer.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            drawerStyle: { width: 240 },
            drawerActiveTintColor: '#e91e63',
          }}
        >
          <Drawer.Screen
            name="Tabs"
            component={Tabs} 
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: "Dashboard Screen" }}
          />
        </Drawer.Navigator>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
