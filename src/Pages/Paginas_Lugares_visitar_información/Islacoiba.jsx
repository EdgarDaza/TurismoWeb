import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Isla-Coiba.png';
import React from 'react';

const Islacoiba = () => {
  return (
    <div>
      <h1>Isla Coiba, Veraguas</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Parque Nacional Marino, hogar de una gran diversidad biológica, incluyendo especies endémicas. Es un paraíso para los buceadores y amantes de la vida marina.
        </li>
        <li>
          <strong>Historia:</strong>
          Fue una prisión de máxima seguridad durante muchos años, lo que ha dejado una huella histórica en la isla.
        </li>
      </ul>

    </div>
  );
};



export default Islacoiba;
