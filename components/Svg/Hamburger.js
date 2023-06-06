import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default Hamburger = (props) => (
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
                    fill="#314B2F"
                    fillRule="evenodd"
                    d="M26.583 8.458V6.042H2.417v2.416h24.166Zm0 4.834v2.416H2.417v-2.416h24.166Zm0 7.25v2.416H2.417v-2.416h24.166Z"
                    clipRule="evenodd"
                />
            </Svg>
        </View>
    </TouchableOpacity>
)
  