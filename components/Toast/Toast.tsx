import { Text, View } from 'react-native'
import { useEffect } from 'react';
import { toastStyles } from './Toast.styles';
import Success from '../Svg/Success';
import Error from '../Svg/Error';

const Toast = ( props ) => {
    // const [ showToast, setShowToast ] = useState( false )

    useEffect(() => {
        if( props.showToast ) {
            setTimeout(() => {
                props.hideToast(false)
            }, 3500)
        }
    }, [ props.showToast ])

    return(
        <View style={ 
                [ 
                    toastStyles.container, 
                    props.style,
                    props.type == 'error' 
                    ? toastStyles.containerError
                    : toastStyles.containerSuccess
                ] 
            }
        >
            {
                props.type == 'error'
                ? <Error/>
                : <Success/>
            }
            <Text
                style={{ 
                    color: '#FFFFFF',
                    fontFamily: 'poppinsMed' 
                }}
            >
                { props.message }
            </Text>
        </View>
    );
}

export default Toast