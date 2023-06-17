import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { homeScreenStyles } from './HomeScreen.styles'

const HomeScreen = () => {
    return (
        <View style={ homeScreenStyles.container }>
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