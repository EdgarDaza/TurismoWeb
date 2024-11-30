import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/nevada.png'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Tienda, Nevda</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Belleza y cuidado personal.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>CHHF+29H, David </p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es una tienda especializada en productos de belleza y cuidado personal. Ha desarrollado su presencia en David como una opción para productos especializados. Se enfoca en ofrecer una variedad de marcas de belleza y salud. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;