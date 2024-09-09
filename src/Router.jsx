import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Asegúrate de tener el componente Home importado
import Shows from "./components/Shows.jsx";
import Navbar from "./components/Navbar.jsx"; // Importa el Navbar
import Footer from "./components/Footer.jsx"; // Importa el Footer
import ScrollToTop from "./components/ScrollToTop.jsx";  // Importa tu componente
import About from "./components/About.jsx"
import Events from "./components/Events.jsx"
import Seminario from "./components/Seminario.jsx";


const RouterConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar se muestra en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/agenda" element={<Events />}/>
        <Route path="/seminario" element={<Seminario />} />
      </Routes>

      {/* Footer se muestra en todas las rutas */}
      <Footer />
    </Router>
  );
};

export default RouterConfig;
