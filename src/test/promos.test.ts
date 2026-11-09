import { describe, expect, it } from "vitest";
import {
  BULK_DISCOUNT_PERCENT,
  STUDENT_DISCOUNT_PERCENT,
  qualifiesForBulkDiscount,
} from "@/lib/promos";

describe("Promociones", () => {
  it("students get 10% off", () => {
    expect(STUDENT_DISCOUNT_PERCENT).toBe(10);
  });

  it("orders of more than 30 donuts get 15% off", () => {
    expect(BULK_DISCOUNT_PERCENT).toBe(15);
    expect(qualifiesForBulkDiscount(31)).toBe(true);
  });

  it("an order of exactly 30 donuts does not get the bulk discount", () => {
    expect(qualifiesForBulkDiscount(30)).toBe(false);
  });
});
