import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default DownArrow = (props) => (
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
                d="M12.8631 0L14 1.11781L7 8L0 1.11781L1.13694 0L7 5.76438L12.8631 0Z" 
                fill="#D46139"
            />
        </Svg>
    </View>
)