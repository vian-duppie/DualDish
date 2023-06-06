import { StyleSheet } from "react-native"

export const loginScreenStyles = StyleSheet.create({
    // Insert styles here
    container: {
        flex: 1,
    },
    container__heroContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container__heroContainer_Image: {
        width: '100%',
    },
    container_heroContainer_TextImage: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container__formContainer: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 35,
    },
    container__formContainer_inputFields: {
        gap: 15
    },
    container__actionsContainer: {
       gap: 20,
       alignItems: 'center'
    },
    container__actionsContainer_lineButtonContainer: {
        flexDirection: 'row',
        gap: 5
    }
})