import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'
import right from '../assets/right.svg'
import left from '../assets/left.svg'
import slide1 from '../assets/slide1.JPG'
import slide2 from '../assets/slide2.JPG'
import slide3 from '../assets/slide3.JPG'
import slide4 from '../assets/slide4.JPG'
import slide5 from '../assets/slide5.JPG'

const Slide = ({ background }) => (
  <div className="slide" style={{ backgroundImage: `url(${background})` }}>
    <div />
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

const Slider = ({ data }) => {
  // Se crea un estado para manejar la posicion del slider
  const [slidePosition, setSlidePosition] = useState(0)
  const slides = [slide1, slide2, slide3, slide4, slide5]

  // Datos de prueba
  const data1 = [1, 2, 3, 4, 5]
  return (
    <>
      <div className="slideContainer">
        <div className="otro" style={{ transform: `translate(${slidePosition}px)`, transition: '700ms ease-out all' }}>
          {slides.map((e, index) => (
            <Slide key={index.id} background={e} />
          ))}
        </div>
      </div>
      <Controlls change={setSlidePosition} position={slidePosition} />
    </>
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
  background: PropTypes.string.isRequired,
}

export default Slider
