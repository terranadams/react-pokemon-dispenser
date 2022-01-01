import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import { ListContext } from './contexts/ListContext'

function App() {
  const [pokelist, setPokelist] = useState([])


  return (
    <ListContext.Provider value={{pokelist, setPokelist}}>
    <Routes>
      <Route path='/' element={<HomeScreen/>} exact />
      <Route path='/:id' element={<DetailScreen/>} exact />
    </Routes>
    // </ListContext.Provider>
  )
}

export default App
