// import React, {useContext} from "react";
// import {FooterStyle, Pagination, PaginationItem, PaginationButton } from "./style";
// import {useParams, useHistory} from 'react-router-dom'
// import { usePokemonList } from "../../hooks/usePokemonList";
// import { GlobalContext } from "../../Global/GlobalContext";

// const Footer = () => {
//     const { poke, setPoke } = useContext(GlobalContext);
//     const [pokemonsList, total, pages]= usePokemonList()
//     const pathParams = useParams()
//     let history = useHistory()
  
//   return (
//       <Pagination>
//         <div> Qtd{total}</div>
//         <PaginationButton>
//           <PaginationItem>Preview</PaginationItem>
//           {pages.map((page) => (
//             <PaginationItem key={page} >
//               {page}
//             </PaginationItem>
//           ))}
//           <PaginationItem>Next</PaginationItem>
//         </PaginationButton>
//       </Pagination>
//   );
// };

// export default Footer;
