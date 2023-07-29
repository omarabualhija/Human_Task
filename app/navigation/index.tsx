import React from 'react';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {COLORS} from '../theme';
import SplashScreen from '../screens/SplashScreen';
import {useColorScheme} from 'react-native';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
  },
};

function RootStack() {
  let theme = useColorScheme();

  return (
    <NavigationContainer theme={theme === 'light' ? lightTheme : DarkTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
