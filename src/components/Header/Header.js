import React from "react";
import { HeaderContainer, Return, GoHomeButton } from "./styled";
import { useParams, useHistory } from "react-router-dom";

const Header = (props) => {
  const pathParams = useParams();

  let history = useHistory();

  const handlePageTransition = (parameter) => {
    history.push(parameter);
  };

  function renderPokemoNamewithFirstLetterCapitalized() {
    const captalizedWord =
      props.pokemonDetails.name.charAt(0).toUpperCase() +
      props.pokemonDetails.name.slice(1);
    return captalizedWord;
  }

  const hender = () => {
    switch (props.page) {
      case "home":
        return (
          <>
            <button onClick={() => handlePageTransition("/pokedex/list")}>
              Ver POKEDEX
            </button>

            <h1>Lista de Pokemons</h1>
          </>
        );
      case "pokedex":
        return (
          <>
            <h1>Pokedex</h1>
            <GoHomeButton onClick={() => history.goBack()}>
              <p>Voltar para a lista de pokemons</p>
            </GoHomeButton>
          </>
        );
      case "pokemonDetails":
        return (
          <>
            <Return onClick={() => history.goBack()}>
              <p>Voltar</p>
            </Return>

            <h1>{renderPokemoNamewithFirstLetterCapitalized()}</h1>
            <button onClick={() => props.addToPokedex()}>
              Adicionar/Remover da Pokedex
            </button>
          </>
        );

      default:
        return <h1>Sorry...this should not happen. :(</h1>;
    }
  };

  return <HeaderContainer>{hender()}</HeaderContainer>;
};

export default Header;
