import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQKVOAvzB_jm39Gl1cIdrSpqQaBBIstuQ",
    authDomain: "movie-site-e4a77.firebaseapp.com",
    databaseURL: "https://movie-site-e4a77.firebaseio.com",
    projectId: "movie-site-e4a77",
    storageBucket: "movie-site-e4a77.appspot.com",
    messagingSenderId: "200269151206",
    appId: "1:200269151206:web:92135888079e55fe9a3427",
    measurementId: "G-KD4PGCJFSF"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;