import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    Animated,
    Easing
} from 'react-native'
import React, { useEffect } from 'react'

/* Styles */
import { splashScreenStyles } from './SplashScreen.styles'
import { globalStyles } from '../utils/GlobalStyles'

const SplashScreen = () => {
    let rotationValue = new Animated.Value( 0 )

    useEffect(() => {
        rotationValue.setValue( 0 )
        Animated.loop(
            Animated.timing( rotationValue, {
            toValue: 1,
            duration: 1231245000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start()
    }, [])

    const rotateData = rotationValue.interpolate({
        inputRange: [ 0, 1 ],
        outputRange: [ '0deg', '360deg' ]
    })

    return (
        <View style={ styles.container }>
            {/* Background */}
            <View style={ styles.container__background }>
                <Image
                    style={ styles.container__background_image }
                    source={ require( '../assets/images/Splash_Screen_Background.png' ) }
                    resizeMode='cover'
                />
            </View>
            
            {/* LOGO */}
            <View style={ styles.container__logo }>
                <Image
                    source={ require( '../assets/images/Dual_Dish_Logo.png' ) }
                    resizeMode='cover'
                />
            </View>

            {/* FOREGROUND SHAPES */}
            <View style={ styles.container__shapes }>
                <Image
                    style={ styles.container__shapes_inner }
                    source={ require( '../assets/images/Splash_Screen_Foreground_Inner.png' ) }
                    resizeMode='contain'
                />

                <Animated.Image
                    style={ { transform: [{ rotate: rotateData }] } }
                    source={ require( '../assets/images/Splash_Screen_Foreground_Outer.png' ) }
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container__background: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    container__background_image: {
        width: '100%',
        flex: 1,
        flexDirection: 'column'
    },
    container__logo: {
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    container__shapes: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    container__shapes_inner: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
})