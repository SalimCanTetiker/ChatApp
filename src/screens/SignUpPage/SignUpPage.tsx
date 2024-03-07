import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';

import styles from './SignUpPage.style'

const initialFormValues = {
  userEmail: "",
  password: "",
  repassword: ""
}

const SignUpPage = ({ navigation }) => {

  const handleFormSubmit = async (formValues) => {
    if(formValues.password !== formValues.repassword){
      console.log("error")
      return
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.userEmail,
        formValues.repassword
      )
      console.log("kullanıcı oluşturuldu")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
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
            <Input
              title={"Repeat Password"}
              placeholder={"Enter Your Password"}
              value={values.repassword}
              onChangeText={handleChange("repassword")}
              secureTextEntry={true}
            />
            <CustomButton
              title={"Sign Up"}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={styles.loginContainer}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default SignUpPage