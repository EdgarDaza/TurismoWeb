import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Desfile-polleras.jpeg'

import React from 'react';

const Info = () => {
  return (
    <div>
      <h1>Desfiles De Las Mil Polleras</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Desfile de mujeres vestidas con la pollera, danza típica.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>A nivel nacional, con celebraciones destacadas en Las Tablas.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>Varias fechas a lo largo del año, especialmente en fechas festivas.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;