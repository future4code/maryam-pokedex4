import React from "react";
import { useHistory } from "react-router";
import { goToPage } from "../../Router/coordinator";
import { CardHomeContainer, ContainerNamePicture, HomeButtons } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";

export const CardHome = (props) => {
  const history = useHistory();

  const pokemon = useRequestData(props.url);

  return (
    <CardHomeContainer key={props.pokemonKey}>
      <ContainerNamePicture>
        <h5>{props.name.toUpperCase()}</h5>
        <div>
          <img
            src={
              pokemon &&
              pokemon.sprites &&
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt=""
          />
        </div>
      </ContainerNamePicture>
      <HomeButtons>
        <button onClick={props.onClickAdd}>Adicionar</button>
        <button
          onClick={() => goToPage(history, `/pokemon/details/${pokemon.id}`)}
        >
          Detalhes
        </button>
      </HomeButtons>
    </CardHomeContainer>
  );
};
