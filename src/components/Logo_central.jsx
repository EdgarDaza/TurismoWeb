import React from 'react'
import './logo_central.css'
import Logo from '../assets/LogoTransparente.png'


const Logo_central = ({ theme, setTheme }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
        <img src={Logo} alt='No hay logo' className='logo-img' />
      </div>
    );
  }
  
  export default Logo_central;