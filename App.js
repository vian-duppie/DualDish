import 'react-native-gesture-handler'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { globalStyles } from './utils/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import { useRoute } from '@react-navigation/native';
import useEffect from 'react'
import DrawerScreen from './screens/DrawerScreen';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font'

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
                            headerShown: false
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
                            name='root'
                            component={ DrawerScreen }
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
