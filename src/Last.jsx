import React from 'react'
import InstaSlider from './InstaSlider.jsx'
import './Last.css'

const Last = () => (
  <div className="last-cont">
    <div className="insta">
      <h1>EL LOUVRE EN INSTAGRAM</h1>
    </div>
    <div className="hashtag">
      <p>Comparte tus fotos con el hashtag #museedulouvre o #louvre</p>
      <div className="button-insta">
        <div />
        <p>¡Síguenos!</p>
      </div>
    </div>
    <div style={{marginTop: '40px'}}>
      <InstaSlider />
    </div>
  </div>
)

export default Last
