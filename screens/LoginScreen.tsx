import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/Input'

const LoginScreen = () => {

    const testFunction = (text: String) => {
        console.log(text)
    }

    return (
        <View>
            <Input
                label='Email Address'
                placeholder='johndoe@gmail.com'
                onChangeText={ (value: String) => testFunction(value) }
                type={ 'password' }
            />
        </View>
    )
}

export default LoginScreen