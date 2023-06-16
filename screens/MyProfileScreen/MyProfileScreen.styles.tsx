import { StyleSheet } from "react-native"

export const myProfileScreenStyles = StyleSheet.create({
    // Insert styles here
    container: {
        flexGrow: 1,
        paddingHorizontal: 35,
        justifyContent: 'space-between'
    },
    container__headerContainer: {
        // Add styles
    },
    container__headerContainer_text: {
        fontSize: 64,
        fontFamily: 'canvasReg',
        color: '#E23E3E'
    },
    container__profileImageContainer: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    container__profileImageContainer_icon: {
        position: 'absolute',
        bottom: -5,
        left: 20,
    },
    container__detailsContainer: {
        marginTop: 40,
        gap: 25
    },
    container__actionsContainer: {
        marginTop: 50,
        paddingBottom: 20,
        gap: 15
    },
    container__actionsContainer_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})