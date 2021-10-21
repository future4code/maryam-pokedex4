import Router from "./Router/Router"
import { createGlobalStyle} from 'styled-components'
import { GlobalContextProvider } from './Global/GlobalContextProvider'

const GlobalStyle = createGlobalStyle`
body{
box-sizing: border-box;
margin: 0;
height: 100vh;
width: 100vw;
border-radius: 3px;
}
div{
  height: 100%;
  width: 100%;
}
`

function App() {
  return (
    <GlobalContextProvider>
      <GlobalStyle/>
      <Router/>
    </GlobalContextProvider>
  );
}

export default App;
