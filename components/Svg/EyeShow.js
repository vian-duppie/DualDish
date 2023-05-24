import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { View } from 'react-native';

export default EyeShow = (props) => (
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
                fill="#151515"
                fillRule="evenodd"
                d="M12 4c2.728 0 5.336 1.43 7.766 3.781a23.31 23.31 0 0 1 2.24 2.515c.399.516.681.923.837 1.165l.344.539-.345.539c-.154.242-.437.649-.836 1.165-.66.857-1.41 1.713-2.24 2.515C17.336 18.569 14.728 20 12 20c-2.728 0-5.336-1.43-7.766-3.781a23.312 23.312 0 0 1-2.24-2.515 17.482 17.482 0 0 1-.836-1.165L.813 12l.345-.539c.155-.242.437-.649.836-1.165.66-.857 1.41-1.713 2.24-2.515C6.664 5.431 9.272 4 12 4Zm8.422 7.517a21.33 21.33 0 0 0-2.046-2.298C16.282 7.194 14.106 6 12 6 9.895 6 7.718 7.194 5.624 9.219A21.324 21.324 0 0 0 3.216 12a21.319 21.319 0 0 0 2.408 2.781C7.718 16.806 9.895 18 12 18c2.105 0 4.282-1.194 6.376-3.219A21.325 21.325 0 0 0 20.784 12c-.11-.152-.231-.314-.362-.483ZM8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>
)
  