import { Component } from '@angular/core';
import { Product, SelectedProduct } from '../product-list/products';
import { ProductsService } from '../product-list/products.service';
import { OrderService } from '../order/order.service';
import { OrderInfo } from '../order/order';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {
  products: SelectedProduct[];

  cols: any[];

  constructor(private productsService: ProductsService, private orderService: OrderService) {}
  
  ngOnInit() {

      const currentOrder = this.orderService.getOrderInfo();
      const orderProducts = currentOrder.products;
      const ids = currentOrder.products.map(x=> x.productId);
      console.log(currentOrder);

      this.productsService.getProductsByIds(ids).subscribe(res => {
        this.products = res as SelectedProduct[];
        this.products.map(product => product.quantity = orderProducts.find(x=> x.productId == product.id)?.quantity);
      });

     

      this.cols = [
        { field: 'photo', header: 'Товар' },
        { field: 'price', header: 'Ціна' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'sum', header: 'Підсумок' },
    ];
  }


  //     this.productsService.getProductsMini().then((data) => {
  //         this.products = data;
  //     });


  // }
}

