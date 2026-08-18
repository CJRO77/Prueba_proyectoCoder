const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// LA FUENTE DE LA VERDAD: Aquí están tus 5 servicios con las rutas corregidas
const servicios = [
  {
    id: 1,
    titulo: "Mecánica General",
    descripcion: "Diagnóstico, reparación de motores y tren delantero profesional.",
    imagen: "/img/experiencia.jpg" 
  },
  {
    id: 2,
    titulo: "Detailing Premium",
    descripcion: "Limpieza profunda, corrección de laca y restauración estética.",
    imagen: "/img/limpieza profunda.jpg"
  },
  {
    id: 3,
    titulo: "Mecánico a domicilio",
    descripcion: "Atención rápida y auxilio técnico donde te encuentres.",
    imagen: "/img/domicilios.jpg"
  },
  {
    id: 4,
    titulo: "Cambio de Aceite y Filtros",
    descripcion: "Mantenimiento preventivo con insumos de primera calidad.",
    imagen: "/img/cambio de aceite.jpg" // Asegúrate de que esta foto exista en public/img
  },
  {
    id: 5,
    titulo: "Alineación y Balanceo",
    descripcion: "Optimización de neumáticos para un andar seguro y suave.",
    imagen: "/img/mantenimiento.jpg" // Asegúrate de que esta foto exista en public/img
  }
];


// GET: Enviar los 5 servicios al frontend
app.get("/api/servicios", (req, res) => {
  res.json(servicios);
});

// POST: Guardar un nuevo servicio enviado desde el formulario
app.post("/api/servicios", (req, res) => {
  const nuevoServicio = {
    id: servicios.length + 1,
    ...req.body
  };
  servicios.push(nuevoServicio);
  res.json(nuevoServicio);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});