import React from 'react';
import './hospedaje.css';
import imagen1 from '../assets/hospedaje/santa-maria.jpg';
import imagen2 from '../assets/hospedaje/hilton.jpg';
import imagen3 from '../assets/hospedaje/JW-Marriot.jpg';
import imagen4 from '../assets/hospedaje/playa-blanca.jpg';
import imagen5 from '../assets/hospedaje/decameron.jpg';
import imagen6 from '../assets/hospedaje/Residence-inn.jpg';
import imagen7 from '../assets/hospedaje/Waldof-A.jpg';
import imagen8 from '../assets/hospedaje/sheraton.jpg';


const images = [
  { src: (imagen1), alt: 'Imagen 1', link: '/SantaMaria' },
  { src: (imagen2), alt: 'Imagen 2', link: '/Hilton' },
  { src: (imagen3), alt: 'Imagen 3', link: '/JWMarriot' },
  { src: (imagen4), alt: 'Imagen 4', link: '/PlayaBlanca' },
  { src: (imagen5), alt: 'Imagen 5', link: '/Decameron' },
  { src: (imagen6), alt: 'Imagen 6', link: '/Residenceinn' },
  { src: (imagen7), alt: 'Imagen 7', link: '/WaldofA' },
  { src: (imagen8), alt: 'Imagen 8', link: '/Sheraton' },
];

const Hospedaje = () => {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <div className="image" key={index}>
           <a href={image.link}>
          <img src={image.src} alt={image.alt} /></a>
        </div>
      ))}
    </section>
  );
};

export default Hospedaje;
