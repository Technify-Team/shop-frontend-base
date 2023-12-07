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



  constructor (private orderService: OrderService) {}

  increaseQuantity():void {
    this.quantity++;
  }

  decreaseQuantity():void {
    if (this.quantity !== 1){
      this.quantity--;
    }
    
  }

  addToOrder() {
    const selectedProduct = new SelectedProduct(this.product.id, this.quantity);
    // this.orderService.clearOrder();
    this.orderService.addToOrder(selectedProduct);
  }



}
