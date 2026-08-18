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

export default function Servicios() {
  // Inicialización de animaciones AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <main>
       
        <section className="servicios">
          <div>
            <h1>Nuestros Servicios</h1>
          </div>
        </section>

       // SECCIÓN DE SERVICIOS DESTACADOS
        <section className="grid-container">
          <div className="grid-item img-1" data-aos="fade-up">
            <img src="/img/limpieza profunda.jpg" alt="Limpieza interior" />
            <h2>Detalles interiores y limpieza profunda</h2>
          </div>
          <div className="grid-item img-2" data-aos="fade-up" data-aos-delay="100">
            <img src="/img/reparaciones electricas.jpg" alt="Reparación eléctrica" />
            <h2>Reparación de sistemas eléctricos</h2>
          </div>
          <div className="grid-item img-3" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/pulituras.jpg" alt="Pulitura de ópticas" />
            <h2>Detalles exteriores con pulitura de ópticas</h2>
          </div>
          <div className="grid-item img-4" data-aos="fade-up" data-aos-delay="300">
            <img src="/img/correccion.jpg" alt="Corrección de pintura" />
            <h2>Corrección de pintura y pulitura vehicular</h2>
          </div>
          <div className="grid-item img-5" data-aos="fade-up" data-aos-delay="400">
            <img src="/img/diagnostico.jpg" alt="Diagnóstico motor" />
            <h2>Diagnóstico y reparación de motores</h2>
          </div>
          <div className="grid-item img-6" data-aos="fade-up" data-aos-delay="500">
            <img src="/img/suspension y frenos.jpg" alt="Suspensión y frenos" />
            <h2>Suspensión y servicios de frenos</h2>
          </div>
        </section>

      
        <section className="contacto">
          <div className="contacto-centro">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte.</p>
            <div className="info-contacto">
              <p><i className="bi bi-telephone-forward"></i> <a href="tel:+5491112345678">+54 9 11 1234 5678</a></p>
              <p><i className="bi bi-envelope-open"></i> <a href="mailto:autostudio.ve@gmail.com">autostudio.ve@gmail.com</a></p>
              <p><i className="bi bi-geo-alt"></i> Av. Centenario, San Isidro, Argentina</p>
              <p><i className="bi bi-clock-history"></i> Lun - Vie: 9:00 - 18:00 Hrs</p>
            </div>
          </div>
        </section>

       
        <section className="contenedor2">
          <div className="container01">
            <a href="#">
              <img src="/img/auto detailing.png" alt="Mecánica" className="mi-imagen" />
            </a>
          </div>
          <FormularioServicio />
        </section>
      </main>

      <FooterLocal />
    </>
  );
}