import React, { useEffect, useRef, useState } from 'react'
import './Animation.css'

const Image = ({ element }) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const cont = useRef(0)

  const callbackFunction = (entries, observer) => {
    if (cont.current >= 1) {
      observer.unobserve(containerRef.current)
    }
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
    cont.current += 1
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
  }, [containerRef, options])

  return (
    <div
      ref={containerRef}
      className={`${isVisible ? 'image-anim1' : 'image-anim'}`}
      style={{ backgroundImage: `url(${element.image})`, height: element.height }}
    />
  )
}

const Images = ({ left, center, right }) => (
  <div className="images">
    <div>
      {left.map((element) => <Image element={element} />)}
    </div>
    <div>
      {center.map((element) => <Image element={element} />)}
    </div>
    <div>
      {right.map((element) => <Image element={element} />)}
    </div>
    <div className="bottom">
      <div>
        Explorar
      </div>
    </div>
  </div>
)

const Animation = () => {
  const left = [
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-03/venus-de-milo-vue-de-la-salle-de-la-grece-classique-et-hellenistique.jpg', height: '500px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-02/statue-horus-posno.jpg', height: '300px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-01/cour-visconti-toit-du-departement-des-arts-de-l-islam.jpg', height: '241.33px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-02/michel-ange-les-captifs.jpg', height: '241.33px' },
  ]

  const center = [
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-05/johannes-vermeer-la-dentelliere.jpg', height: '300px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-01/bassin-dit-baptistere-de-saint-louis.jpg', height: '500px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-05/cour-khorsabad-taureau-androcephale-aile.jpg', height: '600px' },
  ]

  const right = [
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-01/elisabeth-louise-vigee-le-brun-madame-vigee-le-brun-et-sa-fille.jpg', height: '350px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2021-01/leonard-de-vinci-portrait-de-monna-lisa-dite-la-joconde.jpg', height: '600px' },
    { image: 'https://api-www.louvre.fr/sites/default/files/2020-12/giuseppe-arcimboldo-le-printemps.jpg', height: '500px' },
  ]

  return (
    <div className="animation-cont">
      <h1>ADÉNTRATE EN EL CORAZÓN DEL LOUVRE</h1>
      <Images left={left} right={right} center={center} />
    </div>
  )
}

export default Animation
