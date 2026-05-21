// =========================
// FORMULARIO
// =========================

const form = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaFormulario");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    // VALIDACIÓN CAMPOS
    if (!nombre || !email || !mensaje) {

      respuesta.textContent = "⚠️ Completá todos los campos";
      respuesta.style.color = "#ff4d4d";

      return;
    }

    // VALIDACIÓN EMAIL
    if (!email.includes("@")) {

      respuesta.textContent = "⚠️ Ingresá un email válido";
      respuesta.style.color = "#ff4d4d";

      return;
    }

    // ÉXITO
    respuesta.textContent = "✅ Mensaje enviado correctamente";
    respuesta.style.color = "#00ff88";

    // SWEET ALERT
    Swal.fire({
      title: "Mensaje enviado",
      text: "Te responderemos lo antes posible",
      icon: "success",
      confirmButtonText: "Aceptar",
      background: "#111827",
      color: "#fff"
    });

    // RESET FORM
    form.reset();

  });

}


// =========================
// REDES SOCIALES
// =========================

const ig = document.getElementById("ig");
const fb = document.getElementById("fb");
const tw = document.getElementById("tw");
const yt = document.getElementById("yt");

if (ig) {
  ig.addEventListener("click", () => {
    console.log("Instagram abierto");
  });
}

if (fb) {
  fb.addEventListener("click", () => {
    console.log("Facebook abierto");
  });
}

if (tw) {
  tw.addEventListener("click", () => {
    console.log("Twitter abierto");
  });
}

if (yt) {
  yt.addEventListener("click", () => {
    console.log("YouTube abierto");
  });
}


// =========================
// ARRAY DE SERVICIOS
// =========================

const servicios = [

  {
    id: 1,
    titulo: "Experiencia y compromiso",
    descripcion: "Profesionales disponibles para cualquier emergencia.",
    imagen: "img/experiencia.jpg",
    categoria: "mecanica"
  },

  {
    id: 2,
    titulo: "Consultas gratuitas",
    descripcion: "Más de 10 años ofreciendo servicios de calidad.",
    imagen: "img/asesoramiento.jpg",
    categoria: "asesoramiento"
  },

  {
    id: 3,
    titulo: "Servicios garantizados",
    descripcion: "Garantía total en cada trabajo realizado.",
    imagen: "img/servicios.jpg",
    categoria: "detailing"
  },

  {
    id: 4,
    titulo: "Servicio técnico 24/7",
    descripcion: "Asesoramiento y atención permanente.",
    imagen: "img/mantenimiento.jpg",
    categoria: "mecanica"
  },

  {
    id: 5,
    titulo: "Mecánico a domicilio",
    descripcion: "Soluciones mecánicas sin salir de casa.",
    imagen: "img/domicilios.jpg",
    categoria: "domicilio"
  }

];


// =========================
// CONTENEDOR
// =========================

const contenedor = document.getElementById("contenedorServicios");


// =========================
// RENDER DINÁMICO
// =========================

function renderServicios(array) {

  if (!contenedor) return;

  contenedor.innerHTML = array.map(servicio => {

    // DESTRUCTURING
    const {
      titulo,
      descripcion,
      imagen
    } = servicio;

    return `

      <div class="caja" data-aos="zoom-in">

        <img src="${imagen}" alt="${titulo}">

        <h3>${titulo}</h3>

        <p>${descripcion}</p>

      </div>

    `;

  }).join("");

}


// =========================
// FILTER
// =========================

const serviciosMecanica = servicios.filter(servicio =>
  servicio.categoria === "mecanica"
);

console.log("Servicios mecánica:", serviciosMecanica);


// =========================
// LOCAL STORAGE
// =========================

localStorage.setItem(
  "servicios",
  JSON.stringify(servicios)
);

const serviciosGuardados = JSON.parse(
  localStorage.getItem("servicios")
);

console.log("LocalStorage:", serviciosGuardados);


// =========================
// PROMESA
// =========================

const promesaServicios = new Promise((resolve) => {

  setTimeout(() => {

    resolve(servicios);

  }, 1000);

});


// =========================
// ASYNC / AWAIT
// =========================

async function iniciarApp() {

  try {

    const data = await promesaServicios;

    renderServicios(data);

    console.log("App iniciada correctamente");

  } catch (error) {

    console.log(error);

  }

}


// =========================
// INICIAR APP
// =========================

iniciarApp();