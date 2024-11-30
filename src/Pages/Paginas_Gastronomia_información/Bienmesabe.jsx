import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/bienmesabe.jpg'

const Info = () => {
    return (
      <div className='info-container'>
        <h1>Bienmesabe</h1>
  
        <img src={imagen} alt="No imagen" className="imagen-principal" />
  
  
        <ul>
          <li>
            <strong>Historia de Su Origen</strong>
            <p>Dulce tradicional de Canarias, España. Su nombre proviene del sabor agradable que produce.</p>
          </li>
  
          
          <li>
            <strong>Receta:</strong>
            <p>1. Batir yemas de huevo con azúcar hasta obtener una crema.<br></br> 
            2. Agregar almendras molidas y ralladura de limón.<br></br>
            3. Montar claras a punto de nieve y mezclar suavemente con la crema anterior.<br></br>
            4. Verter en moldes individuales y refrigerar.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;