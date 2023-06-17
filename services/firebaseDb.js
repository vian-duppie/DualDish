import { Timestamp, addDoc, setDoc, doc, getDocs, collection, where, getDoc, updateDoc, arrayUnion, FieldValue, arrayRemove } from "firebase/firestore"
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
            round_challenges: [
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
                },
                {
                    title: "Fusion Taco",
                    description: "Get creative with a fusion taco that combines flavors from different cuisines! Use any ingredients of your choice, but make sure it's even better than your classic taco if you want to advance to the final round.",
                    ingredients: [
                        {
                            name: 'shrimp',
                            weight: '150g'
                        },
                        {
                            name: 'mango',
                            weight: '50g'
                        },
                    ]
                }
            ]
        })
    } catch ( err ) {
        console.log("Something went wrong here: " + err)
    }
}

export const getAllCompetitions = async () => {
    try {
        let competitions = []

        const snapshot = await getDocs( collection(db, 'competitions' ) )

        snapshot.forEach( ( doc ) => {
            competitions.push({
                ...doc.data(),
                id: doc.id
            })
        })

        return competitions
    } catch ( err ) {
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

    try {
        const snapshot = await getDoc( docRef )
        if (snapshot.exists()) {
            const userEnteredCompetition = snapshot.data().entries.includes(competitionId)

            if ( userEnteredCompetition ) {
                return 'You already entered'
            } else {
                let updateResult = await updateDoc( docRef, {
                    entries: arrayUnion(competitionId)
                })

                const createDocRef = await addDoc( 
                    collection( db, 'entries' ),
                    {
                        ...entry,
                        createAt: Timestamp.now(),
                        dish_votes: []
                    }
                )

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
