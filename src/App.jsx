import React from 'react'
import NavBar from './NavBar.jsx'
import Video from './Video.jsx'
import FirstSection from './FirstSection.jsx'
import Parallax from './Parallax.jsx'
import './App.css'
import SecondSection from './SecondSection.jsx'

const App = () => (
  <div className="container">
    <NavBar />
    <Video />
    <FirstSection />
    <Parallax />
    <SecondSection />
  </div>
)

export default App
