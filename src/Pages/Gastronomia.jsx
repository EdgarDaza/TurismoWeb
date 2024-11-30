
import './gastronomia.css';
import imagen1 from '../assets/gastronomia/arroz-con-pollo.jpg';
import imagen2 from '../assets/gastronomia/sancocho.jpg';
import imagen3 from '../assets/gastronomia/hojaldra.jpg';
import imagen4 from '../assets/gastronomia/pescado-con-patacones.jpg';
import imagen5 from '../assets/gastronomia/bienmesabe.jpg';
import imagen6 from '../assets/gastronomia/plantinta.jpg';
import imagen7 from '../assets/gastronomia/mono.jpg';
import imagen8 from '../assets/gastronomia/tamal.jpg';


const images = [
  { src: (imagen1), alt: 'Imagen 1', link: '/Arrozconpollo' },
  { src: (imagen2), alt: 'Imagen 2', link: '/Sancocho' },
  { src: (imagen3), alt: 'Imagen 3', link: '/Hojaldra' },
  { src: (imagen4), alt: 'Imagen 4', link: '/PescadoconPatacones' },
  { src: (imagen5), alt: 'Imagen 5', link: '/Bienmesabe' },
  { src: (imagen6), alt: 'Imagen 6', link: '/Plantinta'},
  { src: (imagen7), alt: 'Imagen 7', link: '/Mono' },
  { src: (imagen8), alt: 'Imagen 8', link: '/Tamal' },
];

const Gastronomia = () => {
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

export default Gastronomia;
