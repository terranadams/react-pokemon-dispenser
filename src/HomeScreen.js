import React from 'react'
import Generate from './Generate'
import MainList from './MainList'
import { useState, useEffect } from 'react'


const HomeScreen = (props) => {
  useEffect(() => {}, [])
  const [pokelist, setPokelist] = useState([])

  const fetchNewPokemon = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        Math.floor(Math.random() * 932) + 1
      }/`
    )
    const newPokemonData = await data.json()
    // console.log(newPokemonData)
    setPokelist([newPokemonData, ...pokelist])
  }


    return (
        <div className='App' style={{ backgroundColor: '#004048' }}>
        <Generate onClick={fetchNewPokemon} />
        <MainList pokelist={pokelist} />
      </div>
    )
}

export default HomeScreen
