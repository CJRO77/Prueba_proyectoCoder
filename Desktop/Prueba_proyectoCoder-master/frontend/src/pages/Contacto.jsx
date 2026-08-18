function FooterLocal() {
  return (

    // Footer local integrado
    
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

export default function Contacto() {
  return (
    <>
      <main>
    
        <section className="servicios">
          <h1>Contacta con nosotros</h1>
        </section>

        // MAPA DE UBICACIÓN
        <div className="map-container" data-aos="zoom-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.634632622769!2d-58.53095602455067!3d-34.49037858046859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e6f5e8b8b7%3A0x6c4c9e4e8e4e8e4e!2sAv.%20Centenario%20500%2C%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1700000000000!5m2!1ses-419!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de MECANICA.VE"
          ></iframe>
        </div>

      
        <section className="espacio" data-aos="fade-up">
          <div>
            <p>¿Tienes alguna pregunta o necesitas más información?</p>
          </div>
        </section>

    
        <section className="contacto">
          <div className="contacto-centro" data-aos="fade-up">
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
            <a href="#">
              <img src="/img/auto detailing.png" alt="mecanica y detailing" className="mi-imagen" />
            </a>
          </div>

          <div className="mi-caja" data-aos="fade-left">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Tu email" required />

              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Tu mensaje"></textarea>

              <button type="submit">
                <i className="bi bi-send"></i> SOLICITAR UN SERVICIO
              </button>
            </form>
          </div>
        </section>
      </main>

      <FooterLocal />
    </>
  );
}