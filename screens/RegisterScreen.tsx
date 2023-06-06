import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { registerScreenStyles } from './RegisterScreen.styles'
import Button from '../components/Button'
import LineButton from '../components/LineButton'

const RegisterScreen = ( { navigation } ) => {

    const [ username, setUsername ] = useState(String)
    const [ email, setEmail ] = useState(String)
    const [ password, setPassword ] = useState(String)

    const testFunction = (text: String) => {
        console.log(text)
    }

    return (
        <ScrollView style={ registerScreenStyles.container }>
            <View style={ registerScreenStyles.container__heroContainer }>
                <Image
                    style={ registerScreenStyles.container__heroContainer_Image }
                    source={ require( '../assets/images/Register_Image.png' ) }
                    resizeMode='stretch'
                />

                <Image
                    style={ registerScreenStyles.container_heroContainer_TextImage }
                    source={ require( '../assets/images/Register_Text_Top.png' )}
                />
            </View>

            <View style={ registerScreenStyles.container__formContainer }>
                <View style={ registerScreenStyles.container__formContainer_inputFields}>
                    <Input
                        label='Username'
                        placeholder='John Doe'
                        onChangeText={ (value: React.SetStateAction<string>) => setUsername(value) }
                    />
                   
                    <Input
                        label='Email Address'
                        placeholder='johndoe@gmail.com'
                        onChangeText={ (value: React.SetStateAction<string>) => setEmail(value) }
                    />

                    <Input
                        label='Password'
                        placeholder='Enter your password'
                        onChangeText={ (value: React.SetStateAction<string>) => setPassword(value) }
                        type={ 'password' }
                    />

                </View>

                <View style={ registerScreenStyles.container__actionsContainer }>
                    <View>
                        <Button
                            label='Sign Up'
                            backgroundColor='green'
                            onPress={ () => testFunction('hey') }
                        />
                    </View>

                    <View style={ registerScreenStyles.container__actionsContainer_lineButtonContainer }>
                        <Text>Already have an account?</Text>

                        <LineButton
                            label='Log In'
                            onPress={ () => navigation.navigate('login') }
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default RegisterScreen