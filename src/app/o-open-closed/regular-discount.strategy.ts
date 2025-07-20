import { DiscountStrategy } from './discount-strategy';

export class RegularDiscount implements DiscountStrategy {
  label = 'Regular (10%)';

  getDiscount(price: number): number {
    return price * 0.9;
  }
}
