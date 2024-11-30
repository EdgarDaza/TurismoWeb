import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/residence-inn.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Hotel, Residence Inn</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2016</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Costa del Este, Ciudad de Panamá</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$180</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;