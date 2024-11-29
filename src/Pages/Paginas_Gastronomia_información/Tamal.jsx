import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/gastronomia/tamal.jpg'

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
            <p>Generalmente en fechas festivas locales.</p>
          </li>
  
  
        </ul>
  
      </div>
    );
  };
  
  
  
  export default Info;