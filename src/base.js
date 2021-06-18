import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDD-ppPglGnf-kl5fmMrDFRj96L_7paZvQ",
    // authDomain: "clever-to-do-list-e5328.firebaseapp.com",
    // databaseURL: 'https://clever-to-do-list-e5328.firebaseapp.com'

    
    apiKey: "AIzaSyDD-ppPglGnf-kl5fmMrDFRj96L_7paZvQ",
    authDomain: "clever-to-do-list-e5328.firebaseapp.com",
    databaseURL: "https://clever-to-do-list-e5328-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clever-to-do-list-e5328",
    storageBucket: "clever-to-do-list-e5328.appspot.com",
    messagingSenderId: "334477027612",
    appId: "1:334477027612:web:a255cc289814ec50a5b2d9"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;