import 'react-native-gesture-handler'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { globalStyles } from './utils/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator()

export default function App() {
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
                    </Stack.Navigator>
                </SafeAreaView>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
