import React from "react";
import { CardHomeContainer, ContainerNamePicture, HomeButtons } from "./styled";
import {useHistory } from 'react-router-dom'
import { goToPage } from "../../Router/coordinator";
import { useRequestData } from '../../hooks/useRequestData'


export const CardPokedex = (props) => {

    const history = useHistory()
    const pokemon = useRequestData(props.url)

    const getPokemonId = () =>{
        const splitUrl = props.url.split('/')
        const pokemonId = splitUrl.at(-2)
        return pokemonId
    }

  return (
    <CardHomeContainer>
      <ContainerNamePicture>
        <h5>{props.name.toUpperCase()}</h5>
        <div>
        <img src={pokemon && pokemon.sprites && pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt=""/>
        </div>
      </ContainerNamePicture>
      <HomeButtons>
        <button onClick={() => props.removeItem()}>Remover</button>
        <button onClick={() => {
            goToPage(history, `/pokemon/details/${getPokemonId()}`)
        }}>Detalhes</button>
      </HomeButtons>
    </CardHomeContainer>
  );
};
