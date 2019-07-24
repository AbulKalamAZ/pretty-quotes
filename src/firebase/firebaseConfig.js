import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


//Firebase configaration 
const firebaseConfig = {
    apiKey: "AIzaSyBklbdkoLD8yVhSCNm4w5Wk7RIJ2Ia7Zq0",
    authDomain: "beautiful-quote.firebaseapp.com",
    databaseURL: "https://beautiful-quote.firebaseio.com",
    projectId: "beautiful-quote",
    storageBucket: "beautiful-quote.appspot.com",
    messagingSenderId: "815766710846",
    appId: "1:815766710846:web:7c299cbebd3c09a8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

