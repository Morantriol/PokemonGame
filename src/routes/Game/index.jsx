import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase"

import s from "./style.module.css";


const GamePage = () => {
  const [pokemon, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const handleClickButton = (keyId) => {
    const keyId = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + keyId).update({ active: !keyId.active });
    console.log(keyId)
  };

  const clickPokemonCard = (id, key) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id=== id) {
            pokemon.active = true;
            handleClickButton(key)
          };
          
          acc[item[0]] = pokemon;
  
          return acc;
      }, {});
  })};

  return (
      <div className={s.flex}>
        {
          Object.entries(pokemon).map(([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={key}
              keyId = {key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              active={active}
              clickPokemonCard= {() => clickPokemonCard(id, key)}
            />
          ))
        }
      </div>
  );
};

export default GamePage;
