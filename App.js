import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { globalStyles } from './utils/GlobalStyles';

export default function App() {
    return (
        <View style={ 
                [ 
                    globalStyles.flexGrowHeight,
                    globalStyles.androidSafeArea 
                ] 
            }
        >
            <SafeAreaView style={ globalStyles.flexGrowHeight }>
                <SplashScreen/>      
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

});
