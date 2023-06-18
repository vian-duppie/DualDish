import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getCurrentUser } from '../../services/firebaseAuth'

const ProfileEntryCard = ( { entry } ) => {
    useEffect(() => {
        console.log("THIS IS THE ENTRY: ")
        console.log(entry)
    }, [])

    useFocusEffect(
        useCallback(() =>{
            console.log("THIS IS THE ENTRY: ")
        },[])
    )

    return (
        <View
            style={{
                backgroundColor: '#F4F4F6',
                padding: 24,
                alignItems: 'center',
                borderRadius: 20,
                maxWidth: 200
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    backgroundColor: '#314B2F',
                    padding: 5,
                    borderRadius: 50
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15,
                        fontFamily: 'poppinsMed',
                        alignSelf: 'center'
                    }}
                >
                    { entry.competition_finish_position }
                </Text>
            </View>

            <View>
                <Image
                    style={{ width: 90, height: 90, borderRadius: 500 }}
                    source={{ uri: entry.dish_image }}
                    resizeMode='contain'
                />
            </View>

            <View
                style={{
                    marginTop: 10,
                    gap: 10
                }}
            >
                <Text 
                    style={{
                       fontSize: 18,
                       color: '#314B2F',
                       fontFamily: 'canvasReg',
                       alignSelf: 'center'
                    }}
                >
                    { entry.dish_title }
                </Text>
                <Text 
                    style={{
                       fontSize: 18,
                       color: '#314B2F',
                       fontFamily: 'poppinsMed',
                       alignSelf: 'center'
                    }}
                >
                    { entry.dish_category }
                </Text>
            </View>
        </View>
    )
}

export default ProfileEntryCard

const styles = StyleSheet.create({})