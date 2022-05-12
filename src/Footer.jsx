import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import pinterest from '../assets/pinterest.svg'
import linkedin from '../assets/linkedin.svg'

const Red = ({ image }) => (
  <div className="red-cont">
    <div style={{ backgroundImage: `url(${image})` }} />
  </div>
)

const Redes = () => {
  const redes = [facebook, instagram, twitter, youtube, pinterest, linkedin]
  return (
    <div className="redes">
      {redes.map((e) => <Red image={e} />)}
    </div>
  )
}

const Footer = () => (
  <div className="footer-cont">
    <div className="first-cont">
      <div className="info">
        <div>
          <ul style={{ listStyleType: 'none' }}>
            <li>ACERCA DEL MUSEO</li>
            <li>Reglamentos de visita</li>
            <li>Préstamos y depósitos</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            <li>SITIOS CONEXOS</li>
            <li>Taquilla</li>
            <li>Tienda online</li>
            <li>Colección</li>
            <li>Publicaciones</li>
            <li>Hacer una donación</li>
            <li>La Pequeña Galería</li>
            <li>Sala de prensa</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            <li>SOPORTE</li>
            <li>Preguntas frecuentes</li>
            <li>Contacto</li>
            <li className="last-li">Empleo (en francés)</li>
            <li>Privatización de espacios</li>
            <li>¡Danos tu opinión!</li>
          </ul>
        </div>
      </div>
      <div className="contactos">
        <div className="siguenos">¡SÍGUENOS!</div>
        <Redes />
        <div className="siguenos">HAZTE AMIGO</div>
        <div className="amigo" />
        <div className="more">
          <p>Ver más (solo en francés)</p>
          <div></div>
        </div>
      </div>
    </div>
    <div className="second-cont-foot">
      <div className="mas">
        <p>Aviso legal</p>
        <p>Política de privacidad</p>
        <p>Cookies</p>
        <p>Créditos (en francés)</p>
        <p>Créditos fotográficos</p>
      </div>
      <div className="image-last" />
    </div>
  </div>
)

export default Footer
