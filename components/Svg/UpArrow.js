import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default UpArrow = (props) => (
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
            viewBox='0 0 14 10'
        >
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd" 
                d="M12.8631 8L14 6.88219L7 -1.7306e-07L0 6.88219L1.13694 8L7 2.23562L12.8631 8Z" 
                fill="#D46139"
            />
        </Svg>
    </View>
)