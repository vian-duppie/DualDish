import { StyleSheet } from "react-native"

export const accordionStyles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        gap: 10,
    },
    container__accordianItemContainer: {
        flex: 1,
        backgroundColor: '#F4F4F6',
        borderRadius: 12,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30, 
        paddingVertical: 20
    },
    container__accordianItemContainer_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    }
})