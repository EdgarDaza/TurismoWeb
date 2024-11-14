import React from 'react';
import Header from './components/Header';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import './Lugares_a_visitar.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Lugares_a_visitar() {
  return (
    

    <div className="App">
      <Header />
      <Galeria />
      <Footer />
    </div>


  );
}

export default Lugares_a_visitar;



