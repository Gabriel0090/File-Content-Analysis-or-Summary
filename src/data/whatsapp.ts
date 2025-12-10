import { CartItem } from "@/contexts/CartContext";

export function formatWhatsAppMessage(
  items: CartItem[],
  total: number,
  customerName: string = "Cliente"
): string {
  const itemsList = items
    .map((item) => `${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2)}`)
    .join("\n");

  const message = `Olá Fabiana! 🦋\n\nGostaria de fechar o seguinte pedido:\n\n${itemsList}\n\n*Subtotal:* R$ ${total.toFixed(2)}\n*Frete:* Será calculado conforme localização\n\nPor favor, confirme a disponibilidade e o frete.\n\nObrigado!`;

  return encodeURIComponent(message);
}

export function getWhatsAppLink(
  items: CartItem[],
  total: number,
  customerName?: string
): string {
  const message = formatWhatsAppMessage(items, total, customerName);
  // IMPORTANTE: Substitua este número pelo WhatsApp real de Fabiana
  // Formato: código do país (55) + DDD (11) + número (9 dígitos)
  // Exemplo: 5511987654321
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
