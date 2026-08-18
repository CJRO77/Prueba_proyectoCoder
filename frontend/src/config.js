// Centraliza las variables de entorno del frontend.
// Así evitamos tener "http://localhost:3000" hardcodeado en varios archivos.

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5491112345678";