import { StyleSheet } from "react-native"

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
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
    }, 
    entryContainer: {
        backgroundColor: '#F4F4F6',
        paddingVertical: 10,
        paddingHorizontal: 10,
        // margin: 10,
        borderRadius: 10,
        // alignSelf: "flex-start",
        maxWidth: "48%",
        marginBottom: 20,
        // flexGrow: 1,
        justifyContent: 'space-between'
    },
    entryContainer_title: {
        fontFamily: 'canvasReg',
        fontSize: 18
    },
    entryContainer_category: {
        fontFamily: 'poppinsReg',
        fontSize: 12,
        color: '#314B2F',
        includeFontPadding: false, 
        textAlign: 'center'
    },
    entryContainer_username: {
        fontFamily: 'poppinsReg',
        fontSize: 12,
        color: '#9C262E',
        includeFontPadding: false
    }
})