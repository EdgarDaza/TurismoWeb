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
  { src: (imagen1), alt: 'Imagen 1' , link:'/Cabalgata'},
  { src: (imagen2), alt: 'Imagen 2' , link: '/Carnavales' },
  { src: (imagen3), alt: 'Imagen 3' , link: '/Comiccon' },
  { src: (imagen4), alt: 'Imagen 4' , link: '/Corpuschristi'},
  { src: (imagen5), alt: 'Imagen 5' , link: '/Desfilesdelasmilpolleras'},
  { src: (imagen6), alt: 'Imagen 6' , link: '/Fiestaspatrias'},
  { src: (imagen7), alt: 'Imagen 7' , link: '/Panamajazzfestival'},
  { src: (imagen8), alt: 'Imagen 8' , link: '/Semanasanta'},
];

const Lugares_a_visitar = () => {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <div className="image" key={index}>
          <a href={image.link}>
          <img src={image.src} alt={image.alt} />
          </a>
        </div>
      ))}
    </section>
  );
};

export default Lugares_a_visitar;