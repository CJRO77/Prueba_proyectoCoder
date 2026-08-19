# ProyectoTaller-AutoStudio.ve

Sitio web para **AutoStudio.VE**, un taller de mecánica ligera y detailing automotriz. Permite mostrar los servicios ofrecidos, información de contacto, trabajos a domicilio, preguntas frecuentes y un formulario de contacto/presupuesto para clientes.

Proyecto personal desarrollado como práctica full-stack, combinando un backend en Node.js/Express con un frontend en React.

## 🚗 Funcionalidades

- **Servicios**: listado dinámico de servicios (mecánica general, detailing premium, mecánico a domicilio, cambio de aceite y filtros, alineación y balanceo), obtenidos desde una API propia y persistidos en disco.
- **Sobre nosotros**: información general del taller.
- **Preguntas frecuentes (FAQ)**: sección con dudas comunes de los clientes.
- **Contacto**: datos de contacto, dirección y horarios de atención.
- **Formulario de contacto/presupuestos**: funcional — valida los datos, los guarda en el servidor y envía una notificación por email. *(Nota: el envío de email todavía no fue probado con credenciales reales; ver sección de Configuración)*.
- **Turnos por WhatsApp**: botón que abre una conversación de WhatsApp con número y mensaje predefinido, configurables por variable de entorno.

## 🛠️ Tecnologías

**Backend**
- Node.js
- Express
- CORS (restringido al origen del frontend)
- dotenv (variables de entorno)
- Nodemailer (envío de emails del formulario)

**Frontend**
- React
- Vite
- AOS (animaciones al hacer scroll)
- Bootstrap Icons

> Los datos de los servicios y los mensajes de contacto se guardan en archivos JSON dentro de `backend/data/`, a modo de persistencia simple. No hay una base de datos conectada todavía (ver Pendientes).

## 📁 Estructura del proyecto

```
ProyectoTaller-AutoStudio.ve/
├── backend/
│   ├── data/
│   │   ├── servicios.json      # Datos de servicios (persistente)
│   │   └── mensajes.json       # Respaldo de mensajes del formulario
│   ├── routes/
│   │   ├── servicios.routes.js # GET / POST / DELETE de servicios
│   │   └── contacto.routes.js  # POST del formulario de contacto
│   ├── db.js                   # Helper de lectura/escritura de JSON
│   ├── server.js                # Punto de entrada del backend
│   ├── .env                     # Variables de entorno (no versionado)
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/                # Home, Contacto, FAQ, Sobre nosotros
    │   ├── components/           # CardServicio, FormularioServicio, Navbar, Logo
    │   ├── scss/
    │   ├── config.js             # Centraliza API_URL y WHATSAPP_NUMBER
    │   └── App.jsx
    ├── public/
    │   └── img/                  # Imágenes de los servicios
    ├── .env                      # Variables de entorno (no versionado)
    ├── .env.example
    ├── index.html
    └── package.json
```

## ⚙️ Instalación y uso

Este proyecto requiere correr **dos servidores en simultáneo**: el backend (API) y el frontend (interfaz).

### 1. Clonar el repositorio

```bash
git clone https://github.com/CJRO77/ProyectoTaller-AutoStudio.ve.git
cd ProyectoTaller-AutoStudio.ve
```

### 2. Levantar el backend

En una terminal:

```bash
cd backend
npm install
cp .env.example .env
```

Editá `backend/.env` y completá:
- `EMAIL_USER` / `EMAIL_PASS`: una **contraseña de aplicación de Gmail** (no tu contraseña normal). Se genera en https://myaccount.google.com/apppasswords, y requiere tener verificación en dos pasos activada en la cuenta.
- `EMAIL_TO`: el email donde querés recibir los mensajes del formulario.

Si no completás estas variables, el servidor arranca igual y el formulario sigue guardando los mensajes en `backend/data/mensajes.json`, pero no se envía la notificación por email.

Luego:

```bash
node server.js
```

El servidor va a correr en `http://localhost:3000`.

### 3. Levantar el frontend

En **otra terminal**:

```bash
cd frontend
npm install
cp .env.example .env
```

Editá `frontend/.env` y completá `VITE_WHATSAPP_NUMBER` con el número real de WhatsApp del taller (formato internacional, sin `+` ni espacios).

Luego:

```bash
npm run dev
```

Vite va a mostrar la URL local, normalmente `http://localhost:5173`. **Abrí esa URL en el navegador** para ver la app (no uses Live Server ni otra extensión, ya que el proyecto corre con Vite).

## 🚧 Pendientes / próximos pasos

- [ ] **Probar el envío de emails del formulario** con credenciales reales de Gmail — todavía no fue verificado en la práctica.
- [ ] Migrar los servicios y mensajes desde archivos JSON a una base de datos (MongoDB o similar), para mayor escalabilidad.
- [ ] Agregar autenticación si en el futuro se habilita un panel para administrar servicios.
- [ ] Optimizar y comprimir las imágenes de `frontend/public/img/`.
- [ ] Revisar el diseño responsive en dispositivos móviles, especialmente el formulario y las cards de servicios.
- [ ] Configurar CORS y variables de entorno para un entorno de producción (cuando se despliegue el proyecto).

## 📄 Licencia

Todos los derechos reservados. Este proyecto es de uso personal y no está autorizado su uso, copia o distribución sin permiso expreso del autor.

---

Desarrollado por Carlos Jonathan Rodriguez Osorio — AutoStudio.VE 🔧