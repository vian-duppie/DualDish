import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default Done = (props) => (
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
            viewBox='0 0 24 24'
        >
            <Path
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.70711 14.2929L19 5L20.4142 6.41421L9.70711 17.1213L4 11.4142L5.41421 10L9.70711 14.2929Z" 
                fill="#70B8A9"
            />
        </Svg>
    </View>
)