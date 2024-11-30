import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/conway.jpeg'

const Info = () => {
    return (
      <div>
        <h1>Tienda, Conway</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Ropa, calzado, accesorios.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Plaza Terronal, David</p>
          </li>
          
          <li>
            <strong>Descripción:</strong>
            <p>Es una cadena de tiendas por departamentos que ha estado presente en Panamá por varios años 
               Se especializa en ropa casual y formal para toda la familia a precios accesibles 
               Ha logrado expandirse a varias ubicaciones en el país, incluyendo su presencia en David.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;