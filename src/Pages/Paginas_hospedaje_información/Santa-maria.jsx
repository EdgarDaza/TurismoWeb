import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/hospedaje/santa-maria.jpg'

const Info = () => {
    return (
      <div>
        <h1>Cabalgata de Gualaca, Chiriqui</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué se hace?</strong>
            <p>Desfile a caballo, actividades culturales.</p>
          </li>
  
          <li>
            <strong>¿Donde se celebra?</strong>
            <p>Gualaca, Chiriquí.</p>
          </li>
  
          <li>
            <strong>Fecha de celebración:</strong>
            <p>Generalmente en fechas festivas locales.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;