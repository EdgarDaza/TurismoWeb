import React from 'react'
import './Navbar.css'
import LogoN from '../assets/LogoN.png'
import logwhite from '../assets/logwhite.png'
import { Icon } from '@iconify/react';

const Header = ({theme, setTheme}) => {
    
  return (
    <div className='header'>

      <img src={logwhite} alt="" className='logo'/>
      <ul> 
        <li>Lugares a visitar</li>
        <li>Eventos</li>
        <li>Gastronomía</li>
        <li>Tiendas</li>
        <li>Hospedaje</li>
      </ul>
      <Icon icon="line-md:light-dark-loop" />
      
    </div>
  )
}

export default Header
