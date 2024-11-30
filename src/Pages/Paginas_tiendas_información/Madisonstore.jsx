import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/madison-store.png'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Tienda, Madison Store</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Ropa, calzado, accesorios .</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Varias sucursales en Panamá.</p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es una cadena de tiendas de ropa que ha logrado expandirse por todo Panamá. Se caracteriza por ofrecer moda actual a precios accesibles. Ha desarrollado una fuerte presencia en centros comerciales.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;