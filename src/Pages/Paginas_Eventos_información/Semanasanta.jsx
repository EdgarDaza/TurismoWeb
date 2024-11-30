import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Viernes-santo.jpeg'

const Info = () => {
  return (
    <div className='info-container'>
      <h1>Semana Santa</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Procesiones religiosas, viacrucis.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>A nivel nacional.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>Semana antes del Domingo de Resurrección.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;