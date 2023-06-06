import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'
import Button from '../components/Button'
import LineButton from '../components/LineButton'
import { myProfileScreenStyles } from './MyProfileScreen.styles'
import Hamburger from '../components/Svg/Hamburger'
import { useRoute } from '@react-navigation/native'

const DrawerScreen = ( { navigation } ) => {

    const test = () => {
        console.log('hey man')
    }

    const route = useRoute()
    console.log(route.name)

    return (
        <View style={ myProfileScreenStyles.container }>
            <View style={ myProfileScreenStyles.container__topBarContainer }>
                <Hamburger
                    onPress={ () => test()}
                    size={ 28 }
                />

                <Text>
                    hey
                </Text>
            </View>
        </View>
    )
}

export default DrawerScreen