import { DiscountStrategy } from './discount-strategy';

export class PremiumDiscount implements DiscountStrategy {
  label = 'Premium (25%)';

  getDiscount(price: number): number {
    return price * 0.75;
  }
}
