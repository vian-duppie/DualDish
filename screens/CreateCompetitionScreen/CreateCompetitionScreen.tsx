import { StyleSheet, Text, View, Pressable, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import IngredientCard from '../../components/IngredientCard'
import * as ImagePicker from 'expo-image-picker'
import Camera from '../../components/Svg/Camera'
import { uploadToStorage } from '../../services/firebaseStorage'
import { getCurrentUser } from '../../services/firebaseAuth'
import { addCompetition } from '../../services/firebaseDb'
import Toast from '../../components/Toast/Toast'

const CreateCompetitionScreen = ( { navigation } ) => {
    const [ dishTitle, setDishTitle ] = useState('')
    const [ compCategory, setCompCategory ] = useState('')
    const [ compDescription, setCompDescription ] = useState('')
    const [ compEntriesAllowed, setCompEntriesAllowed ] = useState(0)
    const [ compTimeLimit, setCompTimeLimit ] = useState(0)
    const [ challengeTitle, setChallengeTitle ] = useState('')
    const [ challengeDescription, setChallengeDescription ] = useState('')
    const [ challengeIngredient, setChallengeIngredient ] = useState('')
    const [ challengeIngredientAmount, setChallengeIngredientAmount ] = useState('')
    const [ challengeIngredientsList, setChallengeIngredientsList ] = useState([])
    const [ compImage, setCompImage ] = useState('')
    const [ compDif, setCompDif ] = useState(0)

    const [ showToast, setShowToast ] = useState( false )
    const [ toastMessage, setToastMessage ] = useState( 'Error' )
    const [ toastType, setToastType ] = useState( '' )

    const addIngredient = () => {
        if (challengeIngredient.trim() !== '') {
            setChallengeIngredientsList([...challengeIngredientsList, { name: challengeIngredient, weight: challengeIngredientAmount }])
            setChallengeIngredient('')
            setChallengeIngredientAmount('')
        }
    }

    const removeIngredient = ( idx: number ) => {
        const updatedIngredientsList = challengeIngredientsList.filter((_, index) => index !== idx)
        setChallengeIngredientsList( updatedIngredientsList )
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        })

        console.log(JSON.stringify(result, null, 2));
        if( !result.canceled ) {
            setCompImage( result.assets[0].uri )
        }
    }

    const [ imageUrl, setImageUrl ] = useState('')
    const uploadImage = async ( image, path, name) => {
        const result = await uploadToStorage( image, `${path}/${name}` )
        // console.log(result)
        setImageUrl(result)
        return result
    }

    const uploadCompetition = async () => {
        let number = getCurrentUser().uid
        const characters = number.split('')
  
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]]
        }
        
        const shuffledStr = characters.join('');

        if( !compImage) {
            setShowToast( true )
            setToastMessage( 'Upload an image' )
            setToastType( 'Error' )
            return
        }

        let image = await uploadImage( compImage, 'competitions', dishTitle.trim().replace(/ +/g, "") + shuffledStr.replace(/ +/g, ""))

        let compData = {
            category: compCategory,
            challenge: {
                description: challengeDescription,
                ingredients: challengeIngredientsList,
                title: challengeTitle,
            },
            competition_open: true,
            description: compDescription,
            difficulty: compDif,
            entries: [],
            entries_allowed: compEntriesAllowed,
            time_limit: compTimeLimit,
            title: dishTitle,
            image: image
        }

        let result = await addCompetition( compData )

        if(result) {
            setShowToast( true )
            setToastMessage( 'Competition Added' )
            setToastType( 'success' )
            navigation.navigate('competitions')
        } else {
            setShowToast( true )
            setToastMessage( 'Something went wrong' )
            setToastType( 'error' )
        }
    }

    return (

        <View style={{flex:1}}>
            {
                showToast
                &&
                <Toast
                    type={ toastType }
                    showToast={ showToast }
                    message={ toastMessage }
                    hideToast={ ( value ) => setShowToast(value)}
                />
            }

            <ScrollView
                contentContainerStyle={{
                    padding: 24
                }}
            >

                <View
                    style={{
                        gap: 20
                    }}
                >

                    <Text
                        style={{
                            color: '#E23E3E',
                            fontSize: 60,
                            fontFamily: 'canvasReg',
                            includeFontPadding: false
                        }}
                    >
                        Create Competition
                    </Text>

                    <Text
                        style={{
                            color: '#314B2F',
                            fontSize: 16,
                            fontFamily: 'poppinsReg',
                            includeFontPadding: false
                        }}
                    >
                        Simply complete the form below to create a competition
                    </Text>
                </View>

                <View
                    style={{
                        marginTop: 20,
                        gap: 15
                    }}
                >
                    <Input
                        label='Dish Title'
                        placeholder='Enter the dish title'
                        onChangeText={ (value: string) => setDishTitle( value )}
                        value={ dishTitle }
                    />


                    <Input
                        label='Competition Category'
                        placeholder='Enter the competition title'
                        onChangeText={ (value: string) => setCompCategory( value )}
                        value={ compCategory }
                    />

                    <Input
                        label='Competition Description'
                        placeholder='Describe the competition'
                        onChangeText={ (value: string) => setCompDescription( value )}
                        value={ compDescription }
                    />

                    <Input
                        label='Competition Difficulty'
                        placeholder='Enter the difficulty of competition 1-6'
                        onChangeText={ (value) => setCompDif( value )}
                        value={ compDif }
                        keyboardtype='numeric'
                    />

                    <Input
                        label='Entries Allowed'
                        placeholder='Enter number of entries allowed'
                        keyboardtype='numeric'
                        onChangeText={ (value) => setCompEntriesAllowed( value )}
                        value={ compEntriesAllowed }
                    />

                    <Input
                        label='Time Limit'
                        placeholder='Enter number of day'
                        keyboardtype='numeric'
                        onChangeText={ (value) => setCompTimeLimit( value )}
                        value={ compTimeLimit }
                    />

                    <View
                        style={{}}
                    >
                        <Text
                            style={{
                                color: '#314B2F',
                                fontSize: 16,
                                fontFamily: 'poppinsMed'
                            }}
                        >
                            Configure Challenge
                        </Text>
                    </View>

                    <View
                        style={{
                            gap: 20
                        }}
                    >
                        <Input
                            label='Challenge Title'
                            placeholder='Enter the title of round 1 here'
                            onChangeText={ (value: string) => setChallengeTitle( value )}
                            value={ challengeTitle }
                        />
                        <Input
                            label='Challenge Description'
                            placeholder='Enter the ingredients needed for challenge'
                            onChangeText={ (value: string) => setChallengeDescription( value )}
                            value={ challengeDescription }
                        />

                        <View
                            style={{
                                gap: 20
                            }}
                        >
                            <Input
                                label='Challenge Ingredient'
                                placeholder='Add in ingredients that needs to be used'
                                onChangeText={ (value: string) => setChallengeIngredient( value )}
                                value={ challengeIngredient }
                            />

                            <Input
                                label='Challenge Ingredient Amount'
                                placeholder='Add in the amount of the ingredient'
                                onChangeText={ (value: string) => setChallengeIngredientAmount( value )}
                                value={ challengeIngredientAmount }
                            />

                            {
                                challengeIngredient != '' && challengeIngredientAmount != ''
                                &&
                                <View style={{ alignSelf: 'flex-end' }}>
                                    <Button
                                        onPress={ addIngredient }
                                        label={'Add Ingredient'}
                                    />
                                </View>
                            }

                            <View
                                style={{
                                    // flex: 1
                                    gap: 10
                                }}
                            >
                                {
                                    challengeIngredientsList.map( (x, idx) => (
                                        <Pressable
                                            onPress={ () => removeIngredient( idx )}
                                            key={ idx }
                                        >
                                            <IngredientCard
                                                background='gray'
                                                name={ x.name }
                                                weight={ x.weight }
                                            />
                                        </Pressable>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 30, marginTop: 20 }}>
                        <View style={{ gap: 10 }}>
                            <Text style={{ 
                                fontSize: 16,
                                color: '#314B2F',
                                fontFamily: 'poppinsMed',
                                includeFontPadding: false,
                            }}>
                                Upload a photo of the dish
                            </Text>
                            <Pressable 
                            onPress={pickImage} 
                            style={{ 
                                borderColor: '#314B2F', 
                                borderWidth: 1, 
                                borderRadius: 10, 
                                padding: 20, 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                marginBottom: 20
                            }}>
                                <Camera
                                    onPress={ pickImage }
                                />
                            </Pressable>
                        </View>

                        {
                            compImage
                            &&
                            <View style={{
                                // flex: 1
                                aspectRatio: 1/1,
                            }}>
                                <Image 
                                    source={{ uri: compImage }}  
                                    style={{ 
                                        flex: 1
                                    }} 
                                        resizeMode='cover'
                                    />
                            </View>
                        }
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 20
                    }}
                >
                    <Button
                        backgroundColor='green'
                        onPress={ uploadCompetition }
                        label={'Add Competition'}
                    />
                </View>
            </ScrollView>
        </View>
  )
}

export default CreateCompetitionScreen

const styles = StyleSheet.create({})