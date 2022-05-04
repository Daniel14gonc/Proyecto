import React from 'react'
import './NavBar.css'

const Upper = () => (
  <div className="upperContainer">
    <div>
      <div className="menuImage" />
      <div className="titles">Menú</div>
      <div className="titles">Español</div>
    </div>
    <div>
      <div className="logo" />
    </div>
    <div className="buttonsCont">
      <div className="button1">
        <div className="shop" />
        <div className="tienda">Tienda online</div>
      </div>
      <div className="button2">
        <div />
        <div>Entradas</div>
      </div>
    </div>
  </div>
)

const Lower = () => (
  <div className="lowerContainer">
    <h3>VISITA</h3>
    <h3>EXPLORA</h3>
    <h3>PROGRAMACIÓN</h3>
  </div>
)

const NavBar = () => (
  <div className="navContainer">
    <Upper />
    <Lower />
  </div>
)

export default NavBar
