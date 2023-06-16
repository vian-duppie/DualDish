import { StyleSheet } from "react-native"

export const competitionDetailScreenStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 35,
        // justifyContent: 'space-between'
    },
    container__headerContainer: {
        // Add styles
    },
    container__headerContainer_text: {
        fontSize: 64,
        fontFamily: 'canvasReg',
        color: '#E23E3E'
    },
    container__descriptionContainer: {
        marginTop: 38
    },
    container__descriptionContainer_description: {
        backgroundColor: '#F4F4F6',
        borderRadius: 21,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    container__descriptionContainer_category: {
        backgroundColor: '#D46139',
        alignSelf: 'flex-start',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        position: 'absolute',
        right: 0,
        top: -15
    },
    container__difficultyContainer: {
        marginTop: 20,
        gap: 10
    },
    container__entriesContainer: {
        marginTop: 30,
        gap: 5
    },
    container__roundsContainer: {
        marginTop: 20,
        gap: 15
    },
    container__leaderboardContainer: {
        marginTop: 20
    },
    container__leaderboardContainer_images: {
        
    }
})