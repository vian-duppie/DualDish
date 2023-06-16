import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'
import Button from '../../components/Button/Button'
import LineButton from '../../components/LineButton'
import { signInUser } from '../../services/firebaseAuth'
import Toast from '../../components/Toast/Toast'
import { err } from 'react-native-svg/lib/typescript/xml'

const LoginScreen = ( { navigation } ) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ errors, setErrors ] = useState({
        emailError: '',
        passwordError: ''
    })

    const [ showToast, setShowToast ] = useState( false )
    const [ toastMessage, setToastMessage ] = useState( 'Error' )
    const [ toastType, setToastType ] = useState( '' )

    const ClearErrors = () => {
        setErrors({
            emailError: '',
            passwordError: '',
        })
    }

    const Login = async () => {
        const { emailError, passwordError } = errors

        console.log('pressed')

        if( email == '' ) {
            setErrors(( prevErrors ) => ({
                ...prevErrors,
                emailError: 'Please fill in your email',
            }))
        }

        if( password == '' ) {
            setErrors(( prevErrors ) => ({
                ...prevErrors,
                passwordError: 'Please enter your password',
            }))
        }

        if( email == '' || password == '' ) {
            return
        }

        if( !emailError || !passwordError ) {
            try {
                await signInUser( email, password )

                navigation.navigate('competitions')

                setErrors({
                    emailError: '',
                    passwordError: '',
                })
            } catch ( err ) {
                if( err == 'auth/invalid-email' ) {
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        emailError: 'Email is invalid',
                    }))
                }

                if( err == 'auth/wrong-password' || err == 'auth/user-not-found' ) {
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        emailError: 'Invalid Email/Password',
                    }))
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        passwordError: 'Invalid Password/Email',
                    }))

                    setShowToast( true )
                    setToastMessage( 'Invalid Email or Password' )
                    setToastType( 'error' )
                }
            }
        } 

        // await signInUser( email, password )
    }

    return (
        <View style={{flex: 1}}>
            {
                showToast
                &&
                <Toast
                    type={ toastType }
                    showToast={ showToast }
                    message={ toastMessage }
                    hideToast={ ( value ) => setShowToast(value)}
                />
            }

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
                            onChangeText={ (value: React.SetStateAction<string>) => {
                                    setEmail(value)
                                    ClearErrors()
                                }
                            }
                            error={ errors.emailError }
                        />

                        <Input
                            label='Password'
                            placeholder='Enter your password'
                            onChangeText={ (value: React.SetStateAction<string>) => 
                                {
                                    setPassword(value) 
                                    ClearErrors()
                                }
                            }
                            type={ 'password' }
                            error={ errors.passwordError }
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
        </View>
    )
}

export default LoginScreen