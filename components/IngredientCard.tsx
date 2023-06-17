import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { levelIndicatorStyles } from './LevelIndicator.styles';
import { useEffect } from 'react';
import { ingredientCardStyles } from './IngredientCard.styles';

const IngredientCard = ( props ) => {

    return(
        <View style={[ ingredientCardStyles.container, { backgroundColor: props.background == 'gray' ? '#F4F4F6' : '#FFFFFF'} ]}>
            <View style={{ flex: 1 }}>
                <Text style={ { color: '#314B2F', fontSize: 16, fontFamily: 'poppinsMed', flexWrap: 'wrap' } }>{ props.name }</Text>
            </View>
            <Text style={ { color: '#D46139', fontSize: 14, fontFamily: 'poppinsReg' } }>{ props.weight }</Text>
        </View>
    );
}

export default IngredientCard