import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/santa-maria.jpg'

const Info = () => {
    return (
      <div>
        <h1>Hotel, Santa Maria</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Fecha de fundación</strong>
            <p>2018</p>
          </li>
  
          <li>
            <strong>Ubicación</strong>
            <p>Santa María Golf & Country Club, Ciudad de Panamá</p>
          </li>
  
          <li>
            <strong>Precio Regular por Habitación/Noche</strong>
            <p>$280</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;