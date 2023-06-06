import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { inputStyles } from './Input.styles'
import EyeShow from './Svg/EyeShow'
import EyeHide from './Svg/EyeHide'

const Input = ( props ) => {
    const [ showPassword, setShowPassword ] = useState( false )

    const changePasswordVisibility = () => {
        setShowPassword( !showPassword )
    }

    useEffect(() => {
        console.log(props.type)
    }, [])
    return (
        <View
            style={ inputStyles.container }
        >
            {
                props.label 
                    &&
                <Text style={ inputStyles.container__label }>
                    { props.label }
                </Text>
            }

            <View style={ inputStyles.container__inputContainer }>
                <TextInput
                    placeholderTextColor='#8F9B8E'
                    onChangeText={ props.onChangeText }
                    placeholder={ props.placeholder || 'Enter placeholder' }
                    secureTextEntry={ props.type == 'password' ? !showPassword : false }
                    style={{
                        flex: 1,
                        fontSize: 15,
                        justifyContent: 'center',
                        padding: 12,
                        paddingLeft: 15,
                        alignItems: 'flex-start',
                        borderColor: props.borderColor == 'red' ? '#D46139' : '#314B2F',
                        borderWidth: 1,
                        borderRadius: 10
                    }}
                    multiline={false}
                    defaultValue={ props.defaultValue }
                />

                {
                    props.type == 'password' && 
                    (
                        showPassword 
                        ? 
                            <TouchableOpacity
                                style={ inputStyles.container__inputContainer_svg } 
                                onPress={ changePasswordVisibility }
                            >
                                <EyeHide
                                    size={ 28 }
                                />
                            </TouchableOpacity>
                        : 
                            <TouchableOpacity 
                                style={ inputStyles.container__inputContainer_svg } 
                                onPress={ changePasswordVisibility }
                            >
                                <EyeShow
                                    size={ 28 }
                                />
                            </TouchableOpacity>
                    )
                }
            </View>

        </View>
    )
}

export default Input

const styles = StyleSheet.create({})