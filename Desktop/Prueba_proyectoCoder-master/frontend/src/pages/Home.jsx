import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardServicio from "../components/CardServicio";
import FormularioServicio from "../components/FormularioServicio";

// Footer local integrado

function FooterLocal() {
  return (
    <footer id="redes"> 
      <a href="https://www.instagram.com/c.jonathan.o" target="_blank" rel="noreferrer"> 
        <i className="bi bi-instagram"></i> 
      </a> 
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> 
        <i className="bi bi-facebook"></i> 
      </a> 
      <a href="https://twitter.com/" target="_blank" rel="noreferrer"> 
        <i className="bi bi-twitter-x"></i> 
      </a> 
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"> 
        <i className="bi bi-youtube"></i> 
      </a> 
    </footer>
  );
}

export default function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const obtenerServicios = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/servicios");
        const data = await response.json();
        setServicios(data);
      } catch (error) {
        console.log("Error al obtener servicios:", error);
      }
    };
    obtenerServicios();
  }, []);

  return (
    
    <>
      <main>
       
        <section className="page-home">
          <div className="titulos" data-aos="fade-right">
            <p>
              Bienvenidos a tu taller de confianza donde nos especializamos en mecánica automotriz ligera y detailing profesional.
            </p>
          </div>
        </section>

       
        <section className="container-servicios">
          <div className="flex-container">
            {servicios.map((servicio) => (
              <CardServicio
                key={servicio.id || servicio._id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                imagen={servicio.imagen}
              />
            ))}
          </div>
        </section>

      
        <section>
          <div className="titulos" data-aos="fade-left">
            <p>Combinamos experiencia técnica, innovación y compromiso con la excelencia.</p>
          </div>
        </section>

        // FORMULARIO DE CONTACTO

        <section className="contacto" data-aos="fade-up">
          <div className="contacto-centro">
            <h2>Contáctanos</h2>
            <p>Estamos listos para ayudarte con todas tus necesidades automotrices.</p>
            <div className="info-contacto">
              <p><i className="bi bi-telephone-forward"></i><a href="tel:+5491112345678"> +54 9 11 1234 5678</a></p>
              <p><i className="bi bi-envelope-open"></i><a href="mailto:autostudio.ve@gmail.com"> autostudio.ve@gmail.com</a></p>
              <p><i className="bi bi-geo-alt"></i> Av. Centenario, San Isidro</p>
              <p><i className="bi bi-clock-history"></i> Lun - Vie: 9:00 - 18:00 Hrs</p>
            </div>
            
            <a href="https://wa.me/5491112345678" className="whatsapp-box" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
              <div>
                <span>Escríbenos</span>
                <p>Atención rápida por WhatsApp</p>
              </div>
            </a>
          </div>
        </section>

       
        <section className="contenedor2">
          <div className="container01" data-aos="fade-right">
            <img src="/img/auto detailing.png" alt="Auto detailing" className="mi-imagen" />
          </div>

          <FormularioServicio />
        </section>
      </main>

     
      <FooterLocal />
    </>
  );
}