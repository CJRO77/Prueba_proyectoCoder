const express = require("express");
const router = express.Router();
const { leer, escribir, generarId } = require("../db");

const ARCHIVO = "servicios.json";

// GET: Obtener la lista de servicios

router.get("/", (req, res) => {
  const servicios = leer(ARCHIVO);
  res.json(servicios);
});

// POST: Crear un nuevo servicio (con validación básica)

router.post("/", (req, res) => {
  const { titulo, descripcion, imagen } = req.body;

  if (!titulo || !descripcion || !imagen) {
    return res.status(400).json({
      error: "Faltan campos obligatorios: titulo, descripcion e imagen son requeridos.",
    });
  }

  const servicios = leer(ARCHIVO);

  const nuevoServicio = {
    id: generarId(servicios),
    titulo: titulo.trim(),
    descripcion: descripcion.trim(),
    imagen: imagen.trim(),
  };

  servicios.push(nuevoServicio);
  escribir(ARCHIVO, servicios);

  res.status(201).json(nuevoServicio);
});

// DELETE: Eliminar un servicio por id

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const servicios = leer(ARCHIVO);

  const existe = servicios.some((s) => s.id === id);
  if (!existe) {
    return res.status(404).json({ error: "Servicio no encontrado." });
  }

  const actualizados = servicios.filter((s) => s.id !== id);
  escribir(ARCHIVO, actualizados);

  res.json({ mensaje: "Servicio eliminado correctamente." });
});

module.exports = router;
