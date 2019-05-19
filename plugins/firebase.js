import firebase from 'firebase'
require('firebase/firestore')
import { ENV } from "../environments";

const config = {
   apiKey: ENV.firebaseApiKey,
   authDomain: ENV.firebaseAuthDomain,
   databaseURL: ENV.firebaseDatabaseURL,
   storageBucket: ENV.firebaseStorageBucket,
   projectId: ENV.firebaseProjectID,
   messagingSenderId: ENV.firebaseMessagingSenderID
};

firebase.initializeApp(config);
const db = firebase.firestore()

export { db }
export default firebase;