import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import IngredientCard from '../../components/IngredientCard'

const CreateCompetitionScreen = () => {
    return (
        <View
            style={{
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
                    placeholder='Enter the competition title'
                    // onChangeText={ (value: string) => setDishTitle( value )}
                    // value={ dishTitle }
                />

                {
                    <View
                        style={{
                            gap: 20
                        }}
                    >
                        <Input
                            label='Competition Category'
                            placeholder='Enter the competition title'
                            // onChangeText={ (value: string) => setDishTitle( value )}
                            // value={ dishTitle }
                        />

                        <View style={{ alignSelf: 'flex-end' }}>
                            <Button
                                // onPress={ addStep }
                                label={'Add Category'}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Pressable>
                                <IngredientCard
                                    background='gray'
                                    name='name'
                                    weight={ 's' }
                                />
                            </Pressable>
                        </View>
                    </View>
                }

            </View>
        </View>
  )
}

export default CreateCompetitionScreen

const styles = StyleSheet.create({})