import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/jw-marriot.jpg'

const Info = () => {
    return (
      <div>
        <h1>Hotel, JW-Marriot</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2018</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Calle 58 Este, Ciudad de Panamá </p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$250</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;