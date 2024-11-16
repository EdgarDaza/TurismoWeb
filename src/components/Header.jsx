import React from 'react'
import './Navbar.css'
import LogoN from '../assets/LogoN.png'
import logwhite from '../assets/logwhite.png'
import { Icon } from '@iconify/react';
import Navbar from './navbar';

const Header = ({theme, setTheme}) => {
    
  return (
    <div className='header'>

      <ul><li><Navbar></Navbar></li></ul>
           <Icon icon="line-md:light-dark-loop" />
      
    </div>
  )
}

export default Header
