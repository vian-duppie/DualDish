import { FlatList, ScrollView, Text, View, Animated } from 'react-native'
import React, { Component, useCallback, useEffect, useRef, useState } from 'react'
import { competitionsScreenStyles } from './CompetitionsScreen.styles'
import Tag from '../../components/Tag'
import CompetitionCard from '../../components/CompetitionCard'
import { useFocusEffect } from '@react-navigation/native'
import { getAllCompetitions } from '../../services/firebaseDb'

const CompetitionsScreen = ( { navigation } ) => { 
    const [ competitions, setCompetitions ] = useState( [] )

    const [entries, setEntries] = useState([])
    
    useFocusEffect(
        useCallback(() =>{
            console.log("LOADING")
            console.log(competitions)
            getCompetitions()
        },[])
    )

    useEffect( () => {
        getCompetitions()
        // console.log(competitions)
    }, [])

    const getCompetitions = async () => {
        try {
            const fetched = await getAllCompetitions()
            setCompetitions( fetched )
        } catch ( err ) {
            console.error( 'Error fetching comps: ', err)
        }
    }

    return (
        <View style={ competitionsScreenStyles.container }>
            <FlatList
                ListHeaderComponent={
                    <>
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

                        <View 
                            style={ competitionsScreenStyles.container__filterContainer }
                        >
                            <Text style={ { fontFamily:'poppinsMed', fontSize: 16, color: '#314B2F' } }>
                                Filter by
                            </Text>

                            <ScrollView 
                                horizontal 
                                showsHorizontalScrollIndicator={false} 
                                contentContainerStyle={ {gap: 15 } }
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
                    </>
                }
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ competitionsScreenStyles.container__competitionsCardsContainer }
                data={competitions}
                renderItem={ ( { item, index } ) => (
                    <CompetitionCard
                        competition={ item }
                    />
                )}
            />
        </View>
    )
}

export default CompetitionsScreen