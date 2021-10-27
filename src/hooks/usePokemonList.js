import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls.js";

export function usePokemonList() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [limit] = useState(20);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(151);
  const [loading, setLoading] = useState(true);

  function create20ItensObject(response) {
    let newObject = [];
    let newArrayOfObjects = [];
    let y = 0;
    for (let i = 0; i < total; i++) {
      if (y < 20 && response[i + 1]) {
        newArrayOfObjects.push(response[i]);
        y++;
      } else {
        let object = [...newObject, newArrayOfObjects];
        newObject = object;
        newArrayOfObjects = [];
        y = 0;
      }
    }
    setPokemonsList(newObject);
    return newObject;
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=151&offset=0`)
      .then((res) => {
        create20ItensObject(res.data.results);
        const totalPages = Math.ceil(total / limit);
        const arrayPages = [];
        for (let i = 1; i <= totalPages; i++) {
          arrayPages.push(i);
        }
        setPages(arrayPages);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return [pokemonsList, total, pages, loading, currentPage, setCurrentPage];
}
