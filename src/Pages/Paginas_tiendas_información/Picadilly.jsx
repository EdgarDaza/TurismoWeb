import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/picadilly.png'

const Info = () => {
    return (
      <div>
        <h1>Tienda, Picadilly</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Ropa, calzado, accesorios </p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Panamá 507, San Bernardo, Región Metropolitana</p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es una tienda de moda que se ha establecido en el mercado panameño. Ofrece una selección de ropa y accesorios. Se ha enfocado en mantener precios competitivos en el mercado. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;