import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/Sobrenosotros";
import PreguntasFrecuentes from "./pages/Preguntasfrecuentes";

function App() {

  return (
    // Configuración de rutas con React Router

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/servicios"
          element={<Servicios />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />
        <Route
          path="/sobrenosotros"
          element={<SobreNosotros />}
        />

        <Route
          path="/preguntasfrecuentes"
          element={<PreguntasFrecuentes />}
        />

      </Routes>

      

    </BrowserRouter>

  );

}

export default App;