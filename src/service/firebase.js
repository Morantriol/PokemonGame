import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAWKQZu5CTBFoVaw0-6Dnpa86x32JzmbR4",
  authDomain: "pokemon-game-71d31.firebaseapp.com",
  databaseURL: "https://pokemon-game-71d31-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-71d31",
  storageBucket: "pokemon-game-71d31.appspot.com",
  messagingSenderId: "744823942801",
  appId: "1:744823942801:web:d6c44ae6c1201e29789930",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;