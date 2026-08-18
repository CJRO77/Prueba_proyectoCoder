const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { leer, escribir, generarId } = require("../db");

const ARCHIVO = "mensajes.json";

// Validación simple de formato de email

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Configuración del transportador de email usando variables de entorno

function crearTransportador() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// POST: Recibir mensaje del formulario de contacto/presupuesto

router.post("/", async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      error: "Faltan campos obligatorios: nombre, email y mensaje son requeridos.",
    });
  }

  if (!esEmailValido(email)) {
    return res.status(400).json({ error: "El email ingresado no es válido." });
  }

  const mensajes = leer(ARCHIVO);
  const nuevoMensaje = {
    id: generarId(mensajes),
    nombre: nombre.trim(),
    email: email.trim(),
    telefono: telefono ? telefono.trim() : null,
    mensaje: mensaje.trim(),
    fecha: new Date().toISOString(),
  };

  mensajes.push(nuevoMensaje);
  escribir(ARCHIVO, mensajes);

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn(
        "⚠️  EMAIL_USER / EMAIL_PASS no configurados en .env — el mensaje se guardó pero no se envió email."
      );
      return res.status(201).json({
        mensaje: "Mensaje recibido correctamente (envío de email deshabilitado).",
      });
    }

    const transportador = crearTransportador();

    await transportador.sendMail({
      from: `"Formulario AutoStudio.VE" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: nuevoMensaje.email,
      subject: `Nuevo mensaje de contacto — ${nuevoMensaje.nombre}`,
      text: `
Nombre: ${nuevoMensaje.nombre}
Email: ${nuevoMensaje.email}
Teléfono: ${nuevoMensaje.telefono || "No especificado"}

Mensaje:
${nuevoMensaje.mensaje}
      `.trim(),
    });

    res.status(201).json({ mensaje: "Mensaje enviado correctamente. Te contactaremos pronto." });
  } catch (error) {
    console.error("Error al enviar email:", error.message);
    res.status(201).json({
      mensaje: "Mensaje recibido, pero hubo un problema al enviar la notificación por email.",
    });
  }
});

module.exports = router;