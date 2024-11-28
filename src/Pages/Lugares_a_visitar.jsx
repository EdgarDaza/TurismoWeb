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

  { src: (imagen1), alt: 'Imagen 1' , link:'/Boqueteparque'},
  { src: (imagen2), alt: 'Imagen 2' , link: '/Canalpanama' },
  { src: (imagen3), alt: 'Imagen 3' , link: '/Cascoantiguo' },
  { src: (imagen4), alt: 'Imagen 4' , link: '/CerroPunta'},
  { src: (imagen5), alt: 'Imagen 5' , link: '/Islacoiba'},
  { src: (imagen6), alt: 'Imagen 6' , link: '/Panamalavieja'},
  { src: (imagen7), alt: 'Imagen 7' , link: '/Portobelo'},
  { src: (imagen8), alt: 'Imagen 8' , link: '/Isladesanblas'},

  

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



