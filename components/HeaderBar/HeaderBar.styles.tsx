import { StyleSheet } from "react-native"

export const headerBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 15,
    },
    container__menuContainer: {
        marginTop: 10,
        position: 'absolute',
        top: '100%',
        right: 16,
        backgroundColor: '#314B2F',
        borderRadius: 8,
        padding: 15,
        elevation: 42,
        gap: 5
    },
    container__menuContainer_item: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'poppinsReg'
    }
})