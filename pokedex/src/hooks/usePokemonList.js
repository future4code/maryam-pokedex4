import { useState, useEffect } from "react";
import axios from "axios"
import { BASE_URL } from "../constants/urls.js";

export function usePokemonList(){
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}pokemon?limit=151&offset=0`)
       .then((res)=>{
           setPokemonsList(res.data.results)
       })
       .catch((error)=>{
           console.log(error.response)
       })
    },[])

    return pokemonsList
}