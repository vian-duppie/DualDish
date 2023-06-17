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
            <Path d="M22.9738 2.94762C20.1727 -0.22624 16.9292 1.11234 14.9208 2.5279C13.786 3.32775 12.214 3.32776 11.0791 2.52791C9.07076 1.11236 5.82726 -0.226205 3.02623 2.94762C-3.62298 10.4818 7.77985 25 13 25C18.2202 25 29.623 10.4818 22.9738 2.94762Z" stroke="black" stroke-linecap="round"/>
        </Svg>
    </View>
)
