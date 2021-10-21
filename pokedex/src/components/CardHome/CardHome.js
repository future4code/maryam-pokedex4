import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useHistory} from "react-router"
import { goToPage } from '../../Router/coordinator'
import {CardHomeContainer, ContainerNamePicture, HomeButtons} from "./styled"

export const CardHome = (props) =>{
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

    return(
        <CardHomeContainer>
            <ContainerNamePicture>
                <h5>{props.name.toUpperCase()}</h5>
                <img src={pokemon && pokemon.sprites && pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pokemon Picture"/>
            </ContainerNamePicture>
            <HomeButtons>
                <button onClick={props.onClickAdd}>Adicionar</button>
                <button onClick={()=>goToPage(history, `/pokemon/details/${pokemon.id}`)}>Detalhes</button>
            </HomeButtons>
        </CardHomeContainer>
    )
}