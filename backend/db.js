const fs = require("fs");
const path = require("path");

function leer(nombreArchivo) {
  const ruta = path.join(__dirname, "data", nombreArchivo);

  if (!fs.existsSync(ruta)) {
    fs.writeFileSync(ruta, "[]", "utf-8");
  }

  const contenido = fs.readFileSync(ruta, "utf-8");
  return JSON.parse(contenido);
}

function escribir(nombreArchivo, datos) {
  const ruta = path.join(__dirname, "data", nombreArchivo);
  fs.writeFileSync(ruta, JSON.stringify(datos, null, 2), "utf-8");
}

function generarId(coleccion) {
  if (coleccion.length === 0) return 1;
  const maxId = Math.max(...coleccion.map((item) => item.id));
  return maxId + 1;
}

module.exports = { leer, escribir, generarId };