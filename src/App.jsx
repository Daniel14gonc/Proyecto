import React from 'react'
import NavBar from './NavBar.jsx'
import Video from './Video.jsx'
import FirstSection from './FirstSection.jsx'
import Parallax from './Parallax.jsx'
import './App.css'
import SecondSection from './SecondSection.jsx'
import Animation from './Animation.jsx'
import ToWatch from './ToWatch.jsx'
import Last from './Last.jsx'
import Footer from './Footer.jsx'

const App = () => {
  let prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    document.querySelector('.navContainer').style.transition = '800ms'
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navContainer').style.top = '0'
    } else if (currentScrollPos >= 300) {
      document.querySelector('.navContainer').style.top = '-200px'
    } else {
      document.querySelector('.navContainer').style.top = '-200px'
      document.querySelector('.navContainer').style.top = '0'
    }
    prevScrollpos = currentScrollPos
  }
  return (
    <div className="container">
      <NavBar />
      <Video />
      <FirstSection />
      <Parallax />
      <SecondSection />
      <Animation />
      <ToWatch />
      <Last />
      <Footer />
    </div>
  )
}

export default App
