import { useState } from "react";
import Logo_central from "./components/Logo_central";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="container">
       <Logo_central/>
      <Header theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     

      <Footer />
      </div>
  );
}

export default App;






























