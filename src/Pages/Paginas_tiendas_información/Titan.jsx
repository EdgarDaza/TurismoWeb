import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/tiendas/titan.png'

const Info = () => {
    return (
      <div>
        <h1>Tienda, Titan</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>¿Qué productos vende?</strong>
            <p>Ropa, calzado, accesorios.</p>
          </li>
  
          <li>
            <strong>Dirección de la sucursal</strong>
            <p>Federal Mall, David</p>
          </li>
  
          <li>
            <strong>Descripción:</strong>
            <p>Es una tienda por departamentos que ha estado presente en el mercado panameño. Ofrece una variedad de marcas nacionales e internacionales. Se ha posicionado en el mercado como una opción para ropa y calzado de calidad. </p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;