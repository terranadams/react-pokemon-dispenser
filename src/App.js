import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

function App() {

  return (
    // <HomeScreen/>
    <Routes>
      <Route path='/' element={<HomeScreen/>} exact />
      <Route path='/:id' element={<DetailScreen/>} exact />
    </Routes>
  )
}

export default App
