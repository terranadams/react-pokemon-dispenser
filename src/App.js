import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // THIS IS WHAT YOU NEED FOR THE BOOTSTRAP TO WORK
import HomeScreen from './HomeScreen'

function App() {

  return (
    <HomeScreen/>
    // <Router>
    //   <Routes>
    //   <Route path='/' component={HomeScreen} exact />
    //   </Routes>
    // </Router>
  )
}

export default App
