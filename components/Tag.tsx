import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { TagStyles } from './Tag.styles';

const Tag = ( props ) => {
    return(
        <TouchableOpacity 
            style={ [TagStyles.container, { backgroundColor: props.isSelected == true ? '#D46139' : 'transparent'}] }
            onPress={ props.onPress }
        >
            <Text style={ [TagStyles.text, { color: props.isSelected ==  true ? '#FFFFFF' : '#EE8B8B'}] }>{ props.label || 'placeholder' }</Text>
        </TouchableOpacity>
    );
}

export default Tag