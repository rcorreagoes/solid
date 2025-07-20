export interface DiscountStrategy {
  getDiscount(price: number): number;
  label: string;
}
