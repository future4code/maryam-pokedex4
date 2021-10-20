import Router from "./Router/Router"
import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
box-sizing: border-box;
margin: 0;
height: 100vh;
width: 100vw;
}
div{
  height: 100%;
  width: 100%;
}
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
