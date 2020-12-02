import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQKVOAvzB_jm39Gl1cIdrSpqQaBBIstuQ",
    authDomain: "movie-site-e4a77.firebaseapp.com",
    databaseURL: "https://movie-site-e4a77.firebaseio.com",
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database()