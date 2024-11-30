import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/waldof-a.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Hotel, Walfof Astoria Panamá</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2020</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Calle Uruguay, Ciudad de Panamá</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$350</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;