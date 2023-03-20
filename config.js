import firebase from 'firebase';
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD9rNEBLJS9c-VGawF9vdt84MB50u_8Bt4",
    authDomain: "elibrary1-912f8.firebaseapp.com",
    projectId: "elibrary1-912f8",
    storageBucket: "elibrary1-912f8.appspot.com",
    messagingSenderId: "502952928769",
    appId: "1:502952928769:web:e832008a8bfb1b82378200"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();