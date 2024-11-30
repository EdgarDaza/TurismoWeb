import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Comic-con.jpeg'


const Info = () => {
  return (
    <div className='info-container'>
      <h1>Comic Con Panamá</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Convención de cómics, anime, manga, videojuegos y cultura pop.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>Ciudad de Panamá.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>Generalmente a mediados de año.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;