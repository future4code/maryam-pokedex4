import React, {  useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import styled  from 'styled-components'
import {CardHome} from "../components/CardHome/CardHome"
import Header from '../components/Header/Header'
import { GlobalContext } from "../Global/GlobalContext"
import { usePokemonList } from '../hooks/usePokemonList'
// import Footer from '../components/Footer/Footer'

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
    const [pokemonsList, total, pages, currentPage, loading]= usePokemonList()

    useEffect(() =>{
        console.log(pokemonsList, 'lista de poke')
    }, [pokemonsList])

    const {poke, setPoke} = useContext(GlobalContext)
    // console.log(pokemonsList, 'estedaq')

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


   const pokeList = loading? (<h1>Loading...</h1>) : (pokemonsList.map((eachPokemon)=>{
    return(
    <CardHome key={eachPokemon.name}
     name={eachPokemon.name}
     url={eachPokemon.url}
     onClickAdd ={()=> addToPokedex(eachPokemon)}
    />
    )
}))

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
