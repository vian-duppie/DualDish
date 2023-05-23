import { StyleSheet } from "react-native"

export const splashScreenStyles = StyleSheet.create({
    // Insert styles here
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