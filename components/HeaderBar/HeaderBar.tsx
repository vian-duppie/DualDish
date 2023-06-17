import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Logo from '../Svg/Logo'
import { headerBarStyles } from './HeaderBar.styles'
import Hamburger from '../Svg/Hamburger'
import { NavigationContainer, useRoute, useNavigation } from '@react-navigation/native';
import Close from '../Svg/Close'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type HeaderRoute = {
    title: string
    route: keyof HeaderStackParams
}

interface HomeInterface {}

type HeaderStackParams = {
    home?: HomeInterface 
    competitions: undefined
    competitionCreate: undefined
    myProfile: undefined
    competitionEntry: undefined
}

const HeaderBar = () => {
    // Variables
    const navigation = useNavigation<NativeStackNavigationProp<HeaderStackParams>>();
    const route = useRoute();
    const [ menuOpen, setMenuOpen ] = useState<Boolean>( false )

    // Opens and closes menu
    const toggleMenu = () => {
        setMenuOpen( !menuOpen )
    }

    // Routes on which the header must be shown
    const showHeaderRoutes: string[] = [ 
        'myProfile', 
        'profile', 
        'home', 
        'competitions', 
        'competitionDetail', 
        'competitionEntry', 
        'competitionCreate' 
    ]
    // If the route.name is found in the showHeaderRoutes array the header will show
    const shouldShowHeader = showHeaderRoutes.includes(route.name);
  
    if (!shouldShowHeader) {
      return null;
    }


    // Navigate to Screen and close menu
    const handleNavigation = ( routeName: keyof HeaderStackParams ) => {
        navigation.navigate( routeName )
        setMenuOpen( false )
    }

    // Routes that should be shown in menu
    const diplayRouteOptions: HeaderRoute[] = [
        {   
            title: 'Home',
            route: 'home'
        },
        {   
            title: 'Competitions',
            route: 'competitions'
        },
        {   
            title: 'Create Compeition',
            route: 'competitionCreate'
        },
        {   
            title: 'My Profile',
            route: 'myProfile'
        }
    ]

    return (
        <View style={ headerBarStyles.container }>
            <Logo />

            {
                menuOpen 
                ? 
                    <Close onPress={toggleMenu} />
                : 
                    <Hamburger onPress={toggleMenu} />
            }
            
            {
                menuOpen 
                && 
                <View style={ headerBarStyles.container__menuContainer }>
                        {
                            diplayRouteOptions.map( ( x, idx ) => 
                                <TouchableOpacity 
                                    key={ idx } 
                                    onPress={() => handleNavigation( x.route )}
                                >
                                    <Text 
                                        style={[
                                            headerBarStyles.container__menuContainer_item,
                                            {
                                                textDecorationLine: x.route == route.name ? 'underline' : 'none'
                                            } 
                                        ]}
                                    >
                                        { x.title }
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                </View>
            }
      </View>
    )
}

export default HeaderBar