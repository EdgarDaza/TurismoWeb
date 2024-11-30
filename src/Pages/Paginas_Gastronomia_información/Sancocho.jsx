import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/sancocho.jpg'

const Info = () => {
    return (
      <div>
        <h1>Sancocho</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Sopa tradicional de muchos países latinoamericanos, elaborada con diferentes tipos de carnes, verduras y tubérculos.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Sofreír cebolla, ajo y sofrito en aceite.<br></br> 
            2. Agregar trozos de carne (res, cerdo, pollo) y cocinar hasta dorar.<br></br> 
            3. Incorporar yuca, ñame, plátano, maíz y otras verduras.<br></br> 
            4. Cubrir con agua y cocinar a fuego bajo hasta que todos los ingredientes estén suaves.<br></br> 
            5. Condimentar con sal, pimienta y otros condimentos al gusto.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;