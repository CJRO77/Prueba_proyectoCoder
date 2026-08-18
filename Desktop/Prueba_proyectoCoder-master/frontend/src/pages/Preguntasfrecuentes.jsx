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

export default function FAQ() {
  return (
    <>
      <main>
      
        <section>
          <div className="servicios">
            <h1>Preguntas Frecuentes</h1>
            <p>
              A continuación, encontrarás respuestas a las preguntas más comunes que recibimos. Si tienes alguna otra duda,
              no dudes en contactarnos.
            </p>
          </div>
        </section>

        // SECCIÓN DE PREGUNTAS FRECUENTES
        <section>
          <div className="accordion">
            <div className="accordion-item">
              <input type="checkbox" id="q1" />
              <label className="accordion-title" htmlFor="q1">¿Con qué frecuencia debo hacer el cambio de aceite?</label>
              <div className="accordion-content">
                <p><strong>Se recomienda cambiar el aceite cada 5,000 a 7,500 kilómetros, pero consulta el manual de tu vehículo.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q2" />
              <label className="accordion-title" htmlFor="q2">¿Qué tipo de reparaciones ofrece la empresa?</label>
              <div className="accordion-content">
                <p><strong>Ofrecemos mantenimiento básico, servicio de detallado y mecánica ligera.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q3" />
              <label className="accordion-title" htmlFor="q3">¿Cómo sé si mi vehículo necesita reparación?</label>
              <div className="accordion-content">
                <p><strong>Si notas ruidos extraños, pérdida de rendimiento o luces de advertencia, tráelo para una evaluación.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q4" />
              <label className="accordion-title" htmlFor="q4">¿Presupuesto sin ver el vehículo?</label>
              <div className="accordion-content">
                <p><strong>Podemos dar una estimación general, pero un diagnóstico preciso requiere una inspección física.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q5" />
              <label className="accordion-title" htmlFor="q5">¿Ofrecen detallado a domicilio?</label>
              <div className="accordion-content">
                <p><strong>Sí, ofrecemos servicios de detallado a domicilio para tu mayor comodidad.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q6" />
              <label className="accordion-title" htmlFor="q6">¿Frecuencia para detallado general?</label>
              <div className="accordion-content">
                <p><strong>Se recomienda cada 3 a 6 meses, dependiendo del uso del vehículo.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q7" />
              <label className="accordion-title" htmlFor="q7">¿El detallado elimina rayones?</label>
              <div className="accordion-content">
                <p><strong>Mejora rayones superficiales, pero los profundos pueden requerir reparaciones adicionales.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q8" />
              <label className="accordion-title" htmlFor="q8">¿Qué garantía ofrecen?</label>
              <div className="accordion-content">
                <p><strong>Ofrecemos garantía de satisfacción; si no estás satisfecho, resolveremos cualquier problema.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="q9" />
              <label className="accordion-title" htmlFor="q9">¿Es necesario turno para evaluación?</label>
              <div className="accordion-content">
                <p><strong>Sí, recomendamos agendar una cita para asegurar una atención oportuna.</strong></p>
              </div>
            </div>
          </div>
        </section>

      
        <section className="contacto">
          <div className="contacto-centro">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna pregunta o necesitas más información?</p>
            <div className="info-contacto">
              <p><i className="bi bi-telephone-forward"></i> <a href="tel:+5491112345678">+54 9 11 1234 5678</a></p>
              <p><i className="bi bi-envelope-open"></i> <a href="mailto:autostudio.ve@gmail.com">autostudio.ve@gmail.com</a></p>
              <p><i className="bi bi-geo-alt"></i> Av. Centenario, San Isidro, Argentina</p>
            </div>
          </div>
        </section>

      
        <section className="contenedor2">
          <div className="container01">
            <img src="/img/auto detailing.png" alt="Mecánica y detailing" className="mi-imagen" />
          </div>
          <div className="mi-caja">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Tu email" required />
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="5" placeholder="Tu mensaje"></textarea>
              <button type="submit"><i className="bi bi-send"></i> SOLICITAR SERVICIO</button>
            </form>
          </div>
        </section>
      </main>

      <FooterLocal />
    </>
  );
}