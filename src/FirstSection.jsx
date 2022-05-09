import React from 'react'
import Slider from './Slider.jsx'
import FirstText from './FirstText.jsx'
import FirstSlider from './FirstSlider.jsx'
import './First.css'

const FirstSection = () => (
  <div className="firstContainer">
    <h1 className="firstTitle">LO MÁS DESTACADO</h1>
    <FirstSlider />
    <FirstText />
  </div>
)

export default FirstSection
