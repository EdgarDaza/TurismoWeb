import './formato_perfiles_noticias.css';
import imagen1 from '../../assets/lugaresAvisitar/Canal-panama.jpeg';
import React from 'react';

const Canalpanama = () => {
  return (
    <div>
      <h1>Canal de Panamá, Panamá</h1>

      <img src={imagen1} alt="Canal panama" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Una de las maravillas de la ingeniería moderna. Permite el paso de barcos entre el Océano Atlántico y el Pacífico, acortando significativamente las rutas marítimas.
        </li>
        <li>
          <strong>Historia:</strong>
          Su construcción, a principios del siglo XX, fue un proyecto monumental que cambió la geografía y la economía mundial.
        </li>
      </ul>

    </div>
  );
};



export default Canalpanama;
