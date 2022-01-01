import React from 'react'
import Generate from './Generate'
import MainList from './MainList'
import { useState, useEffect, useContext } from 'react'
import { ListContext } from './contexts/ListContext'


const HomeScreen = (props) => {

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
  
  const {pokelist, setPokelist} = useContext(ListContext)



    return (
        <div className='App' style={{ backgroundColor: '#004048' }}>
        <Generate onClick={fetchNewPokemon} />
        <MainList pokelist={pokelist} />
      </div>
    )
}

export default HomeScreen
