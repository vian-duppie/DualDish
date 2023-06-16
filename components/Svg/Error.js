import Svg, { Path } from 'react-native-svg';
import React from 'react';
import {  View } from 'react-native';

export default ErrorIcon = (props) => (
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
                d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.70711 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70711L15.2929 7.29289L12 10.5858L8.70711 7.29289L7.29289 8.70711L10.5858 12L7.29289 15.2929L8.70711 16.7071Z" 
                fill="white"
            />
        </Svg>
    </View>
)