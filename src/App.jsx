import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/PortFolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {


  return (
    <>
   <Navbar/>
   <Hero/>
   <Skills/>
   <Portfolio/>
   <Experience/>
   <Contact/>
    </>
  )
}

export default App
