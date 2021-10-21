import React, {useEffect, useState} from 'react';
import Imagem from '../img/7.png';
import { ElementContainer, FirstContainer, SecondContainer, ThirdContainer} from './PokemonDetailsPageStyle';
import Header from '../components/Header/Header';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const PokemonDetailsPage = () => {

    const [pokemonDetails, setPokemonDetails] = useState()

    const pathParams = useParams()

    useEffect(() => {

        const url = `https://pokeapi.co/api/v2/pokemon/${pathParams.id}`

        axios.get(url).then((pokemon) =>{
            console.log(pokemon)
            setPokemonDetails(pokemon.data)
            console.log(pokemonDetails, "pokemon details")
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    const { id } = useParams()
    return (
        <div>

            <Header
            page='pokemonDetails'
            />

            <ElementContainer>

                <div>
                <FirstContainer>

                    <img src={pokemonDetails.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pokemon Picture"/>
                    <img src={pokemonDetails.sprites.versions['generation-v']['black-white'].animated.back_default} alt="Pokemon Picture"/>

                </FirstContainer>

                <SecondContainer>
                    <h5>Stats</h5>
                    <p>HP: ${pokemonDetails.stats[0].base_stat}</p>
                    <p>attack:</p>
                    <p>defense:</p>
                    <p>special-attack:</p>
                    <p>special-defense:</p>
                    <p>speed:</p>

                </SecondContainer>

                <ThirdContainer>
                    <div>
                        <p>Type1</p>
                        <p>Type2</p>
                    </div>
                    <div>
                        <h5>Moves</h5>
                        <p>move name 1</p>
                        <p>move name 2</p>
                        <p>move name 3</p>

                    </div>

                </ThirdContainer>
                </div>
            </ElementContainer>
        </div>
    )
}

export default PokemonDetailsPage
