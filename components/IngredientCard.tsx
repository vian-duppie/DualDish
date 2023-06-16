import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { levelIndicatorStyles } from './LevelIndicator.styles';
import { useEffect } from 'react';
import { ingredientCardStyles } from './IngredientCard.styles';

const IngredientCard = ( props ) => {
    const levels = [ 1, 2, 3, 4, 5, 6 ]

    return(
        <View style={ ingredientCardStyles.container }>
            <Text style={ { color: '#314B2F', fontSize: 16, fontFamily: 'poppinsMed' } }>Beef</Text>
            <Text style={ { color: '#D46139', fontSize: 14, fontFamily: 'poppinsReg' } }>200g</Text>
        </View>
    );
}

export default IngredientCard