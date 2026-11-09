import { describe, expect, it } from "vitest";
import { whatsappUrl } from "@/lib/whatsapp";

describe("WhatsApp contact link", () => {
  it("opens a chat with the business number 656 145 8566 (Mexico)", () => {
    expect(whatsappUrl("hola").startsWith("https://wa.me/526561458566?")).toBe(true);
  });

  it("pre-fills the customer's message", () => {
    expect(whatsappUrl("Quiero una docena")).toContain("text=Quiero%20una%20docena");
  });
});
