import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { CompetitionCardStyles } from './CompetitionCard.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CompetitionCard = ( props ) => {

    const screenWidth = Dimensions.get('window').width

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
                        { props.title || 'title' }
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
                                    { props.days || '15'}
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
                                    { props.hours || '4' }
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
                                    { props.minutes || '20'}
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
                                { props.entries || '10' }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>  
            <View style={ CompetitionCardStyles.container__bottomRow }>
                <TouchableOpacity 
                    style={ {alignSelf: 'flex-start' } }
                    // onPress={}
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
                </TouchableOpacity>
            </View>          
        </View>
    )
}

export default CompetitionCard