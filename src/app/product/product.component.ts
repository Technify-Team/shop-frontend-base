import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/products';
import { OrderService } from '../local.service';
import { SelectedProduct } from '../order/selected-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: Product;

  @Output()
  selectedProduct = new EventEmitter<SelectedProduct>();

  quantity: number = 1;

test() {
  this.quantity++;
}

  constructor (private orderService: OrderService) {}



  addToOrder() {
    const selectedProduct = new SelectedProduct(this.product.id, this.quantity);
    // this.orderService.clearOrder();
    this.orderService.addToOrder(selectedProduct);
  }




}
