import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
// require('dotenv').config()

// console.log(process.env);
const env = process.env
console.log(env);
const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDD-ppPglGnf-kl5fmMrDFRj96L_7paZvQ",
    // authDomain: "clever-to-do-list-e5328.firebaseapp.com",
    // databaseURL: 'https://clever-to-do-list-e5328.firebaseapp.com'

    
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DATABASE_URL,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_APP_ID
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;