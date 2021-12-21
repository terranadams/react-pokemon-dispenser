import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailScreen = () => {
  let { id } = useParams() // the new and improved way of getting parameters.

  useEffect(() => {
      fetchPokeData()
  }, [])

  const [pokeData, setPokeData] = useState()
  
  const fetchPokeData = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      )
      const newPokemonData = await data.json()
      console.log(newPokemonData)
      // setPokeData(newPokemonData)
    }


  return <div>{pokeData}</div>
}

export default DetailScreen
