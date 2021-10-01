import React from 'react'
import { useState, useEffect } from 'react'


const MainList = (props) => {

  useEffect(() => {

  }, [])

  const [pokelist, setPokelist] = useState([])


  const fetchNewPokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 932) + 1}/`)
    const newPokemonData = await data.json()
    const newPokemon = {
      name: newPokemonData.name,
      photo: newPokemonData.sprites.front_default
    }
    setPokelist([newPokemon, ...pokelist])
  }

    return (
        <div>
            <button className='btn' onClick={fetchNewPokemon}>Get New Pokemon</button>
            {pokelist.map(pokemon => ( 
              <div style={{backgroundColor: '#00474f'}}>
              <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
              <img src={pokemon.photo} width="300px" height="300px"/>
              <hr></hr>
              </div>
            ))}
        </div>
    )
}

export default MainList
