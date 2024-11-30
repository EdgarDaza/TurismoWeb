import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/full-drop.jpeg'

const Info = () => {
    return (
      <div>
        <h1>Tienda, Full drop</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Ropa, calzado, accesorios.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Av. Central, David </p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es una tienda de moda que se estableció en David. Se enfoca principalmente en ropa y accesorios con tendencias actuales. Ha ganado popularidad entre el público joven por sus estilos modernos. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;