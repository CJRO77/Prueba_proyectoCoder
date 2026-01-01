// FORMULARIO
const form = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaFormulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = name.value.trim();
  const email = email.value.trim();
  const mensaje = message.value.trim();

  if (!nombre || !email || !mensaje) {
    respuesta.textContent = "⚠️ Completá todos los campos";
    respuesta.style.color = "red";
    return;
  }

  respuesta.textContent = "✅ Mensaje enviado correctamente";
  respuesta.style.color = "green";
  form.reset();
});

// WHATSAPP
document.getElementById("btnWhatsapp").onclick = () => {
  window.open(
    "https://wa.me/5491112345678?text=Hola%20quiero%20solicitar%20un%20servicio%20en%20CJRO",
    "_blank"
  );
};

// REDES
ig.onclick = () => window.open("https://www.instagram.com/", "_blank");
fb.onclick = () => window.open("https://www.facebook.com/", "_blank");
tw.onclick = () => window.open("https://twitter.com/", "_blank");
ln.onclick = () => window.open("https://www.linkedin.com/", "_blank");
yt.onclick = () => window.open("https://www.youtube.com/", "_blank");
