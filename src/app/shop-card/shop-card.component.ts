import { Component, Input } from '@angular/core';
import { PayService } from '../pay.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css'],
})
export class ShopCardComponent {
  @Input() product: any;
  soLuong = 0;
  constructor(private service: PayService) {}
  incrementQuantity() {
    this.soLuong++;
  }

  decrementQuantity() {
    if (this.soLuong > 0) {
      this.soLuong--;
    }
  }

  addToCart(product: any) {
    this.service.addProduct(product, this.soLuong);
    this.soLuong = 0;
  }
}
