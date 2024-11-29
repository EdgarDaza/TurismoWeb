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

//Canales de Lugares a Visitar
import Boqueteparque from "./Pages/Paginas_Lugares_visitar_información/Boqueteparque";
import Canalpanama from "./Pages/Paginas_Lugares_visitar_información/Canalpanama";
import Cascoantiguo from "./Pages/Paginas_Lugares_visitar_información/Cascoantiguo";
import Cerropunta from "./Pages/Paginas_Lugares_visitar_información/CerroPunta";
import Islacoiba from "./Pages/Paginas_Lugares_visitar_información/Islacoiba";
import Panamalavieja from "./Pages/Paginas_Lugares_visitar_información/Panamalavieja";
import Portobelo from "./Pages/Paginas_Lugares_visitar_información/Portobelo";
import Isladesanblas from "./Pages/Paginas_Lugares_visitar_información/Isladesanblas";

//Canales de eventos
import Cabalgata from "./Pages/Paginas_Eventos_información/Cabalgata";
import Carnavales from "./Pages/Paginas_Eventos_información/Carnavales";
import Comiccon from "./Pages/Paginas_Eventos_información/Comiccon";
import Corpuschristi from "./Pages/Paginas_Eventos_información/Corpuschristi";
import Desfilesdelasmilpolleras from "./Pages/Paginas_Eventos_información/Desfilesdelasmilpolleras";
import Fiestaspatrias from "./Pages/Paginas_Eventos_información/Fiestaspatrias";
import Panamajazzfestival from "./Pages/Paginas_Eventos_información/Panamajazzfestival";
import Semanasanta from "./Pages/Paginas_Eventos_información/Semanasanta";


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
      

        //Lugares a visitar
        <Route path="/Boqueteparque" element={<Boqueteparque/>} />
        <Route path="/Canalpanama" element={<Canalpanama/>} />
        <Route path="/Cascoantiguo" element={<Cascoantiguo/>} />
        <Route path="/CerroPunta" element={<Cerropunta/>} />
        <Route path="/Islacoiba" element={<Islacoiba/>} />
        <Route path="/Panamalavieja" element={<Panamalavieja/>} />
        <Route path="/Portobelo" element={<Portobelo/>} />
        <Route path="/Isladesanblas" element={<Isladesanblas/>} />
        
        //Lugares a Eventos
        <Route path="/Cabalgata" element={<Cabalgata/>} />
        <Route path="/Carnavales" element={<Carnavales/>} />
        <Route path="/Comiccon" element={<Comiccon/>} />
        <Route path="/Corpuschristi" element={<Corpuschristi/>} />
        <Route path="/Desfilesdelasmilpolleras" element={<Desfilesdelasmilpolleras/>} />
        <Route path="/Fiestaspatrias" element={<Fiestaspatrias/>} />
        <Route path="/Panamajazzfestival" element={<Panamajazzfestival/>} />
        <Route path="/Semanasanta" element={<Semanasanta/>} />
        </Routes>  

      <Footer />
      </div>
  );
}

export default App;

































