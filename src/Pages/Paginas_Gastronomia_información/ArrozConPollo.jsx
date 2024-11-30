import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/arroz-con-pollo.jpg'

const Info = () => {
    return (
      <div>
        <h1>Arroz Con Pollo</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Originario de España, pero con variaciones en muchas culturas. Se cree que los árabes introdujeron el arroz en la Península Ibérica.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Sofreír cebolla y ajo en aceite.<br></br> 
            2. Agregar trozos de pollo y cocinar hasta dorar.<br></br>
            3. Incorporar arroz y sofreír brevemente. 4. Agregar caldo de pollo y cocinar a fuego bajo hasta que el arroz esté tierno.<br></br> 
            5. Condimentar con sal, pimienta y otros condimentos al gusto.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;