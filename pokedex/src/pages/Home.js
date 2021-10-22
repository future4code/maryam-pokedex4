import React, {  useContext } from 'react'
import styled  from 'styled-components'
import {CardHome} from "../components/CardHome/CardHome"
import Header from '../components/Header/Header'
import { GlobalContext } from "../Global/GlobalContext"
import { usePokemonList } from '../hooks/usePokemonList'

const BodyHomeConatiner = styled.div`
 min-height:90vh;
 width: 100vw;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 margin: 15px;
 row-gap:10px;
 column-gap: 10px;
`
const Pagination = styled.div`
 height: 8vh;
 background-color: aqua;
 display: flex;
 justify-content: space-between;
`
const PaginationButton = styled.div`
display:flex;
`
const PaginationItem = styled.div`
 margin: 0 10px;
`
const Home = () => {
    const [pokemonsList, total, pages, setCurrentPage]= usePokemonList()

    const {poke, setPoke} = useContext(GlobalContext)

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
            <Pagination>
                <div> Qtd{total}</div>
                <PaginationButton>
                    <PaginationItem>Preview</PaginationItem>
                    {pages.map((page)=>(
                        <PaginationItem key={page} onClick={setCurrentPage}>{page}</PaginationItem>
                    ))}
                    <PaginationItem>Next</PaginationItem>
    
                </PaginationButton>

            </Pagination>
        </div>
    )
}

export default Home
