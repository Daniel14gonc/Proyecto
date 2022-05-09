import React from 'react'
import Slider from './Slider.jsx'
import './ToWatch.css'

const Slide = ({ video }) => (
  <div className="slide-youtube">
    <iframe
    width="552"
    height="310"
    src={video.video}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
    <div className='footer'>
      <div />
      <p>{video.text}</p>
    </div>
  </div>
)

const ToWatch = () => {
  const videos = [
    { video: 'https://www.youtube.com/embed/pUsJEHQz2E4', text: 'Un paseo por la colección de camafeos del Louvre' },
    { video: 'https://www.youtube.com/embed/JtmfK4uC9uk', text: 'La capilla de la mastaba de Ajethotep : episodio 5' },
    { video: 'https://youtube.com/embed/OkETwJ1viCU', text: 'Cuentos de otoño : La uva de Baco (subtitulado)' },
    { video: 'https://youtube.com/embed/MZSBsz7mHZM', text: 'Peregrinación a la isla de Citera' },
    { video: 'https://youtube.com/embed/aWmJ5DgyWPI', text: 'Un paseo por la exposición "Cuerpo y alma: escultura renacentista italiana, de Donatello a Miguel Ángel"' }]
  return (
    <div className="watch-section">
      <h1>COSAS QUE VER</h1>
      <Slider circ={[1, 2, 3]} end={600}>
        {videos.map((element) => <Slide video={element} />)}
      </Slider>
    </div>
  )
}

export default ToWatch
