import { Timestamp, addDoc, setDoc, doc, getDocs, collection, where, getDoc, updateDoc, arrayUnion, FieldValue, arrayRemove, deleteDoc, query } from "firebase/firestore"
import { db } from "../firebase"
import { getStorage, ref, StorageReference, uploadBytes, getDownloadURL } from 'firebase/storage'

export {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
}

export const createUserInDb = async ( username, email, uid ) => {
    try {
        const docRef = await setDoc( doc( db, "users", uid ), {
            username,
            email,
            phone: '',
            level: 0,
            competitions_won: 0,
            badges: [],
            entries: [],
            createdAt: Timestamp.now(),
        })
    } catch ( err ) {
        console.log("Some error" + err)

    }
}

export const addCompetitionToCollection = async( competition ) => {
    try {
        const docRef = await addDoc( collection( db, "competitions" ), {
            createdAt: Timestamp.now(),
            title: "Taco Takedown",
            category: "Mexican",
            description: "Get ready for a fiesta with our Taco Takedown competition! You have two days to create the ultimate taco using any ingredients of your choice. But be warned - each round gets more challenging than the last!",
            entries_allowed: 15,
            time_limit: 2,
            rounds: 2,
            difficulty: 3,
            entries: [],
            challenge: 
                {
                    title: "Classic Taco",
                    description: "Create a classic taco that will make our judges want more! Use any ingredients of your choice, but make sure it is delicious enough to advance to the next round",
                    ingredients: [
                        {
                            name: 'beef',
                            weight: '200g'
                        },
                                                {
                            name: 'lettuce',
                            weight: '100g'
                        },
                    ]
                }
        })
    } catch ( err ) {
        console.log("Something went wrong here: " + err)
    }
}

export const getAllCompetitions = async () => {
    try {
        const competitions = []
        const currentDate = new Date();


        const snapshot = await getDocs( collection(db, 'competitions' ) )
        await Promise.all (
            snapshot.docs.map( async ( x ) => {
                try {
                    console.log(x.data())
                    const createdAt = x.data().createdAt.toDate();
                    const timeLimit = x.data().time_limit;
                    const deadline = new Date(createdAt);
                    deadline.setDate(createdAt.getDate() + timeLimit);
    
                    let isCompOpen;
    
                    if(
                        currentDate < deadline
                        &&
                        x.data().entries.length < x.data().entries_allowed    
                    ) {
                        isCompOpen = true
                    } else {
                        isCompOpen = false
                    }
            
                    // console.log('createdAt:', createdAt);
                    // console.log('timeLimit:', timeLimit);
                    // console.log('deadline:', deadline);
                    competitions.push({
                        ...x.data(),
                        id: x.id,
                        competition_open: isCompOpen
                    })
        
                    const docRef = doc( 
                        collection( db, 'competitions'),
                        x.id
                    )
    
                    if (!isCompOpen) {
                        const entryPromises = x.data().entries.map(async (entryId, index) => {
                            if (index < 3) {
                              const entryDocRef = doc(collection(db, 'entries'), entryId);
                              await updateDoc(entryDocRef, {
                                competition_finish_position: index + 1,
                              });
                            }
                        });
                    }
    
                    await updateDoc( docRef, {
                        competition_open: isCompOpen, 
                        test: 'sfg'
                    })
                } catch ( err ) {
                    console.log( "ERROR" )
                    console.log( err )
                }
            })
        )
    
        return competitions
    } catch ( err ) {
        console.log("ERR")
        console.log(err)
        return err
    }
}

export const getAllEntries = async () => {
    try {
        let entries = []

        const snapshot = await getDocs( collection( db, 'entries' ) )

        snapshot.forEach( ( doc ) => {
            entries.push({
                ...doc.data(),
                id: doc.id
            })
        })

        return entries
    } catch ( err ) {
        console.log( err )
        return err
    }
}

export const addEntry = async ( entry, userId, competitionId ) => {
    const docRef = doc( 
        collection( db, 'users'),
        userId
    )

    const compDocRef = doc(
        collection( db, 'competitions' ),
        competitionId
    )

    try {
        const snapshot = await getDoc( docRef )
        const compSnapshot = await getDoc( compDocRef )
        console.log(competitionId)
        if (snapshot.exists()) {
            const userEnteredCompetition = snapshot.data().entries.includes(competitionId)

            if ( userEnteredCompetition ) {
                console.log('hey you entered')
                return 'You already entered'
            } else {
                await updateDoc( docRef, {
                    entries: arrayUnion(competitionId)
                })

                const createDocRef = await addDoc( 
                    collection( db, 'entries' ),
                    {
                        ...entry,
                        createAt: Timestamp.now(),
                        dish_votes: [],
                        dish_owner_username: snapshot.data().username
                    }
                )

                await updateDoc( compDocRef, {
                    entries: arrayUnion( createDocRef.id )
                })

                return 'Entry Added'
            }
        } else {
            console.log("Document not found");
        }
    } catch ( err ) {
        console.log(err)
    }
}

export const likeEntry = async ( entryId, userId ) => {
    try {
        const docRef = doc(
            collection( db, 'entries'),
            entryId
        )
    
        await updateDoc( docRef, {
            dish_votes: arrayUnion(userId)
        })

        // Fetch the updated document
        const updatedDoc = await getDoc(docRef);
        if (updatedDoc.exists()) {
            return {
                ...updatedDoc.data(),
                id: updatedDoc.id
            }
        } else {
            console.log('Document not found');
            return null;
        }
    } catch ( err ) {
        console.log( err )
    }
}

export const removeLikeEntry = async ( entryId, userId ) => {
    try {
        console.log("USERID: " + userId)
        console.log("ENTRYID: " + entryId)
        const docRef = doc(
            collection( db, 'entries'),
            entryId
        )
    
        await updateDoc( docRef, {
            dish_votes: arrayRemove(userId)
        })

        // Fetch the updated document
        const updatedDoc = await getDoc(docRef);
        if (updatedDoc.exists()) {
            return {
                ...updatedDoc.data(),
                id: updatedDoc.id
            }
        } else {
            console.log('Document not found');
            return null;
        }
    } catch ( err ) {
        console.log( "ERROR: " + err )
    }
}


export const deleteAllCompetitions = async () => {
    const competitionsRef = collection(db, 'competitions');
  
    try {
        const querySnapshot = await getDocs(competitionsRef)
        const documents = querySnapshot.docs
    
        for (let i = 1; i < documents.length; i++) {
            const docRef = doc(db, 'competitions', documents[i].id)
            await deleteDoc(docRef)
        }
    
        return 'All competitions deleted except the first one'
    } catch (err) {
      console.log(err);
    }
    }

export const getCompetition = async ( competitionId ) => {
    const docRef = doc(
        collection( db, 'competitions' ),   
        competitionId
    )

    try {
        let snapshot = await getDoc( docRef )

        if( snapshot.exists() ) {
            const competitionData = snapshot.data()
            const entryIds = competitionData.entries

            const entryPromises = entryIds.map(async (entryId) => {
                const entryDocRef = doc( collection(db, 'entries'), entryId )
                const entrySnapshot = await getDoc(entryDocRef)

                if ( entrySnapshot.exists() ) {
                    const entryData = entrySnapshot.data()
                    if (entryData && entryData.dish_votes) {
                        console.log('hey this is the entries')
                        return entryData
                        // return entryData;
                    }
                    // console.log(snapshot.data())
                }
                return null
            })

            const entries = await Promise.all(entryPromises)

            const sortedEntries = entries
            .filter((entry) => entry !== null)
            .sort((a, b) => b.dish_votes.length - a.dish_votes.length);
    
            // Rearrange the top three entries
            const topThreeEntries = [];
            if (sortedEntries.length > 0) {
                topThreeEntries.push(sortedEntries[1]); // Second most votes
            }
            if (sortedEntries.length > 1) {
                topThreeEntries.push(sortedEntries[0]); // Most votes
            }
            if (sortedEntries.length > 2) {
                topThreeEntries.push(sortedEntries[2]); // Third most votes
            }
            // console.log('what')

            // console.log("This will return the comp data")

            // console.log(snapshot.data())
            return {
                competition: competitionData,
                leaderboard: topThreeEntries
            }
        } else {
            return 'Document does not exist'
        }
    } catch ( err ) {
        console.log( err )
    }
}

export const getAllUserEntries = async ( dishOwner ) => {
    try {
        let entries = []
    
        const snapshot = await getDocs( 
            query(
                collection( db, 'entries' ),
                where('dish_owner', '==', dishOwner)
            )
        )
    
        snapshot.forEach( ( doc ) => {
            entries.push({
                ...doc.data(),
                id: doc.id
            })
        })
    
        return entries
    } catch ( err ) {
        console.log( err )
        return err
    }
}


//   export const getCompetition = async ( competitionId ) => {
//     const docRef = doc(
//         collection( db, 'competitions' ),   
//         competitionId
//     )

//     try {
//         let snapshot = await getDoc( docRef )

//         if( snapshot.exists() ) {
//             console.log(snapshot.data())
//         } else {
//             return 'Document does not exist'
//         }
//     } catch ( err ) {
//         console.log( err )
//     }
//   }


export const addCompetition = async ( data ) => {
    try {
        const docRef = await addDoc(collection(db, 'competitions'), {
            ...data,
            createdAt: Timestamp.now()
        });
        // console.log('New competition document created with ID:', docRef.id);
        console.log('New competition document created with ID:', data);
        // return docRef.id;
        return true
    } catch (error) {
        console.error('Error creating competition document:', error);
        return false
    }
    
}