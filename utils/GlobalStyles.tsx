import { Platform, StyleSheet, StatusBar } from "react-native"

export const globalStyles = StyleSheet.create({
    // Fill the available height
    flexGrowHeight: {
        flex: 1,
    },
    // Padding Top For Android Status Bar
    androidSafeArea: {
        flex: 1,
        // backgroundColor: 'white',
        paddingTop: 
            Platform.OS === 'android' 
            ? StatusBar.currentHeight 
            : 0
    }
})
