import React from 'react';
import './tiendas.css';
import imagen1 from '../assets/tiendas/conway.jpeg'
import imagen2 from '../assets/tiendas/el-costo.png'
import imagen3 from '../assets/tiendas/full-drop.jpeg'
import imagen4 from '../assets/tiendas/madison-store.png'
import imagen5 from '../assets/tiendas/nevada.png'
import imagen6 from '../assets/tiendas/picadilly.png'
import imagen7 from '../assets/tiendas/punto-poderoso.png'
import imagen8 from '../assets/tiendas/titan.png'


const images = [
  { src: (imagen1), alt: 'Imagen 1', link: '/Conway' },
  { src: (imagen2), alt: 'Imagen 2', link: '/Elcosto' },
  { src: (imagen3), alt: 'Imagen 3', link: '/Fulldrop' },
  { src: (imagen4), alt: 'Imagen 4', link: '/Madisonstore' },
  { src: (imagen5), alt: 'Imagen 5', link: '/Nevada' },
  { src: (imagen6), alt: 'Imagen 6', link: '/Picadilly' },
  { src: (imagen7), alt: 'Imagen 7', link: '/PuntoPoderoso' },
  { src: (imagen8), alt: 'Imagen 8', link: '/Titan' },
];

const Tiendas = () => {
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

export default Tiendas;
