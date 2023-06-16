import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'
import Button from '../../components/Button/Button'
import LineButton from '../../components/LineButton'
import { signInUser } from '../../services/firebaseAuth'
import Toast from '../../components/Toast/Toast'

const LoginScreen = ( { navigation } ) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const Login = async () => {
        await signInUser( email, password )
    }

    return (
        <ScrollView
            style={ loginScreenStyles.container }
        >
            <View style={ loginScreenStyles.container__heroContainer }>
                <Image
                    style={ loginScreenStyles.container__heroContainer_Image }
                    source={ require( '../../assets/images/Login_Image.png' ) }
                    resizeMode='stretch'
                />

                <Image
                    style={ loginScreenStyles.container_heroContainer_TextImage }
                    source={ require( '../../assets/images/Login_Text_Top.png' )}
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
                            onPress={ () => Login() }
                        />
                    </View>

                    <View style={ loginScreenStyles.container__actionsContainer_lineButtonContainer }>
                        <Text>Don't have an account?</Text>

                        <LineButton
                            label='Sign Up'
                            onPress={() => navigation.navigate('register')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>        
    )
}

export default LoginScreen