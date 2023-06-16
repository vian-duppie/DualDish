import { FlatList, ScrollView, Text, View } from 'react-native'
import React, { Component, useCallback, useEffect, useState } from 'react'
import { competitionsScreenStyles } from './CompetitionsScreen.styles'
import Tag from '../components/Tag'
import CompetitionCard from '../components/CompetitionCard'
import { useFocusEffect } from '@react-navigation/native'
import { addCompetitionToCollection, getAllCompetitions } from '../services/firebaseDb'

const CompetitionsScreen = () => { 
    const [ competitions, setCompetitions ] = useState( [] )

    // const getRemainingTime = (  ) => {
    //     const start = new Date((1613748319 * 1000) + (47688698));
    //     const end = new Date(((1613748319 + (2 * 86400)) * 1000) + (47688698));
      
    //     // Calculate the difference in milliseconds between the start and end dates
    //     const difference = end - start;
      
    //     // Convert the difference to hours, minutes, and seconds
    //     const hoursRemaining = Math.floor(difference / (1000 * 60 * 60));
    //     const minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    //     const secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);
      
    //     // Return the remaining time as an object
    //     return {
    //       hours: hoursRemaining,
    //       minutes: minutesRemaining,
    //       seconds: secondsRemaining
    //     };
    // }

    useEffect( () => {
        getCompetitions()

        let time = {
            seconds: 1613748319,
            nanoseconds: 47688698687,
          }
          
          const fireBaseTime = new Date(
            time.seconds * 1000 + time.nanoseconds / 1000000,
          );
          console.log(fireBaseTime)
          const date = fireBaseTime.toDateString();
          const atTime = fireBaseTime.toLocaleTimeString();


        //   console.log(
            // getRemainingTime()
        //   )
        //   getRemainingTime()
    }, [])

    const getCompetitions = async () => {
        setCompetitions( await getAllCompetitions() )
    }

    return (
        <View style={ competitionsScreenStyles.container }>
            <View style={ competitionsScreenStyles.container__headerContainer}>
                <Text style={ competitionsScreenStyles.container__headerContainer_text }>
                    Competitions
                </Text>
            </View>

            {/* Search Bar Implemented Here */}

            <View style={ competitionsScreenStyles.container__introContainer }>
                <Text style={ { fontFamily:'poppinsMed', fontSize: 20, color: '#314B2F' } }>
                    Dual Dish Competitions
                </Text>

                <Text style={ { fontFamily:'poppinsReg', fontSize: 16, color: '#9C262E' } }>
                    These are all the competitions happening now!
                </Text>
            </View>

            <View style={ competitionsScreenStyles.container__filterContainer }>
                <Text style={ { fontFamily:'poppinsMed', fontSize: 16, color: '#314B2F' } }>
                    Filter by
                </Text>

                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={ {gap: 15} }
                    style={{ 
                        overflow: 'visible'
                    }}
                >
                    <Tag
                        label='Category'
                        isSelected={false}
                    />
                    <Tag
                        label='Category'
                        isSelected={false}
                    />
                    <Tag
                        label='Category'
                        isSelected={true}
                    />
                    <Tag
                        label='Category'
                        isSelected={false}
                    />
                </ScrollView>
            </View>

            <FlatList
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ competitionsScreenStyles.container__competitionsCardsContainer }
                data={competitions}
                renderItem={ ( { item, index } ) => (
                    <CompetitionCard
                        key={index}
                        title={item.title}
                    />
                )}
            />

            {/* <ScrollView contentContainerStyle={ competitionsScreenStyles.container__competitionsCardsContainer }>
                <CompetitionCard/>
                <CompetitionCard/>
                <CompetitionCard/>
                <CompetitionCard/>
            </ScrollView> */}
        </View>
    )
}

export default CompetitionsScreen