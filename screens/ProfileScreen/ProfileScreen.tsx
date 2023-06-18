import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { profileScreenStyles  } from './ProfileScreen.styles'
import LevelIndicator from '../../components/LevelIndicator'
import ProfileEntryCard from '../../components/ProfileEntryCard/ProfileEntryCard'
import RightArrow from '../../components/Svg/RightArrow'
import { getCurrentUser, signOutUser } from '../../services/firebaseAuth'
import { myProfileScreenStyles } from '../MyProfileScreen/MyProfileScreen.styles'
import { useFocusEffect } from '@react-navigation/native'
import { getAllUserEntries } from '../../services/firebaseDb'

const ProfileScreen = () => {
    const levels = [ 1, 2, 2, 3 ]
    const [ entries, setEntries ] = useState([])
    const [ won, setWon ] = useState(0)

    useFocusEffect(
        useCallback(() =>{
            let user = getCurrentUser().uid
            getEntries( user )
        },[])
    )

    useEffect(() => {
        let user = getCurrentUser().uid
        getEntries( user )
    }, [])

    const getEntries = async (id) => {
        try {
            const fetched = await getAllUserEntries( id )

            let filtered = fetched
                .filter(x => x.competition_finish_position === 1)
                .map(x => ({ ...x }))
            
                setWon( filtered.length )
            // console.log( JSON.stringify(fetched, null, 2) )
            setEntries( fetched )
        } catch ( err ) {
            console.log( err )
        } 
    }
    return (
        <>
            <ScrollView style={ profileScreenStyles.container }>
                <View style={ profileScreenStyles.usernameContainer }>
                    <Text style={ profileScreenStyles.usernameContainer__Text }>Monique</Text>
                </View>

                <View style={ profileScreenStyles.userDetails }>
                    <Image
                        style={{ flex: 1, aspectRatio: 1, borderRadius: 500 }}
                        source={ require( '../../assets/images/Splash_Screen_Background.png' ) }
                        resizeMode='contain'
                    />

                    <Text style={ profileScreenStyles.userDetailsText }>Username</Text>
                </View>

                <View style={ profileScreenStyles.levelContainer }>
                    <Text style={ profileScreenStyles.levelContainer__headerText }>Level</Text>

                    <View style={ profileScreenStyles.levelContainer__levelTextContainer }>
                        <Text style={ profileScreenStyles.levelText }>
                            23
                        </Text>

                        <LevelIndicator
                            level={2}
                        />
                    </View>
                </View>

                <View style={ profileScreenStyles.competitionWonCount }>
                    <Text style={ profileScreenStyles.competitionWonCountText }>
                        Competitions won
                    </Text>

                    <Text style={ profileScreenStyles.competitionWonCountTextNum }>
                        { won }
                    </Text>
                </View>

                {/* <View style={ profileScreenStyles.badgesContainer }>
                    <Text style={ profileScreenStyles.bageContainerHeading }>
                        Badges Earned
                    </Text>
                </View> */}

                <View style={ profileScreenStyles.badgesContainer }>
                    <Text style={ profileScreenStyles.bageContainerHeading }>
                        Previous Entries
                    </Text>
                    {
                        entries.length < 1
                        ? <Text> NONE </Text>
                        :   <FlatList
                                horizontal
                                showsVerticalScrollIndicator={ false }
                                contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
                                data={entries}
                                renderItem={ ( { item, index } ) => (
                                    <ProfileEntryCard
                                        entry={ item }
                                    />
                                )}
                            />
                    }

                </View>

                <View style={ profileScreenStyles.container__actionsContainer } >
                    <TouchableOpacity 
                        style={ profileScreenStyles.container__actionsContainer_button }
                        onPress={ () => signOutUser() }
                    >
                        <Text style={ { color: '#D46139', fontSize: 18 } }>Log Out</Text>

                        <RightArrow/>
                    </TouchableOpacity>

                    <TouchableOpacity style={ profileScreenStyles.container__actionsContainer_button }>
                        <Text style={ { color: '#D46139', fontSize: 18 } }>Delete Account</Text>

                        <RightArrow/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})