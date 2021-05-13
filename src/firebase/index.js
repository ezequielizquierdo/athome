import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBrCLSljZBAyFhbPOZszXYcBe92PWOKEzY",
    authDomain: "athome-database.firebaseapp.com",
    projectId: "athome-database",
    storageBucket: "athome-database.appspot.com",
    messagingSenderId: "588345702975",
    appId: "1:588345702975:web:04a73298ebed596336d68a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();

export const productCollection = database.collection("menu");