import React from 'react'
import Imagem from '../img/7.png'
import { ElementContainer, FirstContainer, SecondContainer, ThirdContainer} from './PokemonDetailsPageStyle'
import Header from '../components/Header/Header'

const PokemonDetailsPage = () => {
    return (
        <div>
            
            <ElementContainer>
            <Header/>
                <div>
                <FirstContainer>

                    <img src={Imagem}/>
                    <img src={Imagem}/>

                </FirstContainer>
                <SecondContainer>
                    <h5>Stats</h5>
                    <p>HP:</p>
                    <p>attack:</p>
                    <p>defense:</p>
                    <p>special-attack:</p>
                    <p>special-defense:</p>
                    <p>speed:</p>

                </SecondContainer>

                <ThirdContainer>
                    <div>
                        <p>Type1</p>
                        <p>Type2</p>
                    </div>
                    <div>
                        <h5>Moves</h5>
                        <p>move name 1</p>
                        <p>move name 2</p>
                        <p>move name 3</p>

                    </div>

                </ThirdContainer>
                </div>
            </ElementContainer>
        </div>
    )
}

export default PokemonDetailsPage
