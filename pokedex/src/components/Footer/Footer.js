import React, {useContext} from "react";
import {FooterStyle, Pagination, PaginationItem, PaginationButton } from "./style";
import {useParams, useHistory} from 'react-router-dom'
import { usePokemonList } from "../../hooks/usePokemonList";
import { GlobalContext } from "../../Global/GlobalContext";

const Footer = () => {
    const { poke, setPoke } = useContext(GlobalContext);
    const [ pokemonsList, total, pages, setCurrentPage ]= usePokemonList()
    const pathParams = useParams()
    let history = useHistory()
  
  return (
      <Pagination>
        <div> <p>Quantidade de Pokemons  {total}</p></div>
        <PaginationButton>
          <PaginationItem><p>Anterior</p></PaginationItem>
          {pages.map((page) => (
            //  onClick={() => setCurrentPage(2)}
            <PaginationItem key={page} >
              <p>{page}</p>
            </PaginationItem>
          ))}
          <PaginationItem>
            <p>Próxima</p>
          </PaginationItem>
        </PaginationButton>
      </Pagination>
  );
};

export default Footer;
