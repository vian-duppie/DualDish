import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default Close = (props) => (
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
                    props.size < 20 || props.size == undefined 
                    ? 20 
                    : props.size
                } 
                height={
                    props.size < 20 || props.size == undefined 
                    ? 20 
                    : props.size
                } 
                fill="none" 
                viewBox='0 0 20 20'
            >
                <Path fill="#314B2F" d="m15.94 0 3.981 3.016L4.494 19.97.512 16.953z" />
                <Path fill="#314B2F" d="M3.847.461 0 3.62 16.153 20 20 16.843z" />
            </Svg>
        </View>
    </TouchableOpacity>
)