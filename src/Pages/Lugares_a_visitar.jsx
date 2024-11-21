import './Lugares_a_visitar.css';
import React from 'react';
import imagen1 from '../assets/lugaresAvisitar/Boquete-parque.png'
import imagen2 from '../assets/lugaresAvisitar/Canal-panama.jpeg'
import imagen3 from '../assets/lugaresAvisitar/Casco-antiguo.png'
import imagen4 from '../assets/lugaresAvisitar/Cerra-punta.jpeg'
import imagen5 from '../assets/lugaresAvisitar/Isla-Coiba.png'
import imagen6 from '../assets/lugaresAvisitar/Panama-vieja.png'
import imagen7 from '../assets/lugaresAvisitar/Portobelo.png'
import imagen8 from '../assets/lugaresAvisitar/San-Blas.jpeg'


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



