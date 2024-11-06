import { useState } from 'react'
import './App.css'
import '../src/assets/css/utilities.css'
import '../src/assets/css/media.css'
import '../src/assets/css/main.css'
import NavBar from './components/Navbar/NavBar'
import HeroSida from './components/Home/HeroSida'


function App() {

  return (
    <>
      <NavBar />
      <HeroSida />
    </>

  )
}

export default App
