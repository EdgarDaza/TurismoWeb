import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/plantinta.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Plantinta</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Plato típico de algunas regiones de Colombia, elaborado con plátano maduro sancochado y machacado.	</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Sancochar plátanos maduros hasta que estén suaves.<br></br> 
            2. Machacar los plátanos con un tenedor o pisón.<br></br> 
            3. Condimentar con sal y agregar queso rallado o mantequilla.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;