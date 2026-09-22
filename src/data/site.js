export const WHATSAPP_NUMBER = "919952418671";
export const WHATSAPP_DISPLAY = "+91 99524 18671";
export const CONTACT_EMAIL = "contect@kverra.com";

export const whatsappLink = (message = "Hi Kverra Infotech, I'd like to get a quote for photo editing.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
