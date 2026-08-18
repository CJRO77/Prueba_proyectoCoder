import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FormularioServicio from "../components/FormularioServicio";

// Footer local integrado
function FooterLocal() {
  return (
    <footer id="redes">
      <a href="https://www.instagram.com/c.jonathan.o" target="_blank" rel="noreferrer" aria-label="Instagram CJRO">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://www.facebook.com/cjro" target="_blank" rel="noreferrer" aria-label="Facebook CJRO">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://twitter.com/cjro" target="_blank" rel="noreferrer" aria-label="Twitter CJRO">
        <i className="bi bi-twitter-x"></i>
      </a>
      <a href="https://www.youtube.com/@cjro" target="_blank" rel="noreferrer" aria-label="YouTube CJRO">
        <i className="bi bi-youtube"></i>
      </a>
    </footer>
  );
}

export default function SobreNosotros() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   
    <div className="app-container">
      
      
      <div className="content-wrap">
       
        <section className="servicios">
          <h1>Sobre Nosotros</h1>
        </section>

        // SECCIÓN DE HISTORIA Y DESCRIPCIÓN
        
        <section className="container mt-5 mb-5">
          <div className="d-flex flex-wrap align-items-center gap-4 justify-content-between">
            {/* COLUMNA DE TEXTO */}
            <div className="text" data-aos="fade-right" style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
              <h3>Nuestra Historia</h3>
              <p>
                Somos una empresa dedicada a la <strong>mecánica ligera</strong> y al{" "}
                <strong>servicio de detallado automotriz</strong>, con más de{" "}
                <strong>10 años de experiencia</strong> en el rubro.
              </p>
              <p>
                Nuestro taller nació con la misión de brindar un servicio confiable,
                rápido y de calidad para todos aquellos que buscan mantener sus vehículos
                en perfecto estado, tanto en el aspecto mecánico como en la estética.
              </p>
              <p>
                Gracias a la confianza de nuestros clientes, hemos crecido y nos hemos
                consolidado como un referente en la zona, combinando tecnología moderna
                con la dedicación de un equipo apasionado por los autos.
              </p>
            </div>

            // COLUMNA DE IMAGEN
            <div className="nosotros" data-aos="fade-left" style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}></div>
          </div>
        </section>

      
        <section className="contacto" data-aos="fade-up">
          <div className="contacto-centro">
            <h2>Contáctanos</h2>
            <p>
              ¿Tienes alguna pregunta o necesitas más información?
              No dudes en contactarnos. Estamos aquí para ayudarte con todas
              tus necesidades de mantenimiento y cuidado de vehículos.
            </p>

            <div className="info-contacto">
              <p><i className="bi bi-telephone-forward"></i> <a href="tel:+5491112345678">+54 9 11 1234 5678</a></p>
              <p><i className="bi bi-envelope-open"></i> <a href="mailto:autostudio.ve@gmail.com">autostudio.ve@gmail.com</a></p>
              <p><i className="bi bi-geo-alt"></i> Av. Centenario, San Isidro, Argentina</p>
              <p><i className="bi bi-clock-history"></i> Lun - Vie: 9:00 - 18:00 Hrs</p>
            </div>
          </div>
        </section>

        
        <section className="contenedor2">
          <div className="container01" data-aos="fade-right">
            <img src="/img/auto detailing.png" alt="mecanica y detailing" className="mi-imagen" />
          </div>
          <FormularioServicio />
        </section>
      </div>

     
      <FooterLocal />
    </div>
  );
}