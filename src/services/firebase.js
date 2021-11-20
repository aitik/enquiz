import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAtLFZ4keJEr3RUg3HyLepgglYdVHzQ7Ik",
    authDomain: "enquiz-cd73a.firebaseapp.com",
    projectId: "enquiz-cd73a",
    storageBucket: "enquiz-cd73a.appspot.com",
    messagingSenderId: "1070296627238",
    appId: "1:1070296627238:web:f89d3212d70d1eb5bacee7",
    measurementId: "G-SQZZ7MLF8B"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;

