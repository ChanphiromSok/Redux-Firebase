import firebase from "firebase/app";
// import firebase from "firebase"
import "firebase/database"
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAaMy7FwEhehsx69kNXk5-NxpBD4-fhjUM",
    authDomain: "fir-811ee.firebaseapp.com",
    databaseURL: "https://fir-811ee.firebaseio.com",
    projectId: "fir-811ee",
    storageBucket: "fir-811ee.appspot.com",
    messagingSenderId: "507353708335",
    appId: "1:507353708335:web:6fc41b88a01e8eea3dd3da",
    measurementId: "G-4C2E1LBSM6"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
export default firebase;