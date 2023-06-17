import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default CloseSmall = (props) => (
    <TouchableOpacity
        onPress={ props.onPress }
    >
        <View
            style={[ 
                {
                    alignSelf: 'flex-start', 
                }, 
                props.styles
            ]}
            
        >
            <Svg 
                width={
                    props.size < 18 || props.size == undefined 
                    ? 18 
                    : props.size
                } 
                height={
                    props.size < 18 || props.size == undefined 
                    ? 18 
                    : props.size
                } 
                fill="none" 
                viewBox='0 0 27 27'
            >
                <Path d="M2 2L26 26" stroke="#D46139" stroke-width="3.69231" stroke-linecap="round"/>
                <Path d="M26 2L2 26" stroke="#D46139" stroke-width="3.69231" stroke-linecap="round"/>
            </Svg>
        </View>
    </TouchableOpacity>
)

