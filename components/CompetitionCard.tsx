import { View, Text, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { CompetitionCardStyles } from './CompetitionCard.styles'
import { NavigationContainer, useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addCompetitionToCollection } from '../services/firebaseDb';

type HeaderStackParams = {
    competitionDetail: {
        id: string
        competition: any
    }
}

const CompetitionCard = ( {competition} ) => {
    const navigation = useNavigation<NativeStackNavigationProp<HeaderStackParams>>();
    const screenWidth = Dimensions.get('window').width

    const DetailedCompetitionView = (routeName: keyof HeaderStackParams ) => {
        let competitionData = competition
        navigation.navigate(
            routeName,
            {
                id: competitionData.id,
                competition: competitionData
            }
        )
    }

    const [ competitionData, setCompetitionData] = useState( competition )
    useEffect(() => {
        console.log(competition.image)
        setCompetitionData( competition )
    }, [competition])

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const calcTime = () => {
            const createdDate = competition.createdAt.toDate();
            const deadlineDate = new Date(createdDate.getTime());
            
            // Calculate the deadline by adding the time limit in milliseconds
            const timeLimitMs = competition.time_limit * 24 * 60 * 60 * 1000;
            deadlineDate.setTime(deadlineDate.getTime() + timeLimitMs);
            
            // Calculate the remaining time in milliseconds relative to the current time
            const remainingTime = deadlineDate.getTime() - Date.now();
            
            // Check if the deadline has passed
            if (remainingTime < 0) {
                setDays( 0 )
                setHours( 0)
                setMinutes( 0)
              return;
            }
            
            // Calculate the remaining days, hours, and minutes
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            setDays( days )
            setHours( hours)
            setMinutes( minutes)

            console.log("I AM RUNNING EVERY 10 Seconds")
            console.log('days: ' + days)
            console.log('hours: ' + hours)
            console.log('minutes: ' + minutes)
        }

        calcTime()
        const intervalId = setInterval( calcTime, 60000)

        return () => clearInterval(intervalId)
    }, [competition])

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
                        source={{uri: competition.image }}
                        resizeMode='contain'
                    />

                    <Text style={ { fontFamily: 'canvasReg', fontSize: 20, color: '#314B2F'} }>
                        { competitionData.title || 'title' }
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
                                    { days }
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
                                    { hours }
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
                                    { minutes }
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
                                { competitionData.entries.length > 0 ? competitionData.entries.length : 'None'}
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