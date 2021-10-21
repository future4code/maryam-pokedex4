import React, { useContext }from 'react'
import { GlobalContext } from '../Global/GlobalContext'

const Pokedex = () => {
    const {pokedex, setPokedex} = useContext(GlobalContext)
    console.log(pokedex)

    return (
        <div>
            <p>olá2</p>
        </div>
    )
}

export default Pokedex
