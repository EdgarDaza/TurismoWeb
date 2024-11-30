import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/San-Blas.jpeg';


const Isladesanblas = () => {
  return (
    <div className='info-container'>
      <h1>Isla de San Blas, Guna Yala</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Archipiélago compuesto por más de 365 islas, habitado por la comunidad indígena Guna. Ofrece playas paradisíacas, aguas cristalinas y una cultura única.
        </li>
        <li>
          <strong>Historia:</strong>
          Las islas de San Blas han sido habitadas por los Guna desde tiempos ancestrales. Su cultura y tradiciones se han mantenido relativamente intactas.
        </li>
      </ul>

    </div>
  );
};



export default Isladesanblas;
