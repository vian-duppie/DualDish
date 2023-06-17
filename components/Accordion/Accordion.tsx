import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { levelIndicatorStyles } from '../LevelIndicator.styles';
import { useEffect, useState } from 'react';
import { accordionStyles } from './Accordion.styles';
import DownArrow from '../Svg/DownArrow';
import IngredientCard from '../IngredientCard';
import UpArrow from '../Svg/UpArrow';

const Accordion = ( props ) => {
    const [ openItem, setOpenItem ] = useState( null )
    const [ defaultOpen, setDefaultOpen ] = useState( false )
    const levels = [ 1, 2, 3 ]

    const changeItemState = (id: number) => {
        if (openItem == id) {
            setOpenItem(null)
        } else {
            setOpenItem( id )
        }
    } 

    useEffect(() => {
        if( props.items.length <= 1 ) {
            setOpenItem( 0 )
            setDefaultOpen( true )
        }
    }, [])

    return(
        <View style={ accordionStyles.container }>
            {
                props.items.map( ( x, idx ) => (
                    <View
                        key={ idx } 
                        style={ accordionStyles.container__accordianItemContainer }
                    >
                        <Pressable 
                            style={ accordionStyles.container__accordianItemContainer_header }
                            onPress={ () => changeItemState(idx) }
                        >
                                <View style={ { width: '85%', flexDirection: 'row', gap: 5, flexWrap: 'wrap' } }>
                                    <Text style={ { color: '#D46139', fontSize: 16, fontWeight: 'bold' } }>Round { idx + 1 }</Text>
                                    <Text style={ { color: '#314B2F', fontSize: 16, fontWeight: '500' } }>- { x.title }</Text>
                                </View>
                                <View style={ { width: '10%' } }>
                                    {
                                        !defaultOpen && (
                                            openItem == idx 
                                            ? <UpArrow/>
                                            : <DownArrow/>
                                        )
                                    }
                                </View>
                        </Pressable>

                        {
                            defaultOpen
                            ? 
                                <>
                                    <View style={ { height: 1, flex: 1, backgroundColor: '#D46139', marginTop: 10} }></View>
                                    
                                    <View style={ { marginTop: 20 } }>
                                        <Text>
                                            { x.description }
                                        </Text>
                                    </View>

                                    <View style={ { marginTop: 20} }>
                                        <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' } }>
                                            <Text style={ { fontFamily: 'poppinsMed', fontSize: 16, color: '#D46139'} }>Required Ingredients</Text>
                                            <Text style={ { fontFamily: 'poppinsReg', fontSize: 14, color: '#314B2F'} }>{ x.ingredients.length } items</Text>
                                        </View>
                                        <View style={ { gap: 10, marginTop: 10 } }>
                                            {
                                                x.ingredients.map( ( x, idx ) => (
                                                    <IngredientCard
                                                        key={ idx }
                                                        name={ x.name }
                                                        weight={ x.weight }
                                                    />
                                                ))
                                            }
                                        </View>
                                    </View>
                                </>
                            :   openItem == idx
                                &&
                                <>
                                    <View style={ { height: 1, flex: 1, backgroundColor: '#D46139', marginTop: 10} }></View>

                                    <View style={ { marginTop: 20 } }>
                                        <Text>
                                            { x.description }
                                        </Text>
                                    </View>

                                    <View style={ { marginTop: 20} }>
                                        <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' } }>
                                            <Text style={ { fontFamily: 'poppinsMed', fontSize: 16, color: '#D46139'} }>Required Ingredients</Text>
                                            <Text style={ { fontFamily: 'poppinsReg', fontSize: 14, color: '#314B2F'} }>{ x.ingredients.length } items</Text>
                                        </View>
                                        <View style={ { gap: 10, marginTop: 10 } }>
                                            {
                                                x.ingredients.map( ( x, idx ) => (
                                                    <IngredientCard
                                                        key={ idx }
                                                        name={ x.name }
                                                        weight={ x.weight }
                                                    />
                                                ))
                                            }
                                        </View>
                                    </View>
                                </>
                        }

                        
                    </View>
                ))
            }
        </View>
    );
}

export default Accordion