import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailScreen = () => {
  let { id } = useParams() // the new and improved way of getting parameters.

  useEffect(() => {
    fetchPokeData()
  }, [])

  
  const [pokeData, setPokeData] = useState({})
  console.log(pokeData)

  const fetchPokeData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
      async (res) => {
        const newPokemonData = await res.json() // Remember the 'await'
        setPokeData(newPokemonData)
      }
    )
  }

  return (
    <div>
      {JSON.stringify(pokeData)}
    </div>
  )
}

export default DetailScreen
