import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Slider.css'
import right from '../assets/right.svg'
import left from '../assets/left.svg'

const ButtonSlide = ({ button, click, dark }) => (
  <div role="button" className={`${dark ? 'right-dark' : 'right'}`} onClick={click}>
    <div style={{ backgroundImage: `url(${button})` }} />
  </div>
)

const Circle = ({ type }) => (
  <div className={`${type}`} />
)

const Controlls = ({ change, position, circ, fin, dark }) => {
  const circles = circ
  const [currentCircle, setCurrentCircle] = useState(1)

  const buttonClick = (cant) => {
    if (currentCircle + cant > 0 && currentCircle + cant <= circles.length) {
      setCurrentCircle(currentCircle + cant)
      if (currentCircle + cant === circles.length || currentCircle === circles.length) {
        change(position + (fin * -cant))
      } else if (currentCircle === 1 || (currentCircle + cant === 1)) {
        change(position + (1160 * -cant))
      } else {
        change(position + (1280 * -cant))
      }
    }
  }

  return (
    <div className="controls-container">
      <ButtonSlide button={left} click={() => buttonClick(-1)} dark={dark} />
      <div>
        {circles.map((e, index) => {
          if (e === currentCircle) {
            return (<Circle key={index.id} type={`${dark ? 'Circle2-dark' : 'Circle2'}`} />)
          }
          return (<Circle key={index.id} type={`${dark ? 'Circle-dark' : 'Circle'}`} />)
        })}
      </div>
      <ButtonSlide button={right} click={() => buttonClick(1)} dark={dark} />
    </div>
  )
}

const Slider = (props) => {
  // Se crea un estado para manejar la posicion del slider
  const [slidePosition, setSlidePosition] = useState(0)

  return (
    <>
      <div className="slideContainer">
        <div className="otro" style={{ transform: `translate(${slidePosition}px)`, transition: '700ms ease-out all' }}>
          {props.children}
        </div>
      </div>
      <Controlls
        change={setSlidePosition}
        position={slidePosition}
        circ={props.circ}
        fin={props.end}
        dark={props.dark}
      />
    </>
  )
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
  circ: PropTypes.isRequired,
}

export default Slider
