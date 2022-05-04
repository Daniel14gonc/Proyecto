import React from 'react'
import './Video.css'

const Video = () => (
  <div className="videoContainer">
    <video className="video" autoPlay="autoPlay" loop mute="true">
      <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      <source
        src="https://api-www.louvre.fr/sites/default/files/videos/video_5_4_2048/video.mp4"
        type="video/mp4"
      />
    </video>
    <h1 className="videoTitle">VIAJA DE LA MANO DEL LOUVRE</h1>
    <div className="reservar">
      <div />
      <p>Reservar entradas</p>
    </div>
  </div>
)

export default Video
