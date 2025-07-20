import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiscountStrategy } from './discount-strategy';
import { PremiumDiscount } from './premium-discount.strategy';
import { RegularDiscount } from './regular-discount.strategy';

@Component({
  standalone: true,
  selector: 'app-o-open-closed',
  imports: [CommonModule, FormsModule],
  templateUrl: './o-open-closed.html',
  styleUrl: './o-open-closed.scss',
})
export class OOpenClosed {
  price = 100;
  strategies: DiscountStrategy[] = [
    new RegularDiscount(),
    new PremiumDiscount(),
  ];
  selectedStrategy = this.strategies[0];

  get finalPrice(): number {
    return this.selectedStrategy.getDiscount(this.price);
  }
}
