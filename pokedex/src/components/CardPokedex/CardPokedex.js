import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { CardHomeContainer, ContainerNamePicture, HomeButtons } from "./styled";
import {useHistory } from 'react-router-dom'
import { goToPage } from "../../Router/coordinator";

export const CardPokedex = (props) => {

    const history = useHistory()
    const[pokemon, setPokemon] = useState()

    useEffect(()=>{
        getPokemonPictures(props.url)
    },[])

    const getPokemonPictures = (url) =>{

        axios.get(url)
        .then((res)=>{
            setPokemon(res.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

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
        <img src={pokemon && pokemon.sprites && pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pokemon Picture"/>
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
