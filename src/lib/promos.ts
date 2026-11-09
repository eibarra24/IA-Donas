// Promotions defined by the owner.
export const STUDENT_DISCOUNT_PERCENT = 10; // with a valid student ID
export const BULK_DISCOUNT_PERCENT = 15; // orders of more than BULK_THRESHOLD donuts
export const BULK_THRESHOLD = 30;

/** The bulk discount applies when the order has MORE than 30 donuts. */
export function qualifiesForBulkDiscount(donuts: number): boolean {
  return donuts > BULK_THRESHOLD;
}
