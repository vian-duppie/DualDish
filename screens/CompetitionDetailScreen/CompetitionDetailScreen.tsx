import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { competitionDetailScreenStyles } from './CompetitionDetailScreen.styles'
import LevelIndicator from '../../components/LevelIndicator'
import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'

const CompetitionDetailScreen = ( { route, navigation } ) => {
    const { id, competition } = route.params

    useEffect(() => {
        console.log(id)
        console.log(competition)
    }, [])

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
                        items={ competition.round_challenges }
                    />
                </View>

                <View style={ competitionDetailScreenStyles.container__leaderboardContainer}>
                    <Text style={ { fontFamily: 'poppinsMed', color: '#314B2F', fontSize: 20, marginBottom: 20 } }>
                        Leaderboard
                    </Text>

                    <View 
                        style={ [ competitionDetailScreenStyles.container__leaderboardContainer_images, { flexDirection: 'row', justifyContent: 'space-between' } ] }>
                        <View style={ { marginTop: 30, alignItems: 'center' } }>
                            <Image
                                style={ { width: 80, height: 80, borderRadius: 80/2 } }
                                source={ require( '../../assets/images/test.png' ) }
                                resizeMode='cover'
                            />

                            <View style={ { alignItems: 'center' } }>
                                <Text style={ { fontFamily: 'poppinsMed', color: '#D46139', fontSize: 16} }>Points</Text>
                                <Text>username</Text>
                            </View>
                        </View>
                        <View style={ { alignItems: 'center' } }>
                            <Image
                                style={ { width: 100, height: 100, borderRadius: 100/2 } }
                                source={ require( '../../assets/images/test.png' ) }
                                resizeMode='cover'
                            />

                            <View style={ { alignItems: 'center' } }>
                                <Text style={ { fontFamily: 'poppinsMed', color: '#D46139', fontSize: 16} }>Points</Text>
                                <Text>username</Text>
                            </View>
                        </View>
                        <View style={ { marginTop: 30, alignItems: 'center' } }>
                            <Image
                                style={ { width: 80, height: 80, borderRadius: 80/2 } }
                                source={ require( '../../assets/images/test.png' ) }
                                resizeMode='cover'
                            />

                            <View style={ { alignItems: 'center' } }>
                                <Text style={ { fontFamily: 'poppinsMed', color: '#D46139', fontSize: 16} }>Points</Text>
                                <Text>username</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={ { alignSelf: 'center', justifyContent: 'center', marginTop: 50, paddingBottom: 20 } }>
                    <Button
                        label='Enter Now'
                        backgroundColor='green'
                        onPress={ () => navigation.navigate('competitionEntry', { competition: competition })}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default CompetitionDetailScreen