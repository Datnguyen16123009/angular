import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PayService } from '../pay.service';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css'],
})
export class GioHangComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  productList: Product[];
  total: number = 0;
  constructor(
    private productService: PayService,
    private messageService: MessageService
  ) {
    this.productList = productService.getProducts();
  }

  get_all_total() {
    return this.productList.reduce((total, value) => total + value.tong, 0);
  }
  Checkout() {
    this.visible = false;
    this.productList = this.productService.delProducts();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
