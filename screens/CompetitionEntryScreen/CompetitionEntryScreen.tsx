import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CompetitionEntryScreenStyles } from './CompetitionEntryScreen.styles'
import { ScrollView } from 'react-native-gesture-handler'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import CloseSmall from '../../components/Svg/CloseSmall'
import IngredientCard from '../../components/IngredientCard'
import * as ImagePicker from 'expo-image-picker'
import Camera from '../../components/Svg/Camera'
import { uploadToStorage } from '../../services/firebaseStorage'
import Toast from '../../components/Toast/Toast'
import { addEntry } from '../../services/firebaseDb'
import { getCurrentUser } from '../../services/firebaseAuth'

const CompetitionEntryScreen = ( { route, navigation } ) => {

    const { competition } = route.params

    const [showToast, setShowToast] = useState( false )
    const [toastType, setToastType] = useState( '' )
    const [ toastMessage, setToastMessage ] = useState( 'Error' )

    const [dishTitle, setDishTitle] = useState('')
    const [dishDescription, setDishDescription] = useState('')
    const [dishStep, setDishStep] = useState('')
    const [dishStepsList, setDishStepsList] = useState([])
    const [dishIngredient, setDishIngredient] = useState('')
    const [dishIngredientAmount, setDishIngredientAmount] = useState('')
    const [dishIngredientsList, setDishIngredientsList] = useState([])
    const [dishImage, setDishImage] = useState(null)

    const addStep = () => {
        if (dishStep.trim() !== '') {
            setDishStepsList([...dishStepsList, dishStep])
            setDishStep('')
        }
    }

    const removeStep = ( idx: number ) => {
        const updatedStepsList = dishStepsList.filter((_, index) => index !== idx)
        setDishStepsList( updatedStepsList )
    }

    const addIngredient = () => {
        if (dishIngredient.trim() !== '') {
            setDishIngredientsList([...dishIngredientsList, { name: dishIngredient, weight: dishIngredientAmount }])
            setDishIngredient('')
            setDishIngredientAmount('')
        }
    }

    const removeIngredient = ( idx: number ) => {
        const updatedIngredientsList = dishIngredientsList.filter((_, index) => index !== idx)
        setDishIngredientsList( updatedIngredientsList )
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
            setDishImage( result.assets[0].uri )
        }
    }

    const [imageUrl, setImageUrl] = useState('')

    const uploadImage = async ( image, path, name) => {
        const result = await uploadToStorage( image, `${path}/${name}` )
        // console.log(result)
        setImageUrl(result)
        return result
    }

    const uploadEntry = async () => {
        let userId = getCurrentUser().uid
        let image = await uploadImage( dishImage, 'entries', competition.id + competition.title.replace(/ +/g, "") + userId)
        // console.log(image)
        let entryData = {
            dish_title: dishTitle,
            dish_description: dishDescription,
            dish_steps: dishStepsList,
            dish_ingredients: dishIngredientsList,
            dish_image: image,
            dish_owner: userId,
            dish_category: competition.category,
            dish_owner_username: competition.username
        }

        let result = await addEntry( entryData, userId, competition.id )

        if ( result == 'You already entered' ) {
            setToastType( 'error' )
            setToastMessage( result )
            setShowToast( true )
        } else {
            setToastType( 'success' )
            setToastMessage( result )
            setShowToast( true )
        }
    }

    return (
        <View style={{ flex: 1 }}>
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
            <ScrollView style={CompetitionEntryScreenStyles.container}>
                <View style={CompetitionEntryScreenStyles.container__headerContainer}>
                    <Text style={CompetitionEntryScreenStyles.container__headerContainer_text}>
                        Enter Here
                    </Text>
                </View>

                <View style={CompetitionEntryScreenStyles.container__introContainer}>
                    <Text style={{ fontFamily: 'poppinsReg', fontSize: 16, color: '#9C262E' }}>
                        Simply complete the form below to enter the competition
                    </Text>
                </View>

                <View style={CompetitionEntryScreenStyles.container__detailsContainer}>
                    <Input
                        label='Dish Title'
                        placeholder='Enter the title of your dish'
                        onChangeText={ (value: string) => setDishTitle( value )}
                        value={ dishTitle }
                    />

                    <Input
                        label='Dish Description'
                        placeholder='Enter the description of your dish'
                        multiline={true}
                        onChangeText={ (value: string) => setDishDescription( value )}
                        value={ dishDescription }
                    />

                    <View style={CompetitionEntryScreenStyles.container__detailsContainer_instructionsContainer}>
                        <Input
                            label='How to make dish name'
                            placeholder='Add in the steps to create the dish'
                            multiline={true}
                            onChangeText={ (value: string) => setDishStep( value )}
                            value={ dishStep }
                        />

                        {
                            dishStep.trim() != ''
                            &&
                            <View style={{ alignSelf: 'flex-end' }}>
                                <Button
                                    onPress={ addStep }
                                    label={'Add Step ' + (dishStepsList.length + 1)}
                                />
                            </View>
                        }

                        {
                            dishStepsList.map( ( x, idx ) => (
                                <View key={ idx } style={CompetitionEntryScreenStyles.container__detailsContainer_instructionsContainer__stepsContainer}>
                                    <Text style={
                                        {
                                            color: '#D46139',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            includeFontPadding: false
                                        }
                                    }>
                                        Step {idx + 1}
                                    </Text>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ 
                                                color: '#314B2F', 
                                                fontSize: 16, 
                                                fontWeight: '500', 
                                                includeFontPadding: false 
                                            }
                                        }>
                                            - { x }
                                        </Text>
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <CloseSmall 
                                            onPress={ () => removeStep( idx )}
                                        />
                                    </View>
                                </View>
                            ))
                        }

                    </View>

                    <View style={CompetitionEntryScreenStyles.container__detailsContainer_ingredientsContainer}>
                        <Input
                            label='Ingredient used'
                            placeholder='Add in all the ingredients used'
                            multiline={true}
                            value={ dishIngredient }
                            onChangeText={ (value: string) => setDishIngredient( value )}
                        />

                        <Input
                            label='Ingredient amount'
                            placeholder='Add in the amount'
                            multiline={true}
                            value={ dishIngredientAmount }
                            onChangeText={ (value: string) => setDishIngredientAmount( value )}
                        />

                        {
                            dishIngredient.trim() != '' && dishIngredientAmount.trim() != ''
                            &&
                            <View style={{ alignSelf: 'flex-end' }}>
                                <Button
                                    onPress={ addIngredient }
                                    label={'Add Ingredient'}
                                />
                            </View>
                        }

                        <View style={CompetitionEntryScreenStyles.container__detailsContainer_ingredientsContainer__ingredientsList}>
                            {
                                dishIngredientsList.map( ( x, idx ) => (
                                    <Pressable onPress={ () => removeIngredient( idx )} key={ idx }>
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
                        dishImage
                        &&
                        <View style={{
                            // flex: 1
                            aspectRatio: 1/1,
                        }}>
                            <Image 
                                source={{ uri: dishImage }}  
                                style={{ 
                                    flex: 1
                                }} 
                                    resizeMode='cover'
                                />
                        </View>
                    }
                </View>

                <Button
                    label="Enter Recipe"
                    onPress={ uploadEntry }
                    backgroundColor='green'
                />
            </ScrollView>
        </View>
    )
}

export default CompetitionEntryScreen

const styles = StyleSheet.create({})