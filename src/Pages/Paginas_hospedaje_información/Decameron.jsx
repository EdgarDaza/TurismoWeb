import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/decameron.jpg'

const Info = () => {
    return (
      <div>
        <h1>Hotel, Decameron</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2000</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Farallón, Río Hato</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$200</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;