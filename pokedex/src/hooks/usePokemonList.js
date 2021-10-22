import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls.js";

export function usePokemonList() {

  const [pokemonsList, setPokemonsList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(151);
  const [loading, setLoading] = useState(true)

  function create20ItensObject(response) {
    console.log(response, 'resposta')
    let newObject = [];
    let newArrayOfObjects = [];
    let y = 0;
    console.log(total)
    for (let i = 0; i < total; i++) {
      if (y < 20 && response[i + 1]) {

        newArrayOfObjects.push(response[i]);
        y++;
      } else {

        let object = [ ...newObject, newArrayOfObjects ];
        newObject = object;
        console.log('novo objeto', newObject)
        newArrayOfObjects = [];
        y = 0;
      }
    }
    console.log(newObject, 'este daq');
    setPokemonsList(newObject);
    console.log(pokemonsList, 'lista de pokes');
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=151&offset=0`)
      .then((res) => {
        
        setTotal(res.length)
        create20ItensObject(res.data.results)
        //   setPokemonsList(res.data.results)
    //    setTotal(res.data.results.length)
        // console.log(res.data.results.length, 'total')
        // const totalPages = Math.ceil(total / limit)
        // const arrayPages = []
        // for (let i = 1; i <= totalPages; i++) {
        //   arrayPages.push(i);
        // }
        // setPages(arrayPages)
        // console.log(arrayPages, 'novo array paginas')
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response, 'erro na requisição');
        setLoading(false)
      });
  }, []);

  return [pokemonsList, total, pages];
}
