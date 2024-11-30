import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Carnavales.jpeg'



const Info = () => {
  return (
    <div>
      <h1>Carnavales</h1>

      <img src={imagen} alt="Boquete Parque" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Desfiles, comparsas, elección de reina</p>
        </li>
        <li>
          <strong>¿Donde se celebra?</strong>
          <p>A nivel nacional, con celebraciones destacadas en cada provincia.
          </p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>40 días antes del Miércoles de Ceniza.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;
