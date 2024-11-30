import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Casco-antiguo.png';


const Cascoantiguo = () => {
  return (
    <div className='info-container'>
      <h1>Casco Antiguo, Panamá</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Centro histórico de la Ciudad de Panamá, declarado Patrimonio de la Humanidad por la UNESCO. Combina arquitectura colonial española con edificios modernos, ofreciendo una rica mezcla cultural.
        </li>
        <li>
          <strong>Historia:</strong>
          Fundado en el siglo XVI, el Casco Antiguo fue destruido en gran parte por un terremoto en 1671. Fue reconstruido y se convirtió en un importante centro comercial y administrativo.
        </li>
      </ul>

    </div>
  );
};



export default Cascoantiguo;
