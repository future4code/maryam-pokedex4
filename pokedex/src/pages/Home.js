import React, { useEffect, useState } from 'react'
import axios from "axios"
import styled  from 'styled-components'
import {CardHome} from "../components/CardHome/CardHome"

const HeaderHome = styled.div`
 height: 10vh;
 background-color: lightgray;
`

const BodyHomeConatiner = styled.div`
 min-height:90vh;
 width: 100vw;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 margin: 20px;
 gap: 15px;
`
const Home = () => {
    const [pokemonsList, setPokemonsList] = useState([])

   const getPokemons = ()=>{
       const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

       axios.get(url)
       .then((res)=>{
           setPokemonsList(res.data.results)
       })
       .catch((error)=>{
           console.log(error.response)
       })
   }

   useEffect(()=>{
       getPokemons()
   },[])

   const pokeList = pokemonsList.map((eachPokemon)=>{
       return(
       <CardHome key={eachPokemon.name}
        name={eachPokemon.name}
        url={eachPokemon.url}
       />
       )
   })



    return (
        <div>
            <HeaderHome>
                <h1>Header</h1>
            </HeaderHome>
            <BodyHomeConatiner>
                {pokeList}
            </BodyHomeConatiner>
        </div>
    )
}

export default Home
