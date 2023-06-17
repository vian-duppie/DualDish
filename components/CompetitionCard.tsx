import { View, Text, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { CompetitionCardStyles } from './CompetitionCard.styles'
import { NavigationContainer, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addCompetitionToCollection } from '../services/firebaseDb';

type HeaderStackParams = {
    competitionDetail: {
        id: string
        competition: any
    }
}

const CompetitionCard = ( competition ) => {
    const navigation = useNavigation<NativeStackNavigationProp<HeaderStackParams>>();
    const screenWidth = Dimensions.get('window').width

    const DetailedCompetitionView = (routeName: keyof HeaderStackParams ) => {
        let competitionData = competition.competition
        navigation.navigate(
            routeName,
            {
                id: competitionData.id,
                competition: competitionData
            }
        )

        // addCompetitionToCollection()
    }

    return (
        <View style={ CompetitionCardStyles.container }>
            <View style={ CompetitionCardStyles.container__topRow }>
                <View style={ 
                        [
                            CompetitionCardStyles.container__leftContainer,
                            { width: screenWidth * 0.25}
                        ] 
                    }
                >
                    <Image
                        style={ 
                            { 
                                width: 80, 
                                height: 80, 
                                borderRadius: screenWidth * 0.25/2, 
                                aspectRatio: 1, 
                            } 
                        }
                        source={ require( '../assets/images/Splash_Screen_Background.png' ) }
                        resizeMode='contain'
                    />

                    <Text style={ { fontFamily: 'canvasReg', fontSize: 20, color: '#314B2F'} }>
                        { competition.title || 'title' }
                    </Text>
                </View>
                <View style={ 
                        [
                            CompetitionCardStyles.container__rightContainer,
                            { width: screenWidth * 0.7}
                        ] 
                    }
                >
                    <View style={ CompetitionCardStyles.container__rightContainer_timeContainer }>
                        <Text style={ 
                                { 
                                    fontFamily: 'poppinsReg', 
                                    fontSize: 18, 
                                    color: '#314B2F'
                                } 
                            }
                        >
                            Time left
                        </Text>

                        <View style={ CompetitionCardStyles.container__rightContainer_timeContainer_time }>
                            <View style={ { alignItems: 'center'} }>
                                <Text style={ 
                                        { 
                                            fontFamily: 'canvasReg', 
                                            fontSize: 20, 
                                            color: '#AE3015'
                                        } 
                                    }
                                >
                                    { competition.days || '15'}
                                </Text>
                                <Text style={ 
                                        { 
                                            fontFamily: 'poppinsReg', 
                                            fontSize: 12, 
                                            color: '#314B2F'
                                        } 
                                    }
                                >
                                    Days
                                </Text>
                            </View>
                            <View>
                                <Text style={ 
                                        { 
                                            fontFamily: 'canvasReg', 
                                            fontSize: 20, 
                                            color: '#AE3015'
                                        } 
                                    }
                                >
                                    :
                                </Text>
                            </View>
                            <View style={ { alignItems: 'center'} }>
                                <Text style={ 
                                        { 
                                            fontFamily: 'canvasReg', 
                                            fontSize: 20, 
                                            color: '#AE3015'
                                        } 
                                    }
                                >
                                    { competition.hours || '4' }
                                </Text>
                                <Text style={ 
                                        { 
                                            fontFamily: 'poppinsReg', 
                                            fontSize: 12, 
                                            color: '#314B2F'
                                        } 
                                    }
                                >
                                    Hours
                                </Text>
                            </View>
                            <View>
                                <Text style={ 
                                        { 
                                            fontFamily: 'canvasReg', 
                                            fontSize: 20, 
                                            color: '#AE3015'
                                        } 
                                    }
                                >
                                    :
                                </Text>
                            </View>
                            <View style={ { alignItems: 'center'} }>
                                <Text style={ 
                                        { 
                                            fontFamily: 'canvasReg', 
                                            fontSize: 20, 
                                            color: '#AE3015'
                                        } 
                                    }
                                >
                                    { competition.minutes || '20'}
                                </Text>
                                <Text style={ 
                                        { 
                                            fontFamily: 'poppinsReg', 
                                            fontSize: 12, 
                                            color: '#314B2F'
                                        } 
                                    }
                                >
                                    Minutes
                                </Text>
                            </View>
                        </View>

                        <View style={ CompetitionCardStyles.container__rightContainer_entriesContainer }>
                            <Text style={ 
                                    { 
                                        fontFamily: 'poppinsReg', 
                                        fontSize: 18, 
                                        color: '#314B2F'
                                    } 
                                }
                            >
                                Entries Received
                            </Text>

                            <Text style={ 
                                    { 
                                        fontFamily: 'canvasReg', 
                                        fontSize: 20, 
                                        color: '#AE3015'
                                    } 
                                }
                            >
                                { competition.entries != undefined ? competition.entries : 'None'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>  
            <View style={ CompetitionCardStyles.container__bottomRow }>
                <Pressable 
                    style={ {
                        alignSelf: 'flex-end', 
                        height: 30, 
                        justifyContent: 'center' 
                    } }
                    onPress={ () => DetailedCompetitionView( 'competitionDetail' ) }
                >
                    <Text style={ 
                            { 
                                color: '#D46139', 
                                fontStyle: 'italic' 
                            } 
                        }
                    >
                        View more
                    </Text>
                </Pressable>
            </View>          
        </View>
    )
}

export default CompetitionCard