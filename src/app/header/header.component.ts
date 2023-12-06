import { Component, OnInit } from '@angular/core';
import { OrderService } from '../local.service';

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
      console.log(order);
      let amount = 0;
      order.products.forEach((item)=> amount += item);
      this.orderSize = amount;
      // this.orderSize = order.reduce((sum, item) => sum + item.quantity, 0);
      // order.forEach((item)=> console.log(item.quantity))
      // this.orderSize = 0;
      // this.orderService.$order.subscribe(order => {
      //   order.forEach((item)=> this.orderSize += item.quantity)
    })
    
  }



}
