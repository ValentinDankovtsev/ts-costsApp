

import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';
import "firebase/firestore";

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
};

export const db = firebase.firestore(Firebase)




export const auth = firebase.auth();


export default Firebase;