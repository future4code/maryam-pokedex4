import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = (props) => {
    const [ pokedex, setPokedex] = useState ([])
    const [ pokemonsList, setPokemonsList] = useState ([])
    const value = {pokedex, setPokedex, pokemonsList, setPokemonsList} 
    
    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}