import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/sheraton.jpg'

const Info = () => {
    return (
      <div>
        <h1>Hotel, Sheraton</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2011</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>San Francisco, Ciudad de Panamá</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$210</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;