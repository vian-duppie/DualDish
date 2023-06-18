import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { competitionDetailScreenStyles } from './CompetitionDetailScreen.styles'
import LevelIndicator from '../../components/LevelIndicator'
import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'
import { getCompetition } from '../../services/firebaseDb'

const CompetitionDetailScreen = ( { route, navigation } ) => {
    const { id, competition } = route.params
    const [competitionData, setCompetitionData] = useState(competition)
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        // console.log(competition.competition_open)
        getCompData()
    }, [])

    const getCompData = async () => {
        try {
            const fetched = await getCompetition( id )
            if (typeof fetched !== 'string') {
                setCompetitionData(fetched.competition)
                setLeaderboard(fetched.leaderboard)
                // console.log(JSON.stringify(fetched.leaderboard, null, 2))
                console.log(fetched.competition.competition_open)
                console.log(fetched.competition.challenge)
                console.log(competition.challenge)
            }
        } catch ( err ) {
            console.error( 'Error fetching document: ', err)
        }
    }

    return (
        <ScrollView 
            contentContainerStyle={ competitionDetailScreenStyles.container } 
            showsVerticalScrollIndicator={false}
        >
            <View style={ competitionDetailScreenStyles.container__headerContainer }>
                <Text style={ competitionDetailScreenStyles.container__headerContainer_text }>
                    { competition.title }
                </Text>
            </View>
            {
                !competition.competition_open &&
                <View style={{ backgroundColor: '#DC3545', padding: 5, borderRadius: 10, alignSelf: 'center' }}>
                    <Text style={{ color: 'white', includeFontPadding: false }}> 
                        NOTE*: Competition Closed
                    </Text>
                </View>
            }

            <View style={ competitionDetailScreenStyles.container__descriptionContainer }>
                <View style={ competitionDetailScreenStyles.container__descriptionContainer_description }>
                    <Text>
                        { competition.description }
                    </Text>
                </View>

                <View style={ competitionDetailScreenStyles.container__descriptionContainer_category }>
                    <Text style={ { color: '#FFFFFF', fontSize: 12 } }>
                        { competition.category }
                    </Text>
                </View>

                <View style={ competitionDetailScreenStyles.container__difficultyContainer }>
                    <Text style={ { color: '#314B2F', fontSize: 20, fontFamily: 'poppinsMed' } }>
                        Difficulty Level
                    </Text>

                    <LevelIndicator
                        level={ competition.difficulty }
                    />
                </View>

                <View style={ competitionDetailScreenStyles.container__entriesContainer }>
                    <View>
                        <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                            Amount of entries allowed
                        </Text>
                        <Text style={ { fontSize: 40, fontFamily: 'canvasReg', color: '#70B8A9'} }>
                            { competition.entries_allowed }
                        </Text>
                    </View>
                    <View>
                    <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                            Amount of entries recieved
                        </Text>
                        <Text style={ { fontSize: 40, fontFamily: 'canvasReg', color: '#70B8A9'} }>
                            { competition.entries.length }
                        </Text>
                    </View>
                </View>

                <View style={ competitionDetailScreenStyles.container__roundsContainer }>
                    <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                        Competition Rounds
                    </Text>

                    <Accordion
                        items={ competition.challenge }
                    />
                </View>

                <View style={ competitionDetailScreenStyles.container__leaderboardContainer}>
                    <Text style={ { fontFamily: 'poppinsMed', color: '#314B2F', fontSize: 20, marginBottom: 20 } }>
                        Leaderboard
                    </Text>

                    <View style={ [ competitionDetailScreenStyles.container__leaderboardContainer_images, { flexDirection: 'row', justifyContent: 'space-evenly' } ] }>
                        {
                            leaderboard.length > 1?

                            leaderboard.map( (x, idx) => (
                                <View key={ idx } style={ { marginTop: idx != 1 ? 30 : 0, alignItems: 'center' } }>
                                    <Image
                                        style={ { width: 80, height: 80, borderRadius: 80/2 } }
                                        source={{ uri: x.dish_image }}
                                        resizeMode='cover'
                                    />

                                    <View style={ { alignItems: 'center' } }>
                                        <Text style={ { fontFamily: 'poppinsMed', color: '#D46139', fontSize: 16} }>{ x.dish_votes.length } Points</Text>
                                        <Text>{ x.dish_owner_username }</Text>
                                    </View>
                                </View>
                            ))
                            : <Text>No Leaderboard Yet</Text>
                        }
                    </View>
                </View>

                {
                    competition.competition_open
                    &&
                    <View style={ { alignSelf: 'center', justifyContent: 'center', marginTop: 50, paddingBottom: 20 } }>
                        <Button
                            label='Enter Now'
                            backgroundColor='green'
                            onPress={ () => navigation.navigate('competitionEntry', { competition: competition })}
                        />
                    </View>
                }

            </View>
        </ScrollView>
    )
}

export default CompetitionDetailScreen