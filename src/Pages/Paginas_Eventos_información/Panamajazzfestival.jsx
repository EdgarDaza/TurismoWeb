import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Panama-jazz.png'

const Info = () => {
  return (
    <div>
      <h1>Panama Jazz Festival</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Festival de jazz con artistas nacionales e internacionales.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>Ciudad de Panamá.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>Generalmente a finales de año.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;