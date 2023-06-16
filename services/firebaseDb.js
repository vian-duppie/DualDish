import { Timestamp, addDoc, setDoc, doc, getDocs, collection } from "firebase/firestore"
import { db } from "../firebase"

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

        const snapshot = await getDocs( collection( db, "competitions" ))

        snapshot.forEach( ( doc ) => {
            competitions.push( doc.data() )
        })

        return competitions
    } catch ( err ) {
        console.log(err)
        return
    }
}