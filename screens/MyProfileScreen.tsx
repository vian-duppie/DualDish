import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { loginScreenStyles } from './LoginScreen.styles'
import Button from '../components/Button'
import LineButton from '../components/LineButton'
import { myProfileScreenStyles } from './MyProfileScreen.styles'
import Hamburger from '../components/Svg/Hamburger'
import { useRoute } from '@react-navigation/native'
import Camera from '../components/Svg/Camera'
import Edit from '../components/Svg/Edit'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RightArrow from '../components/Svg/RightArrow'

const MyProfileScreen = ( { navigation } ) => {
    const [ usernameIsEditable, setUsernameIsEditable ] = useState( false )

    const width = Dimensions.get('window').width

    const test = () => {
        console.log('hey man')
        setUsernameIsEditable( !usernameIsEditable )
    }

    const route = useRoute()
    console.log(route.name)

    return (
        <ScrollView contentContainerStyle={ myProfileScreenStyles.container } showsVerticalScrollIndicator>
            <View style={ myProfileScreenStyles.container__headerContainer}>
                <Text style={ myProfileScreenStyles.container__headerContainer_text }>
                    My Profile
                </Text>
            </View>

            <View style={ myProfileScreenStyles.container__profileImageContainer }>
                <Image
                    style={ 
                        { 
                            width: width * 0.3, 
                            height: width * 0.3, 
                            borderRadius: (width * 0.3)/2, 
                            aspectRatio: 1, 
                            position: 'absolute'
                        } 
                    }
                    source={ require( '../assets/images/Splash_Screen_Background.png' ) }
                    resizeMode='contain'
                />

                <Image
                    style={ 
                        { 
                            width: width * 0.4, 
                            height: width * 0.4,
                            opacity: 0.4
                        } 
                    }
                    source={ require( '../assets/images/ProfileScreen_Shape.png' ) }
                    resizeMode='contain'
                />

                <Camera
                    styles={ myProfileScreenStyles.container__profileImageContainer_icon }
                />
            </View>

            <View style={ myProfileScreenStyles.container__detailsContainer }>
                <Input
                    label='Username'
                    placeholder='johndoe@gmail.com'
                    // onChangeText={ (value: React.SetStateAction<string>) => setEmail(value) }
                    type='editable'
                    defaultValue='Vian'
                    isEditable={usernameIsEditable}
                    changeEdibality={test}
                />

                <Input
                    label='Phone Number'
                    placeholder='johndoe@gmail.com'
                    // onChangeText={ (value: React.SetStateAction<string>) => setEmail(value) }
                    type='editable'
                    defaultValue='064 897 1069'
                    isEditable={usernameIsEditable}
                    changeEdibality={test}
                />
            </View>

            <View style={ myProfileScreenStyles.container__actionsContainer } >
                <TouchableOpacity style={ myProfileScreenStyles.container__actionsContainer_button }>
                    <Text style={ { color: '#D46139', fontSize: 18 } }>Log Out</Text>

                    <RightArrow/>
                </TouchableOpacity>

                <TouchableOpacity style={ myProfileScreenStyles.container__actionsContainer_button }>
                    <Text style={ { color: '#D46139', fontSize: 18 } }>Delete Account</Text>

                    <RightArrow/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MyProfileScreen