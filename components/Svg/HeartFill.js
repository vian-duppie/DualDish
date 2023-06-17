import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default HeartOutline = (props) => (
    <View
        style={[ 
            props.styles
        ]}
        
    >
        <Svg 
            width={
                props.size < 23 || props.size == undefined 
                ? 23 
                : props.size
            } 
            height={
                props.size < 23 || props.size == undefined 
                ? 23 
                : props.size
            } 
            fill="none" 
            viewBox='0 0 26 26'
        >
            <Path d="M21.9738 1.94762C19.1727 -1.22624 15.9292 0.11234 13.9208 1.5279C12.786 2.32775 11.214 2.32776 10.0791 1.52791C8.07076 0.112357 4.82726 -1.2262 2.02623 1.94762C-4.62298 9.48182 6.77985 24 12 24C17.2202 24 28.623 9.48182 21.9738 1.94762Z" fill="#9C262E"/>
        </Svg>
    </View>
)