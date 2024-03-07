import { Pressable, Text } from 'react-native'
import React from 'react'

import styles from './CustomButton.style'

const CustomButton = ({title, onPress}) => {
  return (
    <Pressable style={ ({pressed}) => [{ backgroundColor: pressed ? "gray" : "brown"}, styles.container]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton