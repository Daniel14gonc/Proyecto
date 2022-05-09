import React from 'react'
import './SecondSection.css'
import r1 from '../assets/r1.JPG'
import r2 from '../assets/r2.JPG'
import r3 from '../assets/r3.JPG'


const Recurso = ({ image, text }) => (
  <div className="recurso" style={{ backgroundImage: `url(${image})` }}>
    <div>
      <div>{text.square}</div>
      <div>
        <h3>{text.header}</h3>
        <p>
          {text.text}
        </p>
      </div>
    </div>
  </div>
)

const SecondSection = () => {
  return (
  <div className="second-cont">
    <h1>EL LOUVRE DESDE CASA</h1>
    <div>
      <Recurso image={r1} text={{square: 'Cuentos infantiles', header: 'MITOS Y LEYENDAS', text: 'Pasea con nosotros por las colecciones del Louvre y descubre las historias que se esconden detrás de sus obras.'}}/>
      <Recurso image={r2} text={{square: 'Vistas virtuales', header: 'LA PEQUEÑA GALERÍA', text: '(en francés e inglés)'}} />
      <Recurso image={r3} text={{square: 'VR', header: 'EXPERIENCIA VIRTUAL "A SOLAS CON LA GIOCONDA"', text: 'Descarga la aplicación.'}} />
    </div>
  </div>
  )
}

export default SecondSection
