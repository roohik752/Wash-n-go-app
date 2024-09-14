import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoPage from '../components/LogoPage';
import WelcomePage from '../components/WelcomePage';
import SignUpPage from '../components/SignUpPage';
import SignInPage from '../components/SignInPage';
import SignUp1Page from '../components/SignUp1Page';

const Stack = createNativeStackNavigator();

const NavigationFile = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='logo'
          component={LogoPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='welcome'
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signup'
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signin'
          component={SignInPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='signup1'
          component={SignUp1Page}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationFile