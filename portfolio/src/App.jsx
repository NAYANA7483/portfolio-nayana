import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Navbarcomp from './Components/navbarcomp'
import Projects from './Components/Projects'
const App = () => {
  return (
   <Router>
    <Navbarcomp/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
   </Router>
  )
}

export default App