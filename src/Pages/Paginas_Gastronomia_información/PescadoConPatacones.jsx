import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/pescado-con-patacones.jpg'

const Info = () => {
    return (
      <div>
        <h1>Pescado con Patacones</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Plato común en muchos países latinoamericanos, consiste en pescado frito o asado acompañado de patacones (plátanos verdes fritos y aplastados).	</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Marinar el pescado con limón, ajo y especias.<br></br>
            2. Freír o asar el pescado.<br></br>
            3. Freír rodajas de plátano verde hasta que estén doradas.<br></br>
            4. Aplastar las rodajas fritas para formar los patacones.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;