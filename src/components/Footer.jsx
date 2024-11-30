import './footer.css'
import Logo from '../assets/LogoTransparente.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className ='footer'>
          <div className='footer-container'>
            <div className="col">
              <a href='/'>
                <img src={Logo} alt='Panama-logo' className='logo'></img>
                </a>
            </div>

            <div className="col">
            <h4>Viajes Panamá</h4>
            <ul>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/Hospedaje'>Hospedaje</a></li>
            </ul>
            </div>

            <div className="col">
            <h4>Información</h4>
            <ul>
            <li><a href='https://www.google.com/maps/'target='_blank'>Cómo llegar</a></li>
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

            <div className='col'>
            <h4>Subscribete para Noticias y Novedades</h4>
            <form action="https://formsubmit.co/edgar.daza@utp.ac.pa" method="POST" >
              <input className="campo" type="text" name="name" placeholder="Nombre"></input>
              <input className="campo" type="email" name="email" placeholder="Correo"></input>
              <input type="hidden" name="_autoresponse" value="Te has suscrito a Panama Turismo Web."></input>
              <input className="btn-2" type="submit" value="Enviar"></input>

              
              
              
            </form>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Copyright</p>
             </div>
        </div>
       
       
        </div>
    )
}
