
import './Navbar.css';
import Logo from './assets/LogoN.png'
const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo" width="250" height="213">
    <img src={Logo} className="logo panama" alt="Panama logo" />
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/lugares">Lugares a Visitar</a>
      </li>
      <li>
        <a href="/Eventos">Eventos</a>
      </li>
      <li>
        <a href="/gastronomia">Gastronomía</a>
      </li>
      <li>
        <a href="/tiendas">Tiendas</a>
      </li>
      <li>
        <a href="/hospedaje">Hospedaje</a>
      </li>
    </ul>
  </div>
  
</nav>
);
};

export default Navbar;