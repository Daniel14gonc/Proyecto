import React from 'react'
import NavBar from './NavBar.jsx'
import Video from './Video.jsx'
import FirstSection from './FirstSection.jsx'
import Parallax from './Parallax.jsx'
import './App.css'

const App = () => (
  <div className="container">
    <NavBar />
    <Video />
    <FirstSection />
    <Parallax />
    <div style={{height:'600px', width:'100%', backgroundColor:'white'}}/>
  </div>
)

export default App
