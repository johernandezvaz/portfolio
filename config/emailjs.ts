// Configuración de EmailJS
// Reemplaza estos valores con los de tu cuenta de EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_dlnqh42', // ID del servicio de email (Gmail, Outlook, etc.)
  TEMPLATE_ID: 'template_g1hnfsj', // ID de la plantilla de email
  PUBLIC_KEY: 'Q-_MQuQwXVq6AgeBy', // Clave pública de EmailJS
};

// Instrucciones para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/ y crea una cuenta
// 2. Conecta tu servicio de email (Gmail, Outlook, etc.)
// 3. Crea una plantilla de email con las siguientes variables:
//    - {{from_name}} - Nombre del remitente
//    - {{from_email}} - Email del remitente  
//    - {{subject}} - Asunto del mensaje
//    - {{message}} - Contenido del mensaje
//    - {{to_name}} - Tu nombre (destinatario)
// 4. Copia los IDs y la clave pública aquí
// 5. Actualiza las constantes en contact-section.tsx