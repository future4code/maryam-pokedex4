import react, { useState } from "react"
import Router from "./Router/Router"
import { createGlobalStyle} from 'styled-components'
import { GlobalContextProvider } from './Global/GlobalContextProvider'
import { GlobalContext } from "./Global/GlobalContext"

const GlobalStyle = createGlobalStyle`
body{
box-sizing: border-box;
margin: 0;
height: 100vh;
width: 100vw;
font-family: "myFont";
border-radius: 3px;
}
div{
  height: 100%;
  width: 100%;
}
`

function App() {
  const [poke, setPoke] = useState([])
  return (
    <GlobalContext.Provider value={{poke, setPoke}}>
      <GlobalStyle/>
      <Router/>
    </GlobalContext.Provider>  );
}

export default App;
