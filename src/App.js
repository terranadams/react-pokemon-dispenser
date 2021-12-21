import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'


function App() {

  return (
    // <ListContext.Provider value={}>
    <Routes>
      <Route path='/' element={<HomeScreen/>} exact />
      <Route path='/:id' element={<DetailScreen/>} exact />
    </Routes>
    // </ListContext.Provider>
  )
}

export default App
