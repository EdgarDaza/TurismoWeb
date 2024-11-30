import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/tamal.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Tamal</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Plato originario de Mesoamérica, elaborado con masa de maíz, relleno de carne, verduras o frijoles, envuelto en hojas de maíz o plátano.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Preparar la masa de maíz con manteca, sal y caldo.<br></br> 
            2. Elaborar el relleno deseado.<br></br> 
            3. Rellenar las hojas con la masa y cocinar al vapor.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;