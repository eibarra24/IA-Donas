// Business WhatsApp number (Mexico, country code 52).
export const WHATSAPP_NUMBER = "526561458566";
export const WHATSAPP_DISPLAY = "656 145 8566";

export const DEFAULT_MESSAGE =
  "¡Hola! Vi su página de Donas La tentación de hoy y quiero hacer un pedido 🍩";

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
