import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  orderSize: number = 0;
  // orderSize = this.orderService.getCurrentOrder()?.length


  constructor (private orderService: OrderService) {

  }
  ngOnInit(): void {
    // this.orderService.clearOrder();
    this.orderService.$order.subscribe(order => {
      let amount = 0;
      order.products.forEach((item)=> amount += item.quantity);
      this.orderSize = amount;
  
    })
    
  }



}
