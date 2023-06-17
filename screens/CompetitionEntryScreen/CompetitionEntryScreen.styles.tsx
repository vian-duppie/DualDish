import { StyleSheet } from "react-native"

export const CompetitionEntryScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        paddingBottom: 20
    },
    container__headerContainer: {
        // Add styles
    },
    container__headerContainer_text: {
        fontSize: 50,
        fontFamily: 'canvasReg',
        color: '#314B2F',
    },
    container__introContainer: {
        marginTop: 20,
        marginBottom: 30
    },
    container__detailsContainer: {
        gap: 20
    },
    container__detailsContainer_instructionsContainer: {
        gap: 10
    },
    container__detailsContainer_instructionsContainer__stepsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F6',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 12,
        gap: 5
    },
    container__detailsContainer_ingredientsContainer: {
        gap: 10
    },
    container__detailsContainer_ingredientsContainer__ingredientsList: {
        gap: 10
    }
})