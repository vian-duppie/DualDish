// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFcOzsFB6bs2r6W9_0pw-WDINiJy0quGw",
    authDomain: "dualdish-c01ec.firebaseapp.com",
    projectId: "dualdish-c01ec",
    storageBucket: "dualdish-c01ec.appspot.com",
    messagingSenderId: "96942203616",
    appId: "1:96942203616:web:26d4d5321c7f6b47f0a685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)