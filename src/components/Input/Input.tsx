import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './Input.style'

const Input = ({title, placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default Input