import { View, Text, Image, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import { myProfileScreenStyles } from './MyProfileScreen.styles'
import Camera from '../../components/Svg/Camera'
import RightArrow from '../../components/Svg/RightArrow'
import { getCurrentUser, signOutUser } from '../../services/firebaseAuth'

const MyProfileScreen = ( { navigation } ) => {

    const user = getCurrentUser()

    const [ usernameIsEditable, setUsernameIsEditable ] = useState( false )

    const width = Dimensions.get('window').width

    const test = () => {
        // console.log('hey man')
        setUsernameIsEditable( !usernameIsEditable )
    }


    return (
        <ScrollView contentContainerStyle={ myProfileScreenStyles.container } showsVerticalScrollIndicator={false}>
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
                    source={ require( '../../assets/images/Splash_Screen_Background.png' ) }
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
                    source={ require( '../../assets/images/ProfileScreen_Shape.png' ) }
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
                    defaultValue={ user.displayName }
                    isEditable={usernameIsEditable}
                    changeEdibality={test}
                />

                <Input
                    label='Phone Number'
                    placeholder='064 897 1069'
                    // onChangeText={ (value: React.SetStateAction<string>) => setEmail(value) }
                    type='editable'
                    defaultValue={ user.phoneNumber }
                    isEditable={usernameIsEditable}
                    changeEdibality={test}
                />
            </View>

            <View style={ myProfileScreenStyles.container__actionsContainer } >
                <TouchableOpacity 
                    style={ myProfileScreenStyles.container__actionsContainer_button }
                    onPress={ () => signOutUser() }
                >
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