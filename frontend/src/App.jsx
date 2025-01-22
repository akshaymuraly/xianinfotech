import './App.css'
import BusinessPromoters from './pages/BusinessPromoters'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bs' element={<BusinessPromoters/>}/>
      </Routes>
    </Router>
  )
}

export default App
