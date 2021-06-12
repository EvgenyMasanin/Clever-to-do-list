import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDD-ppPglGnf-kl5fmMrDFRj96L_7paZvQ",
    authDomain: "clever-to-do-list-e5328.firebaseapp.com",
    databaseURL: 'https://clever-to-do-list-e5328.firebaseapp.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;