/* IMPORT auth instance for my app */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase"
// import { Alert } from "react-native"
import { createUserInDb } from "./firebaseDb"

export const registerNewUser = ( username, email, password ) => {
    return new Promise( (resolve, reject ) => {
        createUserWithEmailAndPassword( auth, email, password )
        .then( async  ( userCredential ) => {
            const user = userCredential.user

            updateAuthProfile( username )

            await createUserInDb( username, email, user.uid)
            resolve()
        })
        .catch( ( err ) => {
            console.log(err)
            reject(err.code)
        })
    })
}

export const signInUser = async ( email, password ) => {
        await signInWithEmailAndPassword( auth, email, password )
        .then( ( userCredential ) => {
            const user = userCredential.user

            console.log("User signed in: " + user.email)
        })
        .catch( ( err ) => {
            const errorCode = err.code
            const errorMessage = err.message
            console.log( "This is the error: " + errorCode + ": " + errorMessage)
        })
}

export const signOutUser = () => {
    signOut( auth )
    .then( () => {
        console.log("Log Out Success")
    })
    .catch( ( err ) => {
        console.log(err.errorMessage)
    })
}

const updateAuthProfile = ( username ) => {
    updateProfile( auth.currentUser, {
        displayName: username,
        photoURL: 'https://example.com/jane-q-user/profile.jpg'
    })
}

export const getCurrentUser = () => {
    return auth.currentUser
}