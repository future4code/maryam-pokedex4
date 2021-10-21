import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import styled  from 'styled-components'
import {CardHome} from "../components/CardHome/CardHome"
import Header from '../components/Header/Header'
import { GlobalContext } from "../Global/GlobalContext"

const BodyHomeConatiner = styled.div`
 min-height:90vh;
 width: 100vw;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 margin: 15px;
 row-gap:10px;
 column-gap: 10px;
`
const Home = () => {
    const [pokemonsList, setPokemonsList] = useState([])
    const {poke, setPoke} = useContext(GlobalContext)

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

   const addToPokedex = (itemToAdd) => {
       console.log(itemToAdd, 'adicionar este')
    const position = poke.findIndex((item) => {
      return item.name === itemToAdd.name;
    });

    const newAdd = [...poke];

    if (position === -1) {
      newAdd.push({ ...itemToAdd, amount: 1 });
    } else {
        alert("Já adicionado!")
    }
    console.log(newAdd, 'novo adicionado')
    setPoke(newAdd);
  };


   const pokeList = pokemonsList.map((eachPokemon)=>{
       return(
       <CardHome key={eachPokemon.name}
        name={eachPokemon.name}
        url={eachPokemon.url}
        onClickAdd ={()=> addToPokedex(eachPokemon)}
       />
       )
   })

    return (
        <div>
            <Header
            page = 'home'
            />
            <BodyHomeConatiner>
                {pokeList}
            </BodyHomeConatiner>
        </div>
    )
}

export default Home
