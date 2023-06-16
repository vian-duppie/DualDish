/* React Native */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react'

/* Firebase */
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

/* Screens */
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import MyProfileScreen from './screens/MyProfileScreen/MyProfileScreen';
import CompetitionsScreen from './screens/CompetitionsScreen';
import CompetitionDetailScreen from './screens/CompetitionDetailScreen';

/* Styling */
import { globalStyles } from './utlities/GlobalStyles';

const Stack = createNativeStackNavigator()

export default function App( { navigation } ) {
    return (
        <NavigationContainer>
            <View style={ 
                    [ 
                        globalStyles.flexGrowHeight,
                        globalStyles.androidSafeArea
                    ]
                }
            >
                <SafeAreaView style={ globalStyles.flexGrowHeight }>
                    <Stack.Navigator
                        initialRouteName='splash'
                        screenOptions={{
                            headerShown: false,
                            contentStyle: { backgroundColor: '#FFFFFF' }
                        }}
                    >

                        <Stack.Screen
                            name='splash'
                            component={ SplashScreen }
                        />

                        <Stack.Screen
                            name='login'
                            component={ LoginScreen }
                        />

                        <Stack.Screen
                            name='register'
                            component={ RegisterScreen }
                        />
                        
                        <Stack.Screen
                            name='myProfile'
                            component={ MyProfileScreen }
                        />

                        <Stack.Screen
                            name='competitions'
                            component={ CompetitionsScreen }
                        />

                        <Stack.Screen
                            name='competitionDetail'
                            component={ CompetitionDetailScreen }
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
