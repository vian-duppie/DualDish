import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import { registerScreenStyles } from './RegisterScreen.styles'
import Button from '../../components/Button/Button'
import LineButton from '../../components/LineButton'
import { registerNewUser } from '../../services/firebaseAuth'
import Toast from '../../components/Toast/Toast'

const RegisterScreen = ( { navigation } ) => {

    // Input State
    const [ username, setUsername ] = useState(String)
    const [ email, setEmail ] = useState(String)
    const [ password, setPassword ] = useState(String)

    // Input Errors State
    const [ errors, setErrors ] = useState({
        usernameError: '',
        emailError: '',
        passwordError: ''
    })

    // Toast
    const [ showToast, setShowToast ] = useState( false )
    const [ toastMessage, setToastMessage ] = useState( 'Error' )
    const [ toastType, setToastType ] = useState( '' )

    const ClearErrors = () => {
        setErrors({
            usernameError: '',
            emailError: '',
            passwordError: '',
        })
    }

    const RegisterUser = async () => {
        const { usernameError, emailError, passwordError } = errors

        if( username == '' ) {
            setErrors(( prevErrors ) => ({
                ...prevErrors,
                usernameError: 'Please fill in your username',
            }))
        }

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

        if ( username == '' || email == '' || password == '' ) {
            return
        }

        if( !usernameError && !emailError && !passwordError ) {
            try {
                await registerNewUser( username, email, password )
                setShowToast( true )
                setToastMessage( 'You have successfully registered' )
                setToastType( 'success' )

                setErrors({
                    usernameError: '',
                    emailError: '',
                    passwordError: '',
                })
            } catch ( err ) {
                console.log(err)
                setShowToast( true )
                setToastMessage( 'There has been an error' )
                setToastType( 'error' )

                if( err == 'auth/email-already-in-use' ) {
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        emailError: 'Email is already in use',
                    }))
                }
    
                if( err == 'auth/invalid-email' ) {
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        emailError: 'Email is invalid',
                    }))
                }
    
                if( err == 'auth/weak-password' ) {
                    setErrors(( prevErrors ) => ({
                        ...prevErrors,
                        passwordError: 'Please use a stronger password',
                    }))
                }
            }
        }
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
                style={ registerScreenStyles.container }
            >

                <View style={ registerScreenStyles.container__heroContainer }>
                    <Image
                        style={ registerScreenStyles.container__heroContainer_Image }
                        source={ require( '../../assets/images/Register_Image.png' ) }
                        resizeMode='stretch'
                    />

                    <Image
                        style={ registerScreenStyles.container_heroContainer_TextImage }
                        source={ require( '../../assets/images/Register_Text_Top.png' )}
                    />
                </View>

                <View style={ registerScreenStyles.container__formContainer }>
                    <View style={ registerScreenStyles.container__formContainer_inputFields}>
                        <Input
                            label='Username'
                            placeholder='John Doe'
                            onChangeText={ 
                                ( value: string ) => { 
                                    setUsername( value.trim() ), 
                                    ClearErrors() 
                                }
                            }
                            error={ errors.usernameError }
                        />
                    
                        <Input
                            label='Email Address'
                            placeholder='johndoe@gmail.com'
                            onChangeText={ 
                                ( value: string ) => { 
                                    setEmail( value.trim() ), 
                                    ClearErrors() 
                                }
                            }
                            error={ errors.emailError }
                        />

                        <Input
                            label='Password'
                            placeholder='Enter your password'
                            onChangeText={ 
                                ( value: string ) => { 
                                    setPassword( value.trim() ), 
                                    ClearErrors() 
                                }
                            }
                            type={ 'password' }
                            error={ errors.passwordError }
                        />

                    </View>

                    <View style={ registerScreenStyles.container__actionsContainer }>
                        <View>
                            <Button
                                label='Sign Up'
                                backgroundColor='green'
                                onPress={ () => RegisterUser() }
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
        </View>
    )
}

export default RegisterScreen