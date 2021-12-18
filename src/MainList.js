import React from 'react'
import Generate from './Generate'
import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK

const MainList = (props) => {
  useEffect(() => {}, [])

  const [pokelist, setPokelist] = useState([])

  const fetchNewPokemon = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        Math.floor(Math.random() * 932) + 1
      }/`
    )
    const newPokemonData = await data.json()
    console.log(newPokemonData)
    setPokelist([newPokemonData, ...pokelist])
  }

  return (
    <div>
      <Generate onClick={fetchNewPokemon} />
      
      <Row>
        {pokelist.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </Row>
    </div>
  )
}

export default MainList
