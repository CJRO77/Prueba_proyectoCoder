import { useState } from "react";
import { API_URL } from "../config";

const ESTADO_INICIAL = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export default function FormularioServicio() {
  const [datos, setDatos] = useState(ESTADO_INICIAL);
  const [enviando, setEnviando] = useState(false);
  const [resultado, setResultado] = useState(null); // { tipo: 'exito' | 'error', texto: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultado(null);

    if (!datos.nombre.trim() || !datos.email.trim() || !datos.mensaje.trim()) {
      setResultado({ tipo: "error", texto: "Por favor completá nombre, email y mensaje." });
      return;
    }

    setEnviando(true);

    try {
      const response = await fetch(`${API_URL}/api/contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setResultado({ tipo: "exito", texto: data.mensaje || "¡Mensaje enviado correctamente!" });
      setDatos(ESTADO_INICIAL);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setResultado({
       tipo: "error",
       texto: "Hubo un problema al enviar tu mensaje. Intentá de nuevo o escribinos por WhatsApp.",
  });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="mi-caja" onSubmit={handleSubmit}>
      <h2>Solicitá tu presupuesto</h2>

      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={datos.nombre}
        onChange={handleChange}
        placeholder="Tu nombre"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={datos.email}
        onChange={handleChange}
        placeholder="Tu email"
        required
      />

      <label htmlFor="telefono">Teléfono (opcional)</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        value={datos.telefono}
        onChange={handleChange}
        placeholder="Tu teléfono"
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={datos.mensaje}
        onChange={handleChange}
        placeholder="Cuéntanos tu consulta o presupuesto que necesitas"
        rows={4}
        required
      />

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar mensaje"}
      </button>

      {resultado && (
        <p className={`resultado-formulario resultado-${resultado.tipo}`}>{resultado.texto}</p>
      )}
    </form>
  );
}