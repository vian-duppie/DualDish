import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { competitionDetailScreenStyles } from './CompetitionDetailScreen.styles'
import LevelIndicator from '../components/LevelIndicator'
import Accordion from '../components/Accordion/Accordion'
import Button from '../components/Button/Button'

const CompetitionDetailScreen = () => {
    return (
        <ScrollView 
            contentContainerStyle={ competitionDetailScreenStyles.container } 
            showsVerticalScrollIndicator={false}
        >
            <View style={ competitionDetailScreenStyles.container__headerContainer }>
                <Text style={ competitionDetailScreenStyles.container__headerContainer_text }>
                    Taco Takedown
                </Text>
            </View>

            <View style={ competitionDetailScreenStyles.container__descriptionContainer }>
                <View style={ competitionDetailScreenStyles.container__descriptionContainer_description }>
                    <Text>
                        Get ready for a 3 round fiesta with our Taco Takedown competition!
                        {"\n"}{"\n"}
                        You have 2 days to create the ultimate taco using the required and any additional ingredients of your choice.
                        {"\n"}{"\n"}
                        But be warned - each round gets more challenging than the last!
                    </Text>
                </View>

                <View style={ competitionDetailScreenStyles.container__descriptionContainer_category }>
                    <Text style={ { color: '#FFFFFF', fontSize: 12 } }>
                        Mexican
                    </Text>
                </View>

                <View style={ competitionDetailScreenStyles.container__difficultyContainer }>
                    <Text style={ { color: '#314B2F', fontSize: 20, fontFamily: 'poppinsMed' } }>
                        Difficulty Level
                    </Text>

                    <LevelIndicator
                        level={4}
                    />
                </View>

                <View style={ competitionDetailScreenStyles.container__entriesContainer }>
                    <View>
                        <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                            Amount of entries allowed
                        </Text>
                        <Text style={ { fontSize: 40, fontFamily: 'canvasReg', color: '#70B8A9'} }>
                            15
                        </Text>
                    </View>
                    <View>
                    <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                            Amount of entries recieved
                        </Text>
                        <Text style={ { fontSize: 40, fontFamily: 'canvasReg', color: '#70B8A9'} }>
                            6
                        </Text>
                    </View>
                </View>

                <View style={ competitionDetailScreenStyles.container__roundsContainer }>
                    <Text style={ { fontSize: 20, fontFamily: 'poppinsMed', color: '#314B2F'} }>
                        Competition Rounds
                    </Text>

                    <Accordion/>
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
                                source={ require( '../assets/images/test.png' ) }
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
                                source={ require( '../assets/images/test.png' ) }
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
                                source={ require( '../assets/images/test.png' ) }
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
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default CompetitionDetailScreen