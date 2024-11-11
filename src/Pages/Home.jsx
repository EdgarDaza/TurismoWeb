import "./home.css";

export default function Home() {
  return (
    <main>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/jYdaQJzcAcw?si=wHE7c9d9PP9Gown-" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    ></iframe>

    <h1>¡HISTORIA!<br/></h1>

    <p className="info">
      Cruce de caminos, centro de comercio marítimo, unión de dos subcontinentes, Hub de las Américas. Son muchos los eslóganes 
      que sirven para definir Panamá, y todos aluden a lo mismo: el Canal. Esta maravilla de la ingeniería, aunque 
      relativamente reciente en su historia, ha puesto al país en el mapa económico mundial. Hace tres millones de años, 
      tras unos años de movimientos tectónicos y actividad volcánica, surgió una estrecha franja de tierra llamada istmo que separó 
      las aguas del Caribe y del Pacífico y a la vez unió las masas continentales de América del Norte y del Sur.<br/><br/>
    </p>

    <p className="info">
      Sin embargo, actualmente Panamá es un país que ya no sólo encuentra su razón de ser en su famoso canal, 
      si no que se esfuerza por atraer cada vez más turismo. Panamá es mucho más que el canal; es playa, es montaña, 
      es selva, es cultura, y es, sobre todo, uno de los países con mayor biodiversidad que se hayan visto jamás. 
      Descubre las maravillas que ofrece explorando este rincón del internet.
    </p>

    

    
  </main>
  );
}