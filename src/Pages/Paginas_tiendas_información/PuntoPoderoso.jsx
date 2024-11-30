import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/punto-poderoso.png'

const Info = () => {
    return (
      <div>
        <h1>Tienda, Punto Poderoso</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Alimentos, productos de limpieza, hogar, ropa, calzado.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Cerca de Ave. 4a Este, David</p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es un negocio local de David que ha servido a la comunidad durante años. Comenzó como una pequeña tienda y ha crecido para ofrecer una amplia variedad de productos. Se ha mantenido como una opción popular para compras del hogar. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;