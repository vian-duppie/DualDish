import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { LineButtonStyles } from './LineButton.styles';

const LineButton = ( props ) => {
    return(
        <TouchableOpacity 
            style={ LineButtonStyles.container }
            onPress={ props.onPress }
        >
            <Text style={ LineButtonStyles.text }>{ props.label || 'placeholder' }</Text>
        </TouchableOpacity>
    );
}

export default LineButton