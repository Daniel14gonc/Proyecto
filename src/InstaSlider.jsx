import React from 'react'
import Slider from './Slider.jsx'
import './InstaSlider.css'

const Header = ({ duration }) => (
  <div className="insta-header">
    <div className="profile">
      <div></div>
      <h3>museelouvre</h3>
    </div>
    <p>{duration}</p>
  </div>
)

const Footer = ({ first, second, third }) => (
  <div className="insta-footer">
    <p>{first}</p>
    <p>{second}</p>
    <p>{third}</p>
  </div>
)

const Image = ({ image, altura }) => (
  <div className="insta-image" style={{ height: altura, backgroundImage: `url(${image})` }} />
)

const Slide = ({ element }) => (
  <div className="insta-slide">
    <Header duration={element.duration} />
    <Image image={element.image} altura={element.height} />
    <Footer first={element.first} second={element.second} third={element.third} />
  </div>
)

const InstaSlider = () => {
  const slides = [
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-18203050252197920.jpg', first: '🇫🇷 Prenez de la hauteur ! 🔝', second: 'Bravo @baroudeurfrancais pour cette belle photo du Louvre vu depuis la...', third: '', height: '380px', duration: '1 DAY AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17848569320765984.jpg', first: '🇫🇷 Inspectons les œuvres du', second: 'musée', third: 'avec #LouvreALaLoupe !..', height: '310px', duration: '2 DAYS AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17939275661038652.jpg', first: '🇫🇷 Explorez le Louvre ! ✨', second: '-', third: "🖼️ L'occasion de découvrir..", height: '380px', duration: '4 DAYS AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17965090804616626.jpg', first: '🇫🇷 Elisabeth-Sophie Chéron', second: 'vous souhaite une', third: '#BonneSemaine ! ☺️...', height: '370px', duration: '6 DAYS AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17920129718259118.jpg', first: '🇫🇷 ⚠️ 🔑 Le musée du', second: 'Louvre sera fermé ce', third: '#1erMai...', height: '380px', duration: '1 WEEK AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17911960796354521.jpg', first: '🇫🇷 Inspectons les œuvres du', second: 'musée', third: 'avec #LouvreALaLoupe !...', height: '380px', duration: '1 WEEK AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17936429858107199.jpg', first: '🇫🇷 Notre nouvelle exposition', second: '#PharaonDesDeuxTerres a', third: 'ouvert ses portes ce matin !...', height: '380px', duration: '1 WEEK AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17942245720957535.jpg', first: '🇫🇷 Joyeux anniversaire', second: 'Eugène Delacroix ! 🎂', third: '-...', height: '380px', duration: '1 WEEK AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17885124749640477.jpg', first: '.', second: '🇫🇷 Un peu de repos au Jardin', third: 'des #Tuileries…☀😴...', height: '380px', duration: '2 WEEKS AGO',
    },
    {
      image: 'https://api-www.louvre.fr/sites/default/files/instagram/insta-17947326796896332.jpg', first: '🇫🇷 Inspectons les œuvres du', second: 'musée avec', third: '#LouvreALaLoupe !...', height: '220px', duration: '2 WEEKS AGO',
    },
  ]

  return (
    <div className="insta-cont">
      <Slider circ={[1, 2, 3]} end={1160} dark={true}>
        {slides.map((element) => <Slide element={element} />)}
      </Slider>
    </div>
  )
}

export default InstaSlider
