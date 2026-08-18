import { Link } from "react-router-dom";
import Logo from "./Logo"; // Importamos el logo

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark px-4">
      <div className="container-fluid">
        {/* Aquí integramos el componente Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Logo />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/servicios">Servicios</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sobrenosotros">Sobre Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/preguntasfrecuentes">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;