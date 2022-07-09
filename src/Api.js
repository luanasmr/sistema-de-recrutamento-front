import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from "./firebaseConfig.js";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const bd = firebaseApp.firestore();

export default {

    googlelogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}  