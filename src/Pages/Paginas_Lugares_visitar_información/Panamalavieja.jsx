import '../Formatos/Formato_perfiles_noticias.css';
import imagen from '../../assets/lugaresAvisitar/Panama-vieja.png';
import React from 'react';

const Panamalavieja = () => {
  return (
    <div>
      <h1>Panamá La Vieja, Panamá</h1>

      <img src={imagen} alt="Cascoantiguo" className="imagen-principal" />


      <ul>
        <li>
          <strong>Descripción:</strong>
          Ruinas de la primera ciudad europea en el Pacífico americano. Ofrece una ventana al pasado colonial de Panamá. 
        </li>
        <li>
          <strong>Historia:</strong>
          Fundada en 1519, Panamá La Vieja fue saqueada y destruida por piratas en 1671.
        </li>
      </ul>

    </div>
  );
};



export default Panamalavieja;
