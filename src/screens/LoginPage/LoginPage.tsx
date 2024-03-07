import { View, SafeAreaView, Text, Image, Pressable } from 'react-native'
import React from 'react'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';

import styles from './LoginPage.style'

const initialFormValues = {
  userEmail: "",
  password: ""
}

const LoginPage = ({ navigation }) => {

  const handleFormSubmit = async (formValues) => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.userEmail,
        formValues.password
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Login.png")}
        />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              title={"Email"}
              placeholder={"Enter Your Email"}
              value={values.userEmail}
              onChangeText={handleChange("userEmail")}
              secureTextEntry={false}
            />
            <Input
              title={"Password"}
              placeholder={"Enter Your Password"}
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <CustomButton
              title={"Login"}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Sign Up")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LoginPage