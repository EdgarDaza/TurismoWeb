import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/eventos/Corpus-cristi.jpg'

import React from 'react';

const Info = () => {
  return (
    <div>
      <h1>Corpus Christi</h1>

      <img src={imagen} alt="No imagen" className="imagen-principal" />


      <ul>
        <li>
          <strong>¿Qué se hace?</strong>
          <p>Procesión religiosa, alfombras florales.</p>
        </li>

        <li>
          <strong>¿Donde se celebra?</strong>
          <p>A nivel nacional, especialmente en ciudades con fuerte tradición católica.</p>
        </li>

        <li>
          <strong>Fecha de celebración:</strong>
          <p>60 días después del Domingo de Resurrección.</p>
        </li>


      </ul>

    </div>
  );
};



export default Info;