import { useState, useEffect } from "react";
import axios from "axios"
import { BASE_URL } from "../constants/urls.js";

export function usePokemonList(){
    const [pokemonsList, setPokemonsList] = useState([])
    // const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(20)
    const [pages, setPages] =useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const total = 151

    useEffect(()=>{
        axios.get(`${BASE_URL}pokemon?limit=${limit}&${currentPage}`)
       .then((res)=>{
        //    setTotal(res.data.results.length)
           const totalPages = Math.ceil(total / limit)
           const arrayPages = []
           for(let i=1; i<= totalPages; i++){
               arrayPages.push(i)
           }

           setPages(arrayPages)

           setPokemonsList(res.data.results)
       })
       .catch((error)=>{
           console.log(error.response)
       })
    },[])

    return [pokemonsList, total, pages, setCurrentPage]
}