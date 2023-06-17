import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { homeScreenStyles } from './HomeScreen.styles'
import { getAllEntries } from '../../services/firebaseDb'
import HeartOutline from '../../components/Svg/HeartOutline'
import HeartFill from '../../components/Svg/HeartFill'
import EntryCard from '../../components/EntryCard/EntryCard'

const HomeScreen = () => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        getEntries()
    }, [])

    const getEntries = async () => {
        try {
            const fetched = await getAllEntries()
            // console.log(fetched)
            setEntries(fetched)
        } catch ( err ) {
            console.error( 'Error fetching comps: ', err)
        }
    }

    return (
        <View style={ homeScreenStyles.container }>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={ homeScreenStyles.container__headerContainer}>
                            <Text style={ homeScreenStyles.container__headerContainer_text }>
                                Welcome to
                            </Text>
                            <Text style={[ homeScreenStyles.container__headerContainer_text, { color: '#314B2F' } ]}>
                                Dual Dish
                            </Text>
                        </View>

                        <View style={ homeScreenStyles.container__introContainer }>
                            <Text style={ { fontFamily:'poppinsMed', fontSize: 20, color: '#314B2F' } }>
                                Latest Entries
                            </Text>

                            <Text style={ { fontFamily:'poppinsReg', fontSize: 16, color: '#9C262E' } }>
                                Have a browse through some of the entries we have received so far!
                            </Text>
                        </View>
                    </>
                }
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={{ flexGrow: 1 }}
                data={ entries }
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <EntryCard
                        entry={ item }
                        // url={ item.dish_image }
                        // title={ item.dish_title }
                        // category={ item.dish_category }
                        // username={ item.dish_owner_username }
                        // votes={ item.dish_votes }
                    />
                )}
            />



            {/* <FlatList
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ homeScreenStyles.container__competitionsCardsContainer }
                data={competitions}
                renderItem={ ( { item, index } ) => (
                    <CompetitionCard
                        competition={ item }
                        key={ index }
                        title={ item.title }
                        entries={ item.entries.length }
                        navigation={ navigation }
                    />
                )}
            /> */}
        </View>
    )
}

export default HomeScreen