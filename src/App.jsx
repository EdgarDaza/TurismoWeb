import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
     

      <Footer />
      </>
  );
}

export default App;






























