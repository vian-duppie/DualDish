/* React Native */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'

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
import HeaderBar from './components/HeaderBar/HeaderBar';

const Stack = createNativeStackNavigator()

export default function App( { navigation } ) {
    // const route = useRoute()

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
                    {/* <HeaderBar/> */}
                    <Stack.Navigator
                        initialRouteName='splash'
                        screenOptions={{
                            contentStyle: { backgroundColor: '#FFFFFF' },
                        }}
                    >
                        <Stack.Screen
                            name='splash'
                            component={ SplashScreen }
                            options={{
                                headerShown: false
                            }}
                        />

                        <Stack.Screen
                            name='login'
                            component={ LoginScreen }
                            options={{
                                headerShown: false
                            }}
                        />

                        <Stack.Screen
                            name='register'
                            component={ RegisterScreen }
                            options={{
                                headerShown: false
                            }}
                        />
                        
                        <Stack.Screen
                            name='myProfile'
                            options={{
                                header: () => <HeaderBar navigation={navigation}/>
                            }}
                            component={ MyProfileScreen }
                        />

                        <Stack.Screen
                            name='competitions'
                            options={{
                                header: () => <HeaderBar navigation={navigation}/>
                            }}
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
