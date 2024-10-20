
import Navbar from './navbar'
import './App.css'
import './Navbar.css';
import Video2 from './assets/Turismo2.mp4'

function App() {
  

  return (
    <>
    <Navbar/>
    
    <video src={Video2} width="950" height="700" controls>
    Tu navegador no es compatible con videos HTML5
   </video> 
      <h1>¡HISTORIA!</h1>
      
      <p className="read-the-docs">
      Cruce de caminos, centro de comercio marítimo, unión de dos subcontinentes, Hub de las Américas. Son muchos los eslóganes que sirven para definir Panamá, y todos aluden a lo mismo: el Canal. Esta maravilla de la ingeniería, aunque relativamente reciente en su historia, ha puesto al país en el mapa económico mundial. Hace tres millones de años, tras unos años de movimientos tectónicos y actividad volcánica, surgió una estrecha franja de tierra llamada istmo que separó las aguas del Caribe y del Pacífico y a la vez unió las masas continentales de América del Norte y del Sur.

Sin embargo, actualmente Panamá es un país que ya no sólo encuentra su razón de ser en su famoso canal, si no que se esfuerza por atraer cada vez más turismo. Panamá es mucho más que el canal; es playa, es montaña, es selva, es cultura, y es, sobre todo, uno de los países con mayor biodiversidad que se hayan visto jamás. Descubre las maravillas que ofrece explorando este rincón del internet.
      </p>
      
    </>
  )
}

export default App
