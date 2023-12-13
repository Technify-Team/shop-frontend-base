import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/products';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: Product;

  quantity: number = 1;

test() {
  this.quantity++;
}

  constructor (private orderService: OrderService) {}



  addToOrder() {
    this.orderService.addToOrder(this.product.id, this.quantity);
  }
}
