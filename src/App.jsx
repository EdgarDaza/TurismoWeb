import { useState } from "react";
import Logo_central from "./components/Logo_central";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Lugares_a_visitar from "./Pages/Lugares_a_visitar";
import Eventos from "./Pages/eventos";
import Gastronomia from "./Pages/Gastronomia";
import Tiendas from "./Pages/Tiendas";
import Hospedaje from "./Pages/Hospedaje";

const App = () => {
  const [theme, setTheme] = useState('light');


  return (
    <div className="container">
       <Logo_central/>
      <Header theme={theme} setTheme={setTheme} />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Lugares_a_visitar" element={<Lugares_a_visitar/>} />
        <Route path="/Eventos" element={<Eventos/>} />
        <Route path="/Gastronomia" element={<Gastronomia/>} />
        <Route path="/Tiendas" element={<Tiendas/>} />
        <Route path="/Hospedaje" element={<Hospedaje/>} />
      </Routes>
     

      <Footer />
      </div>
  );
}

export default App;

































