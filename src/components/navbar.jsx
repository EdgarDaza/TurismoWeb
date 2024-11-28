
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <Link to="/Lugares_a_visitar">Lugares a Visitar</Link>
      </li>
      <li>
        <a href="/Eventos">Eventos</a>
      </li>
      <li>
        <a href="/Gastronomia">Gastronomia</a>
      </li>
      <li>
        <a href="/Tiendas">Tiendas</a>
      </li>
      <li>
        <a href="/Hospedaje">Hospedaje</a>
      </li>
    </ul>
  </div>
  
</nav>
);
};

export default Navbar;

