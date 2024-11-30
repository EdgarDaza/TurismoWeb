import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/el-costo.png'

const Info = () => {
    return (
      <div>
        <h1>Tienda, El Costo</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Alimentos, productos de limpieza, hogar, electrónica.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Federal Mall, David</p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es un supermercado que surgió como una alternativa económica para las familias panameñas. Se enfoca en ofrecer productos básicos de la canasta familiar a precios competitivos. Ha crecido desde sus inicios para incluir una mayor variedad de productos, incluyendo electrónica y artículos para el hogar. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;