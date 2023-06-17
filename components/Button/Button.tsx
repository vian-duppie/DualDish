import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { buttonStyles } from './Button.styles';

const Button = ( props ) => {
    return(
        <Pressable 
            style={ [buttonStyles.container, { backgroundColor: props.backgroundColor == 'green' ? '#70B8A9' : '#D46139'}]}
            onPress={ props.onPress }
        >
            <Text style={buttonStyles.text}>{ props.label || 'placeholder' }</Text>
        </Pressable>
    );
}

export default Button