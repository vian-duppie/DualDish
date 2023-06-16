import { StyleSheet } from "react-native"

export const CompetitionCardStyles = StyleSheet.create({
    container: {
        flexGrow: 0,
        backgroundColor: '#F4F4F6',
        borderRadius: 20,
        paddingHorizontal: 11,
        paddingVertical: 20,
        gap: 10
    },
    container__topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    container__leftContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0
    },
    container__rightContainer: {
        flexGrow: 0
    },
    container__rightContainer_timeContainer: {
        justifyContent: 'center'
    },
    container__rightContainer_timeContainer_time: {
        flexDirection: 'row',
        gap: 5
    },
    container__rightContainer_entriesContainer: {

    },
    container__bottomRow: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})