import { Pressable, Text } from 'react-native';
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import UserStack from './UserStack';
import ProfilePage from '../screens/ProfilePage/ProfilePage';

const Tab = createBottomTabNavigator()
const UserTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "brown",
      tabBarInactiveTintColor: "gray"
    }}>
      <Tab.Screen name='UserStack' component={UserStack}
        options={{
          headerRight: () => (
            <Pressable onPress={() => auth().signOut()}>
              <Text>LOGOUT</Text>
            </Pressable>
          ),
          tabBarIcon: () => (
            <Icon name='chat' size={30} />
          )
        }}
      />
      <Tab.Screen name='Profile' component={ProfilePage}
        options={{
          tabBarIcon: () => (
            <Icon name='account' size={30} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default UserTab