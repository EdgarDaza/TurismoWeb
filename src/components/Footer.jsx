import './footer.css'
import Logo from '../assets/LogoTransparente.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className ='footer'>
          <div className='footer-container'>
            <div className="col">
                <img src={Logo} alt='Panama-logo' className='logo'></img>
            </div>

            <div className="col">
            <h4>Viajes Panamá</h4>
            <ul>
            <li><a href=''>Inicio</a></li><br></br>
            <li><a href=''>Hospedaje</a></li>
            </ul>
            </div>

            <div className="col">
            <h4>Información</h4>
            <ul>
            <li><a href=''>Cómo llegar</a></li><br></br>
            <li><a href=''>Consejo de viaje</a></li>
            </ul>
            </div>

            <div className="col social-section">
            <h4>Redes Sociales</h4>
            <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
            </div>

            <div className="col contact-section">
            <h4>Contacto</h4>
            <p>Correo: panamainfo@mail.com</p>
            <p>Teléfono: 775-1723 </p>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Copyright</p>
             </div>
        </div>
       
       
        </div>
    )
}