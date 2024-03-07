import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage/LoginPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='Sign Up' component={SignUpPage} />
    </Stack.Navigator>
  )
}

export default AuthStack