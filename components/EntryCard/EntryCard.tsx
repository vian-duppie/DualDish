import { Text, StyleSheet, View, Pressable, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react';
import { entryCardStyles } from './EntryCard.styles';
import HeartFill from '../Svg/HeartFill';
import { getCurrentUser } from '../../services/firebaseAuth';
import HeartOutline from '../Svg/HeartOutline';
import { likeEntry, removeLikeEntry } from '../../services/firebaseDb';

const EntryCard = ( { entry } ) => {
    const [tapCount, setTapCount] = useState(0)
    const [userVoted, setUserVoted] = useState( false )
    const [userId, setUserId] = useState('')
    const [entryData, setEntryData ] = useState( entry )

    useEffect(() => {
        setEntryData( entry )
        // console.log("FIRST TIME LOADING")
        let userId = getCurrentUser().uid
        setUserId( getCurrentUser().uid )
        if( entry.dish_votes.includes(userId) ) {
            setUserVoted( true )
        } else {
            setUserVoted( false )
        }
    }, [])

    useEffect(() => {
        let timer;

        if (tapCount === 1) {
            timer = setTimeout(() => {
                if ( tapCount == 1 ) {
                    console.log( 'single' )
                    // TODO: Add a singleTap Function
                } 
                setTapCount(0);
            }, 250); 
        } else if (tapCount === 2) {
            if ( userVoted ) {
                removeLike()
                setUserVoted( false )
            } else {
                likeUserEntry()
                setUserVoted( true )
            }
            setTapCount(0);
        }
    
        return () => {
            clearTimeout(timer); 
        };
    }, [tapCount]);

    const likeUserEntry = async () => {
        try {
            let result = await likeEntry( entryData.id, userId )
            setEntryData( result )
        } catch ( err ) {
            console.log( err )
        }
    }

    const removeLike = async () => {
        try {
            let result = await removeLikeEntry( entryData.id, userId )
            setEntryData( result )
        } catch ( err ) {
            console.log( err )
        }
    }
  
    const handlePress = () => {
      setTapCount(prevCount => prevCount + 1); // Increment the tap count
    };

    return(
        <Pressable style={[ entryCardStyles.container ]} onPress={ handlePress }>
                {/* Image */}
                <View style={{ aspectRatio: 1, padding: 10 }}>
                    <Image
                        style={{ width: '100%', height: '100%', aspectRatio: 1,borderRadius: 1000 }}
                        source={{ uri: entryData.dish_image }}
                        resizeMode='contain'
                    />
                </View>

                <View style={{ gap: 10 }}>
                    {/* Name */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={ entryCardStyles.entryContainer_title }>{ entryData.dish_title }</Text>
                    </View>

                    {/* Category */}
                    <View style={{ alignItems: 'center'}}>
                        <Text style={ entryCardStyles.entryContainer_category }>{ entryData.dish_category }</Text>
                    </View>

                    {/* Username */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={ entryCardStyles.entryContainer_username }>{ entryData.dish_owner_username }</Text>
                    </View>
                </View>


                {/* Likes */}
                <View style={{
                    position: 'absolute', 
                    right: 5, 
                    top: 5, 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    {
                        userVoted
                        ? <HeartFill/>
                        : <HeartOutline/>
                    }
                    <Text>{ entryData.dish_votes.length }</Text>
                </View>
        </Pressable>
    );
}

export default EntryCard