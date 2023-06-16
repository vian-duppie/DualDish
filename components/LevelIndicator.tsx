import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { levelIndicatorStyles } from './LevelIndicator.styles';
import { useEffect } from 'react';

const LevelIndicator = ( props ) => {
    const levels = [ 1, 2, 3, 4, 5, 6 ]

    return(
        <View style={ levelIndicatorStyles.container }>
            {
                levels.map( ( x, idx ) => (
                    <View 
                        key={ idx }
                        style={ 
                                { 
                                    height: 22,
                                    flex: 1,
                                    backgroundColor: '#D46139',
                                    opacity:  idx < (props.level || 1) ? 1 : 0.5,
                                    borderRadius: 20
                                } 
                            }
                    >
                    </View>
                ))
            }
        </View>
    );
}

export default LevelIndicator