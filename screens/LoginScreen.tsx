import { View, Text, Image } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'

const LoginScreen = () => {

    const testFunction = (text: String) => {
        console.log(text)
    }

    return (
        <View style={ loginScreenStyles.container }>
            <View style={ loginScreenStyles.container__heroContainer }>
                <Image
                    style={ loginScreenStyles.container__heroContainer_image }
                    source={ require( '../assets/images/Login_Image.png' ) }
                />
            </View>

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