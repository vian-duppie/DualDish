import { StyleSheet } from "react-native"

export const profileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    usernameContainer: {
        marginBottom: 20
    },
    usernameContainer__Text: {
        color: '#E23E3E',
        fontSize: 64,
        fontFamily: 'canvasReg',
    },
    userDetails: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 50
    },
    userDetailsText: {
        flex: 1, 
        alignSelf: 'center', 
        color:  '#314B2F',
        fontSize: 18,
        fontFamily: 'poppinsMed'
    },
    levelContainer: {
        marginTop: 20
    },
    levelContainer__headerText: {
        color:  '#314B2F',
        fontSize: 20,
        fontFamily: 'poppinsMed'
    },
    levelContainer__levelTextContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    levelText: {
        includeFontPadding: false,
        color: '#314B2F',
        fontSize: 20,
        fontFamily: 'poppinsMed'
    },
    competitionWonCount: {
        marginTop: 30,
        gap: 20
    },
    competitionWonCountText: {
        includeFontPadding: false,
        color: '#314B2F',
        fontSize: 20,
        fontFamily: 'poppinsMed'
    },
    competitionWonCountTextNum: {
        includeFontPadding: false,
        color: '#E23E3E',
        fontSize: 60,
        fontFamily: 'canvasReg',
        alignSelf: 'center'
    },
    badgesContainer: {
        gap: 10,
        marginTop: 20,
    },
    bageContainerHeading: {
        includeFontPadding: false,
        color: '#314B2F',
        fontSize: 20,
        fontFamily: 'poppinsMed'
    },
    container__actionsContainer: {
        marginTop: 50,
        paddingBottom: 50,
        gap: 15
    },
    container__actionsContainer_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})