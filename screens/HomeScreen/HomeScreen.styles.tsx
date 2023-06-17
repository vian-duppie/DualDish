import { StyleSheet } from "react-native"

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        // backgroundColor: '#FFFFFF'
        // justifyContent: 'space-between'
    },
    container__headerContainer: {
        // Add styles
    },
    container__headerContainer_text: {
        fontSize: 50,
        fontFamily: 'canvasReg',
        color: '#E23E3E',
    },
    container__introContainer: {
        marginTop: 20,
        marginBottom: 30
    },
    container__filterContainer: {
        gap: 15,
        marginBottom: 40,
    },
    container__competitionsCardsContainer: {
        flexGrow: 1,
        gap: 20,
        paddingBottom: 20,
        overflow: 'visible'
    }
})