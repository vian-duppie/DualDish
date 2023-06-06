import { View, Text, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'
import Button from '../components/Button'
import LineButton from '../components/LineButton'

const LoginScreen = () => {

    const [ email, setEmail ] = useState(String)
    const [ password, setPassword ] = useState(String)

    const testFunction = (text: String) => {
        console.log(text)
    }

    const {width} = Dimensions.get('window')

    return (
        <View style={ loginScreenStyles.container }>
            <View style={ loginScreenStyles.container__heroContainer }>
                <Image
                    style={ loginScreenStyles.container__heroContainer_Image }
                    source={ require( '../assets/images/Login_Image.png' ) }
                    resizeMode='stretch'
                />

                <Image
                    style={ loginScreenStyles.container_heroContainer_TextImage }
                    source={ require( '../assets/images/Login_Text_Top.png' )}
                />
            </View>

            <View style={ loginScreenStyles.container__formContainer }>
                <View style={ loginScreenStyles.container__formContainer_inputFields}>
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

                <View style={ loginScreenStyles.container__actionsContainer }>
                    <View>
                        <Button
                            label='Log In'
                            backgroundColor='green'
                            onPress={ () => testFunction('hey') }
                        />
                    </View>

                    <View style={ loginScreenStyles.container__actionsContainer_lineButtonContainer }>
                        <Text>Don't have an account?</Text>

                        <LineButton
                            label='Sign Up'
                            onPress={ () => testFunction("heyfsasf") }
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen