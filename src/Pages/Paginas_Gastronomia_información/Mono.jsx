import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/mono.jpg'

const Info = () => {
    return (
      <div>
        <h1>Mono</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Plato típico de la costa del Pacífico colombiano. Consiste en un pescado frito, generalmente corvina, acompañado de patacones y ensalada.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Limpiar y salpimentar el pescado.<br></br> 
            2. Freír el pescado hasta que esté dorado.<br></br> 
            3. Acompañar con patacones (plátanos verdes maduros fritos y aplastados) y una ensalada fresca (tomate, cebolla, cilantro).</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;