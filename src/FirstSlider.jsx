import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'
import Slider from './Slider.jsx'
import right from '../assets/right.svg'
import left from '../assets/left.svg'
import slide1 from '../assets/slide1.JPG'
import slide2 from '../assets/slide2.JPG'
import slide3 from '../assets/slide3.JPG'
import slide4 from '../assets/slide4.JPG'
import slide5 from '../assets/slide5.JPG'

const Slide = ({ element }) => (
  <div className="slide" style={{ backgroundImage: `url(${element.background})` }}>
    <div>
      <h3>{element.title}</h3>
      <p>{element.content}</p>
      <p>{element.footer}</p>
    </div>
  </div>
)

const ButtonSlide = ({ button, click }) => (
  <div className="right" onClick={click}>
    <div style={{ backgroundImage: `url(${button})` }} />
  </div>
)

const Circle = ({ type }) => (
  <div className={`${type}`} />
)

const Controlls = ({ change, position }) => {
  const circles = [1, 2, 3, 4, 5]
  const [currentCircle, setCurrentCircle] = useState(1)

  const buttonClick = (cant) => {
    if (currentCircle + cant > 0 && currentCircle + cant <= 5) {
      setCurrentCircle(currentCircle + cant)
      if (currentCircle === 1 || (currentCircle + cant === 1)) {
        change(position + (1160 * -cant))
      } else {
        change(position + (1280 * -cant))
      }
    }
  }

  return (
    <div className="controls-container">
      <ButtonSlide button={left} click={() => buttonClick(-1)} />
      <div>
        {circles.map((e, index) => {
          if (e === currentCircle) {
            return (<Circle key={index.id} type="Circle2" />)
          }
          return (<Circle key={index.id} type="Circle" />)
        })}
      </div>
      <ButtonSlide button={right} click={() => buttonClick(1)} />
    </div>
  )
}

const FirstSlider = () => {
  const slides = [{
    background: slide1, title: 'EXPOSICIÓN', content: 'FARAÓN DE LAS DOS TIERRAS', footer: 'La epopeya afriaca de los reyes de Napata. Del 28 de abril al 25 de julio de 2022',
  },
  {
    background: slide2, title: 'EXPOSICIÓN', content: 'GIORGIO VASARI', footer: 'El libro de los dibujos. Del 31 de marzo al 18 de julio de 2022',
  },
  {
    background: slide3, title: 'EXPOSICIÓN', content: 'YVES SAINT LAURENT DESFILA EN EL LOUVRE', footer: 'Del 22 de enero de 2022 al 15 de mayo de 2022',
  },
  {
    background: slide4, title: 'EXPOSICIÓN', content: 'DELACROIX Y LA NATURALEZA', footer: 'En el Museo Nacional Eugène Delacroix del 16 de marzon al 27 de junio de 2022',
  },
  {
    background: slide5, title: 'EVENTO', content: 'PEDRO CABRITA REIS, LAS TRES GRACIAS, 2022', footer: 'Una obra monumental en el jardín de las Tullerías',
  }]

  return (
    <Slider circ={[1, 2, 3, 4, 5]} end={1160}>
      {slides.map((e, index) => (
        <Slide key={index.id} element={e} />
      ))}
    </Slider>
  )
}

Slider.propTypes = {
  data: PropTypes.func.isRequired,
}

ButtonSlide.propTypes = {
  button: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
}

Circle.propTypes = {
  type: PropTypes.string.isRequired,
}

Controlls.propTypes = {
  change: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
}

Slide.propTypes = {
  element: PropTypes.string.isRequired,
}

export default FirstSlider
