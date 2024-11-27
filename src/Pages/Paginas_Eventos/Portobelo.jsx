import './Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Portobelo.png';
import React from 'react';

const Panamalavieja = () => {
  return (
    <div>
      <h1>Portobelo, Colón</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Ciudad con una rica historia colonial, conocida por sus fortalezas y ruinas. Fue un importante puerto durante la época colonial española.
        </li>
        <li>
          <strong>Historia:</strong>
          Fundada en el siglo XVI, Portobelo fue uno de los principales puertos de la ruta del oro y la plata desde las Américas hacia España.
        </li>
      </ul>

    </div>
  );
};



export default Panamalavieja;
