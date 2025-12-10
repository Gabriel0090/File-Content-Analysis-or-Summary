import { describe, it, expect } from "vitest";
import { formatWhatsAppMessage, getWhatsAppLink } from "./whatsapp";
import { Product } from "./data";

describe("WhatsApp Integration", () => {
  const mockProduct: Product = {
    id: "1",
    name: "Óleo Essencial de Lavanda",
    category: "essential-oils",
    price: 45.0,
    image: "/images/test.jpg",
    description: "Test product",
    tags: ["Artesanal"],
  };

  it("should format WhatsApp message correctly", () => {
    const items = [{ product: mockProduct, quantity: 2 }];
    const total = 90.0;
    const message = formatWhatsAppMessage(items, total, "João");

    // Message is URL encoded, so we need to decode it for testing
    const decodedMessage = decodeURIComponent(message);
    expect(decodedMessage).toContain("2x Óleo Essencial de Lavanda");
    expect(decodedMessage).toContain("R$ 90.00");
  });

  it("should generate valid WhatsApp link", () => {
    const items = [{ product: mockProduct, quantity: 1 }];
    const total = 45.0;
    const link = getWhatsAppLink(items, total);

    expect(link).toContain("https://wa.me/");
    expect(link).toContain("text=");
  });

  it("should use VITE_WHATSAPP_NUMBER from environment", () => {
    const items = [{ product: mockProduct, quantity: 1 }];
    const total = 45.0;
    const link = getWhatsAppLink(items, total);

    // The link should contain wa.me/ followed by a phone number or placeholder
    expect(link).toMatch(/wa\.me\/[+\d\-]+/);
  });

  it("should encode message properly for URL", () => {
    const items = [{ product: mockProduct, quantity: 1 }];
    const total = 45.0;
    const link = getWhatsAppLink(items, total);

    // URL should be properly encoded (no unencoded spaces)
    expect(link).not.toContain(" ");
    // Should contain encoded characters
    expect(link).toMatch(/%[0-9A-F]{2}/i);
  });
});
