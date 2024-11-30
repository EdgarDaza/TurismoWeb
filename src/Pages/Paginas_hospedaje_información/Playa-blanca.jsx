import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/playa-blanca.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Hotel, Playa Blanca</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2007</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Farallón, Provincia de Coclé</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$190</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;