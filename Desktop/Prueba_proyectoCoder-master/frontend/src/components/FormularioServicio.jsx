import { useState } from "react";
import Swal from 'sweetalert2';

export default function FormularioServicio() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviarSolicitud(e) {
    e.preventDefault();
    
    // Lógica de envío...
    const solicitudPresupuesto = { nombre, email, mensaje };
    console.log("Solicitud de presupuesto enviada:", solicitudPresupuesto);

    // SweetAlert2 en lugar del alert tradicional
    Swal.fire({
      title: '¡Mensaje enviado!',
      text: `Gracias ${nombre}, hemos recibido tu solicitud.`,
      icon: 'success',
      confirmButtonColor: 'rgb(14, 246, 107)', // O el color que combine con tu web
      background: '#1a1a1a',      // Estilo oscuro para que combine
      color: '#fff',
      confirmButtonText: 'Entendido'
    });
    
    // Limpiamos los campos
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <div className="mi-caja" data-aos="flip-left">
      <form id="formContacto" onSubmit={enviarSolicitud}>
        
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Escribe tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          <i className="bi bi-send"></i> SOLICITAR SERVICIO
        </button>
      </form>
    </div>
  );
}