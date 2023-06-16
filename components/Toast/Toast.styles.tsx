import { StyleSheet } from "react-native"

export const toastStyles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 10,
        zIndex: 999999,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
    containerSuccess: {
        backgroundColor: '#28A745',
    },
    containerError: {
        backgroundColor: '#DC3545',
    }
})