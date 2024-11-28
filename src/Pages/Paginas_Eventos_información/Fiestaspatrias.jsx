import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Fiestras-patrias.jpeg'

import React from 'react';

const Info = () => {
  return (
    <div>
      <h1>Fiestas Patrias</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Desfiles cívicos, actividades culturales, ferias.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>A nivel nacional.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>Fiestas Patrias. Desfiles cívicos, actividades culturales, ferias	A nivel nacional	3, 4 y 5 de noviembre.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;