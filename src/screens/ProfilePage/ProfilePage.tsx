import { Pressable, SafeAreaView, Text } from 'react-native'
import React from 'react'

import { Avatar } from "react-native-elements";
import auth from '@react-native-firebase/auth';

const ProfilePage = () => {

    const user = auth().currentUser?.email
    
    return (
        <SafeAreaView style={{flex: 1, alignItems: "center"}}>
            <Text>ProfilePage</Text>
            <Avatar
                rounded
                size={"large"}
                title='C'
                overlayContainerStyle={{ backgroundColor: 'brown' }}
            />
            <Text>{user}</Text>
            <Pressable onPress={() => auth().signOut()}>
                <Text>EXIT</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfilePage