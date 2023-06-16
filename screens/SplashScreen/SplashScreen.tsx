import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    Animated,
    Easing
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import * as Font from 'expo-font'


/* Styles */
import { splashScreenStyles } from './SplashScreen.styles'
import { globalStyles } from '../../utlities/GlobalStyles'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

const SplashScreen = ({ navigation }, props) => {
    const [ fontsLoaded, setFontsLoaded ] = useState( false )

    let rotationValue = new Animated.Value( 0 )
    useEffect(() => {
        rotationValue.setValue( 0 )
        Animated.loop(
            Animated.timing( rotationValue, {
            toValue: 1,
            duration: 5000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start()

        async function loadFont() {
            await Font.loadAsync({
                canvasReg: require( '../../assets/fonts/Canvas-Script-Reg.ttf' ),
                poppinsReg: require( '../../assets/fonts/Poppins-Regular.ttf'),
                poppinsMed: require( '../../assets/fonts/Poppins-Medium.ttf')
            })

            setFontsLoaded( true )
        }

        loadFont()

        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if( fontsLoaded && user ) {
                setTimeout(() => {
                    navigation.navigate('register')
                }, 2000)
            } else {
                setTimeout(() => {
                    navigation.navigate('login')
                }, 2000)
            }
        })

        return unsubscribe
    }, [fontsLoaded])



    const rotateData = rotationValue.interpolate({
        inputRange: [ 0, 1 ],
        outputRange: [ '0deg', '360deg' ]
    })

    return (
        <View style={ splashScreenStyles.container }>
            {/* Background */}
            <View style={ splashScreenStyles.container__background }>
                <Image
                    style={ splashScreenStyles.container__background_image }
                    source={ require( '../../assets/images/Splash_Screen_Background.png' ) }
                    resizeMode='cover'
                />
            </View>
            
            {/* LOGO */}
            <View style={ splashScreenStyles.container__logo }>
                <Image
                    source={ require( '../../assets/images/Dual_Dish_Logo.png' ) }
                    resizeMode='cover'
                />
            </View>

            {/* FOREGROUND SHAPES */}
            <View style={ splashScreenStyles.container__shapes }>
                <Image
                    style={ splashScreenStyles.container__shapes_inner }
                    source={ require( '../../assets/images/Splash_Screen_Foreground_Inner.png' ) }
                    resizeMode='contain'
                />

                <Animated.Image
                    style={ { transform: [{ rotate: rotateData }] } }
                    source={ require( '../../assets/images/Splash_Screen_Foreground_Outer.png' ) }
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

export default SplashScreen