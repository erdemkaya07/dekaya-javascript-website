import { useState } from 'react'
import './App.css'
import '../src/assets/css/utilities.css'
import '../src/assets/css/media.css'
import '../src/assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/Navbar/NavBar'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Services from './views/Services'
import References from './views/References'
import Contact from './views/Contact'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/referanslar" element={<References />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
