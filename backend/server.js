require("dotenv").config();
const express = require("express");
const cors = require("cors");

const serviciosRoutes = require("./routes/servicios.routes");
const contactoRoutes = require("./routes/contacto.routes");

const app = express();

// --- Middlewares ---

app.use(express.json());


// CORS restringido solo al frontend (configurable por .env)

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({ origin: FRONTEND_URL }));

// --- Rutas ---

app.use("/api/servicios", serviciosRoutes);
app.use("/api/contacto", contactoRoutes);

// Ruta de salud simple, útil para chequear que el server está vivo

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`🔒 CORS habilitado solo para: ${FRONTEND_URL}`);
});