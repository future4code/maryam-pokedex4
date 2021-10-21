import React from "react";
import { HeaderContainer, Return } from "./styled";
import { useParams, useHistory } from 'react-router-dom';

const Header = (props) => {

  const pathParams = useParams()
  // console.log(pathParams)
  // const argument = ''

  const queryString = window.location.href

  let history = useHistory()

  console.log(pathParams.activePage)
  

  const hender = () => {
    console.log(history)
    console.log(queryString)
    switch(props.page){
      case 'home':
        return(
          <>
            <button>Ver minhas POKEDEX</button>

            <h1>Lista de Pokemons</h1>
          </>
        );
        case 'pokedex': 
        return(
          <>
            <h1>pokedex</h1>
          </>
        )
        case 'pokemonDetails':
          return(
            <>
              <Return>
                <p>Voltar</p>
              </Return>
              
              <h1>Lista de Pokemons</h1>
              <button>
                Adicionar/Remover da Pokedex
              </button>
            </>
          )

    }
    
  }

  return (
    <HeaderContainer>
      {hender()}
    </HeaderContainer>

  );
};

export default Header;
