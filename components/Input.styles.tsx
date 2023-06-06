import { StyleSheet } from "react-native"

export const inputStyles = StyleSheet.create({
    container: {
        gap: 10
    },
    container__label: {
        color: '#314B2F'
    },
    container__inputContainer: {
        // flexDirection: 'row'
        gap: 5
    },
    container__inputContainer_input: {
        flexDirection: 'row'
    },
    container__inputContainer_svg: {
        position: 'absolute',
        right: 12,
        alignSelf: 'center'
    },
    container__inputContainer_errorText: {
        color: 'red'
    }
})
