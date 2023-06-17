import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { LineButtonStyles } from './LineButton.styles';

const LineButton = ( props ) => {
    return(
        <Pressable 
            style={ LineButtonStyles.container }
            onPress={ props.onPress }
        >
            <Text style={ LineButtonStyles.text }>{ props.label || 'placeholder' }</Text>
        </Pressable>
    );
}

export default LineButton