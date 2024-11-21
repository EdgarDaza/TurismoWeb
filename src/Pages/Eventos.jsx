import './Lugares_a_visitar.css';
import React from 'react';
import imagen1 from '../assets/eventos/Cabalgata-gualaca.jpeg'
import imagen2 from '../assets/eventos/Carnavales.jpeg'
import imagen3 from '../assets/eventos/Comic-con.jpeg'
import imagen4 from '../assets/eventos/Corpus-cristi.jpg'
import imagen5 from '../assets/eventos/Desfile-polleras.jpeg'
import imagen6 from '../assets/eventos/Fiestras-patrias.jpeg'
import imagen7 from '../assets/eventos/Panama-jazz.png'
import imagen8 from '../assets/eventos/Viernes-santo.jpeg'


const images = [
  { src: (imagen1), alt: 'Imagen 1' },
  { src: (imagen2), alt: 'Imagen 2' },
  { src: (imagen3), alt: 'Imagen 3' },
  { src: (imagen4), alt: 'Imagen 4' },
  { src: (imagen5), alt: 'Imagen 5' },
  { src: (imagen6), alt: 'Imagen 6' },
  { src: (imagen7), alt: 'Imagen 7' },
  { src: (imagen8), alt: 'Imagen 8' },
];

const Lugares_a_visitar = () => {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <div className="image" key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default Lugares_a_visitar;



