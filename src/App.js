import './App.css'
import MainList from './MainList'
import Generate from './Generate'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import HomeScreen from './HomeScreen'

function App() {
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
    <HomeScreen onClick={fetchNewPokemon} pokelist={pokelist}/>
  )
}

export default App
