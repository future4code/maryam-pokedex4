import React, { useContext } from "react";
import styled from "styled-components";
import { CardHome } from "../components/CardHome/CardHome";
import Header from "../components/Header/Header";
import { GlobalContext } from "../Global/GlobalContext";
import { usePokemonList } from "../hooks/usePokemonList";

const BodyHomeConatiner = styled.div`
  box-sizing: border-box;
  overflow: scroll;
  min-height: 90vh;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(0, 250px));
  grid-template-rows: repeat(5, 350px);
  padding: 15px;
  row-gap: 10px;
  column-gap: 10px;
`;

const Home = () => {
  const [pokemonsList, total, pages, loading, currentPage] = usePokemonList();

  const { poke, setPoke } = useContext(GlobalContext);

  const addToPokedex = (itemToAdd) => {
    const position = poke.findIndex((item) => {
      return item.name === itemToAdd.name;
    });

    const newAdd = [...poke];

    if (position === -1) {
      newAdd.push({ ...itemToAdd, amount: 1 });
      alert("Pokemon adicionado!");
    } else {
      alert("Já adicionado!");
    }
    setPoke(newAdd);
  };

  const pokeList = loading ? (
    <h1>Loading...</h1>
  ) : (
    pokemonsList[currentPage].map((eachPokemon) => {
      return (
        <CardHome
          pokemonKey={eachPokemon.name}
          name={eachPokemon.name}
          url={eachPokemon.url}
          onClickAdd={() => addToPokedex(eachPokemon)}
        />
      );
    })
  );

  return (
    <div>
      <Header page="home" />
      <BodyHomeConatiner>
        {pokeList}
      </BodyHomeConatiner>
    </div>
  );
};

export default Home;
