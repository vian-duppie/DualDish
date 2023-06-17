import { StyleSheet } from "react-native"

export const entryCardStyles = StyleSheet.create({
    container: {
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
    },entryContainer_title: {
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