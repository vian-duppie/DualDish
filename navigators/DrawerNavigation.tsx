import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='splash'
                component={ SplashScreen }
            />
            <Drawer.Screen
                name='login'
                component={ LoginScreen }
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})