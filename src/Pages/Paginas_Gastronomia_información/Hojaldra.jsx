import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/hojaldra.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Hojaldra</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Técnica de pastelería originaria de Francia. Consiste en superponer láminas de masa con mantequilla para obtener una textura crujiente y hojaldrada.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>La elaboración del hojaldre es un proceso más complejo y requiere de una técnica específica. Básicamente, se trabaja con una masa base y mantequilla, que se pliegan y estiran repetidamente.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;