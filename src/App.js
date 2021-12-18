import './App.css'
import MainList from './MainList'
import Generate from './Generate'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK

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
    <div className='App' style={{backgroundColor: '#004048'}}>
      <Generate onClick={fetchNewPokemon} />
      <MainList pokelist={pokelist}/>
    </div>
  )
}

export default App
