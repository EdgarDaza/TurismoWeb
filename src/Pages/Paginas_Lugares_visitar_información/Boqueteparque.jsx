import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Boquete-parque.png';
import React from 'react';

const Boqueteparque = () => {
  return (
    <div>
      <h1>Boquete, Chiriquí</h1>

      <img src={imagen} alt="Boquete Parque" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong> Conocido por su clima fresco, exuberante vegetación y diversas actividades al aire libre como senderismo, rafting y observación de aves. Es un destino popular para los amantes de la naturaleza.
        </li>
        <li>
          <strong>Historia:</strong> Fundado por inmigrantes estadounidenses a finales del siglo XIX, Boquete se desarrolló como un centro agrícola y se convirtió en un destino turístico a mediados del siglo XX gracias a su belleza natural.
        </li>
      </ul>

    </div>
  );
};



export default Boqueteparque;
