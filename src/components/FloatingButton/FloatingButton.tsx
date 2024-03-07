import { Pressable } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './FloatingButton.style'

const FloatingButton = () => {
  return (
    <Pressable style={styles.container}>
      <Icon name="plus" size={30} color="white"/>
    </Pressable>
  )
}

export default FloatingButton