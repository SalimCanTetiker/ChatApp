import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatListPage from '../screens/ChatListPage/ChatListPage';
import ChatPage from '../screens/ChatPage/ChatPage';

const Stack = createNativeStackNavigator()

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='ChatList' component={ChatListPage}/>
        <Stack.Screen name='Chat' component={ChatPage}/>
    </Stack.Navigator>
  )
}

export default UserStack