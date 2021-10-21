import React from "react";
import { HeaderContainer, Return, GoHomeButton } from "./styled";
import { useParams, useHistory } from 'react-router-dom';

const Header = (props) => {

  const pathParams = useParams()
  // console.log(pathParams)
  // const argument = ''

  const queryString = window.location.href

  let history = useHistory()

  console.log(pathParams.activePage)

  const handlePageTransition = (parameter) =>{
    history.push(parameter)
  }
  
  function renderPokemoNamewithFirstLetterCapitalized(){
    const captalizedWord = props.pokemonDetails.name.charAt(0).toUpperCase() + props.pokemonDetails.name.slice(1);
    return (captalizedWord)
  }

  const hender = () => {
    console.log(history)
    console.log(queryString)
    switch(props.page){
      case 'home':
        return(
          <>
            <button onClick={() => handlePageTransition('/pokedex/list')}>Ver minha POKEDEX</button>

            <h1>Lista de Pokemons</h1>
          </>
        );
        case 'pokedex': 
        return(
          <>
            <h1>Pokedex</h1>
            <GoHomeButton onClick={() => history.goBack()}>
            <p>Voltara para a lista de pokemons</p>
            </GoHomeButton>
          </>
        )
        case 'pokemonDetails':
          return(
            <>
              <Return onClick={() => history.goBack()}>
                <p>Voltar</p>
              </Return>
              
              <h1>{renderPokemoNamewithFirstLetterCapitalized()}</h1>
              <button>
                Adicionar/Remover da Pokedex
              </button>
            </>
          )

          default:
            return(
              <h1>Sorry...this should not happen. :(</h1>
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
