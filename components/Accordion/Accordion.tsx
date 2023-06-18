import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { levelIndicatorStyles } from '../LevelIndicator.styles';
import { useEffect, useState } from 'react';
import { accordionStyles } from './Accordion.styles';
import DownArrow from '../Svg/DownArrow';
import IngredientCard from '../IngredientCard';
import UpArrow from '../Svg/UpArrow';

const Accordion = ( props ) => {
    const [item, setItem] = useState(props.items)

    useEffect(() => {
        console.log(props.items)
        console.log('it is the props items')
        setItem( props.items )
    }, [props.items])

    return(
        <View style={ accordionStyles.container }>
            <View
                style={ accordionStyles.container__accordianItemContainer }
            >
                <View 
                    style={ accordionStyles.container__accordianItemContainer_header }
                >
                        <View style={ { width: '85%', flexDirection: 'row', gap: 5, flexWrap: 'wrap' } }>
                            <Text style={ { color: '#D46139', fontSize: 16, fontWeight: 'bold' } }></Text>
                            <Text style={ { color: '#314B2F', fontSize: 16, fontWeight: '500' } }>{ item.title }</Text>
                        </View>
                </View>
                    <View style={ { height: 1, flex: 1, backgroundColor: '#D46139', marginTop: 10} }></View>
                    
                    <View style={ { marginTop: 20 } }>
                        <Text>
                            { item.description }
                        </Text>
                    </View>

                    <View style={ { marginTop: 20} }>
                        <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' } }>
                            <Text style={ { fontFamily: 'poppinsMed', fontSize: 16, color: '#D46139'} }>Required Ingredients</Text>
                            <Text style={ { fontFamily: 'poppinsReg', fontSize: 14, color: '#314B2F'} }>{ item.ingredients.length } items</Text>
                        </View>
                        <View style={ { gap: 10, marginTop: 10 } }>
                            {
                                item.ingredients.map( ( x, idx ) => (
                                    <IngredientCard
                                        key={ idx }
                                        name={ x.name }
                                        weight={ x.weight }
                                    />
                                ))
                            }
                        </View>
                    </View>
            </View>
        </View>
    );
}

export default Accordion