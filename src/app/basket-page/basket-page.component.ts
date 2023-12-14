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
  order: OrderInfo;
  products: SelectedProduct[];
  subtotal: number = 0;
  sale: number = 19.8;
  total: number;

  

  cols: any[];

  constructor(private productsService: ProductsService, private orderService: OrderService) {}

  ngOnInit() {

      this.order = this.orderService.getOrderInfo();
      const orderProducts = this.order.products;
      const ids = this.order.products.map(x=> x.productId);
      console.log(this.order);

      this.productsService.getProductsByIds(ids).subscribe(res => {
        this.products = res as SelectedProduct[];
        this.products.map(product => product.quantity = orderProducts.find(x=> x.productId == product.id)?.quantity);
        this.caclulateTotal();
      });

      this.orderService.$order.subscribe(order => {
        this.order = order;
        this.products = this.products.filter(product=> this.order.products.find(x=> x.productId == product.id));
        this.caclulateTotal();
      });

     

      this.cols = [
        { field: 'photo', header: 'Товар' },
        { field: 'price', header: 'Ціна' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'sum', header: 'Підсумок' },
    ];
  }

  productQuantityChanged(productId: number, quantity: number) {
    this.orderService.updateOrder(productId, quantity);
  }

  deleteProduct(productId: number) {
    this.orderService.deleteProductById(productId);
  }

  caclulateTotal(){
    this.subtotal = 0;
    this.products.forEach((item)=> this.subtotal += item.quantity?item.quantity*item.price : item.price);
    this.total = this.subtotal - this.sale;
  }


  //     this.productsService.getProductsMini().then((data) => {
  //         this.products = data;
  //     });


  // }
}

