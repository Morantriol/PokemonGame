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

class Firebase{
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (callback) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      callback(snapshot.val());
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
    }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (newPokemon, callback) => {
    // const newPokemon = Object.entries(pokemon)[Math.floor(Math.random() * 5)][1];
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(newPokemon).then(() => callback())
  }
}

export default Firebase;