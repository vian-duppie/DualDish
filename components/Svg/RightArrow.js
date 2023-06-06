import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default RightArrow = (props) => (
    <View
        style={[ 
            {
                alignSelf: 'center', 
            }, 
            props.styles
        ]}
        
    >
        <Svg 
            width={
                props.size < 24 || props.size == undefined 
                ? 24
                : props.size
            } 
            height={
                props.size < 24 || props.size == undefined 
                ? 24 
                : props.size
            } 
            fill="none" 
            viewBox='0 0 6 12'
        >
            <Path
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M5.04383 6L0 0.974524L0.978083 0L7 6L0.978083 12L0 11.0255L5.04383 6Z" 
                fill="#D46139"
            />
        </Svg>
    </View>
)
