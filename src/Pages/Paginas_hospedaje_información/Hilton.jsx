import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/hilton.jpg'

const Info = () => {
    return (
      <div>
        <h1>Hotel, Hilton</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2012 </p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Avenida Balboa, Ciudad de Panamá</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$220</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;