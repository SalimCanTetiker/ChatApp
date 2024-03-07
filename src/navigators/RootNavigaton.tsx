import React, {useState, useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import UserTab from './UserTab';

const RootNavigation = () => {
  const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  },[])
  return (
    <NavigationContainer>
      {
        !userSession ? (
          <AuthStack/>
        ) : (
          <UserTab/>
        )
      }
    </NavigationContainer>
  )
}

export default RootNavigation