// import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import PokemonCard from "../../components/PokemonCard";
import POKEMONS from "../../components/PokemonCard/POKEMONS.js";

import s from "./style.module.css";

const GamePage = ( {isActive} ) => {
  // const history = useHistory();
  const [pokemon, setPokemons] = useState(JSON.parse(JSON.stringify(POKEMONS)));

  const handleClick = (id) => {
    const newArray = pokemon.filter(item => {
      if (item.id === id) {
        item.active = true;
      }
      return true;
    })

    setPokemons(newArray)
  };

  return (
    <>
      {/* <div className={s.gameBlock}>This is Game Page!</div>
      <button className={s.gameBtn} onClick={handleClick}>Return on Home Page</button> */}
      <div className={s.flex}>
          {POKEMONS.map((item) => (
            <PokemonCard
              onClick={handleClick}
              key={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
              id={item.id}
            />
          ))}
        </div>
    </>
  );
};

export default GamePage;
