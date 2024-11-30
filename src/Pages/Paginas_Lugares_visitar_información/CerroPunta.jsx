import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Cerra-punta.jpeg';

const CerroPunta = () => {
  return (
    <div className='info-container'>
      <h1>Cerro Punta, Chiriquí</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Conocido por sus paisajes montañosos, plantaciones de café y hortalizas, y clima fresco. Es un destino ideal para los amantes del senderismo y la naturaleza.
        </li>
        <li>
          <strong>Historia:</strong>
          Cerro Punta se desarrolló como un centro agrícola en el siglo XX, aprovechando las condiciones climáticas favorables para el cultivo de productos de alta calidad.
        </li>
      </ul>

    </div>
  );
};



export default CerroPunta;
