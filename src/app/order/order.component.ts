import { Component, Input } from '@angular/core';
import { Product } from '../product-list/products';
import { OrderService } from '../local.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private orderService: OrderService) {

  }

  // currentOrder: Product[] = this.localService

  




}
