import React, { useContext } from "react";
import { CardPokedex } from "../components/CardPokedex/CardPokedex";
import { GlobalContext } from "../Global/GlobalContext";
import Header from "../components/Header/Header";
import styled from "styled-components";

const BodyHomeConatiner = styled.div`
 min-height:90vh;
 width: 100vw;
 display: grid;
 justify-content: left;
 grid-template-columns: repeat(4, minmax(0, 350px));
 grid-template-rows: repeat(auto, 250px);
 margin: 15px;
 /* row-gap: 10px; */
 column-gap: 5px;
`

const PokedexList = () => {
  const { poke, setPoke } = useContext(GlobalContext);

  const removeItem = (itemToRemove) => {
    const position = poke.findIndex((item) => {
      return item.name === itemToRemove.name;
    });

    let newAdd = [...poke];

    if (newAdd[position].amount === 1) {
      newAdd.splice(position, 1);
    } else {
      newAdd[position].amount -= 1;
    }

    setPoke(newAdd);
  };

  const pokedexList =
    poke.length === 0
      ? <h1>Adicione Pokemons</h1>
      : poke.map((item) => {
        console.log(poke, 'estes pokes')
          return (
            <CardPokedex
              key={item.name}
              name={item.name}
              amount={item.amount}
              url={item.url}
              removeItem={() => removeItem(item)}
            />
          );
        });

  return (
    <div>
      <Header page="pokedex" />
      <BodyHomeConatiner>
      {pokedexList}
      </BodyHomeConatiner>
    </div>
  );
};

export default PokedexList;
